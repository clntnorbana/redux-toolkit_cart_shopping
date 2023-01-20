import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const products_url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  products: [],
  loading: true,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(products_url);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        console.log(action);
        state.loading = false;
      });
  },
});

export const selectAllProducts = (state) => state.products.products;
export const isLoading = (state) => state.products.loading;

export default productsSlice.reducer;
