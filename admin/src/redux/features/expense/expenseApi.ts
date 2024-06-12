import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllExpense: builder.query({
      query: () => "/expense/all-enpense",
      providesTags: ["data"],
    }),

    getSingleExpense: builder.query({
      query: (id) => `/expense/${id}`,
      providesTags: ["data"],
    }),

    createExpense: builder.mutation({
      query: ({ data }) => ({
        url: `/expense/create-expense`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
    updateExpense: builder.mutation({
      query: ({ data, id }) => ({
        url: `/expense/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
    deleteExpense: builder.mutation({
      query: ({ data, id }) => ({
        url: `/expense/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["data"],
    }),
  }),
});

export const {
  useCreateExpenseMutation,
  useDeleteExpenseMutation,
  useUpdateExpenseMutation,
  useGetAllExpenseQuery,
  useGetSingleExpenseQuery,
} = productApi;
