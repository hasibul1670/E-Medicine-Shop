import { api } from "./../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),

    singleProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["products"],
    }),

    updateProduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags:["products"]
    }),
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  useUpdateProductMutation,
} = productApi;
