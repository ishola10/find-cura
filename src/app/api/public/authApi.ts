// app/api/private/authApi.ts
import { apiService, setCurrentUser } from "@/services/apiService";

const authApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/auth/register",
        data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Save tokens + user globally
          setCurrentUser(data.user, { accessToken: data.token });
        } catch (error) {
          console.error("Signup error:", error);
        }
      },
    }),

    login: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: `/auth/login`,
        data,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          setCurrentUser(data.user, {
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          });
        } catch (error) {
          console.error("Login error:", error);
        }
      },
    }),

    getUser: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/users/${id}`,
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation, useGetUserQuery } = authApi;
