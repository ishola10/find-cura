import { routes } from './../constants/index';
// services/apiService.ts
import {
  BaseQueryFn,
  createApi,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import axios, { AxiosRequestConfig } from "axios";

type AxiosBaseQueryArgs = {
  url?: string;
  method: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
};

// 🔹 Keep a simple in-memory cache for user & tokens
let currentUser: any = null;
let accessToken: string | null = null;
let refreshToken: string | null = null;

// 🔹 Hydrate user and tokens from localStorage on startup
if (typeof window !== "undefined") {
  const storedUser = localStorage.getItem("user");
  const storedAccess = localStorage.getItem("accessToken");
  const storedRefresh = localStorage.getItem("refreshToken");

  if (storedUser) currentUser = JSON.parse(storedUser);
  accessToken = storedAccess;
  refreshToken = storedRefresh;
}

// 🔹 Provide a helper to get the current user anywhere
export const getCurrentUser = () => currentUser;

const axiosBaseQuery: BaseQueryFn<
  AxiosBaseQueryArgs,
  any,
  FetchBaseQueryError
> = async ({ url, method, data, params, headers }) => {
  try {
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

    // Attach token automatically
    if (accessToken) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }

    const result = await axios({ url, method, data, params, headers });
    return { data: result.data };
  } catch (axiosError: any) {
    const originalRequest = axiosError.config;

    // 🔁 If token expired, attempt refresh
    if (axiosError.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (refreshToken) {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refreshToken`,
            { refreshToken }
          );

          const newAccessToken = response.data.accessToken;
          localStorage.setItem("accessToken", newAccessToken);
          accessToken = newAccessToken;

          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newAccessToken}`;

          // Retry the failed request
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          const retryResponse = await axios(originalRequest);
          return { data: retryResponse.data };
        } catch (refreshError) {
          console.error("Token refresh failed:", refreshError);
          localStorage.clear();
          window.location.href = "/login";
        }
      }
    }

    return {
      error: {
        status: axiosError.response?.status ?? 500,
        data: axiosError.response?.data ?? axiosError.message,
      },
    };
  }
};

// 🔹 Export the API base with shared state
export const apiService = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});

// 🔹 Allow user updates when they log in or sign up
export const setCurrentUser = (user: any, tokens?: { accessToken?: string; refreshToken?: string }) => {
  currentUser = user;
  if (user) localStorage.setItem("user", JSON.stringify(user));
  if (tokens?.accessToken) {
    accessToken = tokens.accessToken;
    localStorage.setItem("accessToken", tokens.accessToken);
  }
  if (tokens?.refreshToken) {
    refreshToken = tokens.refreshToken;
    localStorage.setItem("refreshToken", tokens.refreshToken);
  }
};

// 🔹 Clear user and token data (logout)
export const logoutUser = () => {
  try {
    // Clear in-memory data
    currentUser = null;
    accessToken = null;
    refreshToken = null;

    // Clear persisted data
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }

    // Optional: Clear axios headers
    delete axios.defaults.headers.common["Authorization"];

    // Redirect to login page (optional)
    window.location.href = "/login";
  } catch (error) {
    console.error("Error during logout:", error);
  }
};

