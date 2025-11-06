import { providesList } from "@/lib/utils";
import { apiService } from "@/services";

const authApi = apiService.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => ({
        method: "GET",
        url: `/users/${id}`,
      }),
    }),
  }),
});
export const { useGetUserQuery } = authApi;