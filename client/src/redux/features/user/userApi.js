import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/products",
    }),

    singleUser: builder.query({
      query: (id) => `/students/${id}`,
      providesTags: ['address','phone'],
    }),

    postUser: builder.mutation({
      query: ({ data }) => ({
        url: `/students/create-User`,
        method: "POST",
        body: data,
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: "DELETE",
      }),
    }),

    editUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/students/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ['address', 'phone'],
    }),
  }),
});

export const {
  useEditUserMutation,
  usePostReviewMutation,
  usePostUserMutation,
  useDeleteUserMutation,
  useSingleUserQuery,
} = productApi;
