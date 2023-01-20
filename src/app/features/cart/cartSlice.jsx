import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  total: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
        toast.info(`${action.payload.title} quantity increased`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, quantity: 1 };
        state.cart.push(tempProduct);
        toast.success(`${action.payload.title} was added to cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      const nextCartItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );

      state.cart = nextCartItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cart));

      toast.warning(`${action.payload.title} was removed from cart`, {
        position: "bottom-left",
      });
    },
    decreaseQuantity(state, action) {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;

        toast.info(`${action.payload.title} quantity decreased`, {
          position: "bottom-left",
        });
      } else if (state.cart[itemIndex].quantity === 1) {
        const nextCartItems = state.cart.filter(
          (item) => item.id !== action.payload.id
        );

        state.cart = nextCartItems;

        toast.warning(`${action.payload.title} was removed from cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    clearCart(state, action) {
      state.cart = [];
      toast.warn("Cart cleared", {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
  cartSlice.actions;

export const selectAllCartItems = (state) => state.cart.cart;

export default cartSlice.reducer;
