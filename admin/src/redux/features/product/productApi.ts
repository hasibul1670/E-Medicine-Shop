import { api } from "./../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),

    singleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),

    updateProduct: builder.mutation({
      query: ({ data, id }) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: {
          data: data,
        },
      }),
    }),
    
  }),
});

export const {
  useGetProductsQuery,
  useSingleProductQuery,
  useUpdateProductMutation,
} = productApi;
