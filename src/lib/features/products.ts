import {
  fetchAllProducts,
  fetchProductById,
  fetchCategories,
} from "@/app/services";
import { IInitialProductsState, IProduct } from "@/app/types/interfaces";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

const initialState: IInitialProductsState = {
  products: [],
  selectedProduct: null,
  categories: [],
  selectedCategories: [],
  cart: {
    items: {},
  },
  loadingProducts: true,
  loadingCategories: true,
  error: "",
};

export const getAllProducts = createAsyncThunk(
  "FETCH_ALL_PRODUCTS",
  async () => {
    try {
      const products = await fetchAllProducts();
      return products;
    } catch (error) {
      console.log("🚀 ~ getAllProducts ~ error:", error);
    }
  }
);

export const getProductById = createAsyncThunk(
  "FETCH_PRODUCT_BY_ID",
  async (id: number) => {
    try {
      const product = await fetchProductById(id);
      return product;
    } catch (error) {
      console.log("🚀 ~ getProductById ~ error:", error);
    }
  }
);

export const getCategories = createAsyncThunk("FETCH_CATEGORIES", async () => {
  try {
    const categories = await fetchCategories();
    return categories;
  } catch (error) {
    console.log("🚀 ~ getCategories ~ error:", error);
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    increaseProductQuantity(
      state,
      action: PayloadAction<{ product: IProduct }>
    ) {
      const id = action.payload.product.id;
      // if cart has item with same id, increment quantity by 1
      if (state.cart.items.hasOwnProperty(id)) {
        state.cart.items[id].quantity += 1;
      } else {
        state.cart.items[id] = {
          product: action.payload.product,
          quantity: 1,
        };
        // refresh cart in local storage
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    decrementProductQuantity(state, action: PayloadAction<{ id: number }>) {
      const id = action.payload.id;
      if (state.cart.items[id].quantity > 0) {
        state.cart.items[id].quantity -= 1;
      } else {
        delete state.cart.items[id];
      }
      // refresh cart in local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeProductFromCart(state, action: PayloadAction<{ id: number }>) {
      delete state.cart.items[action.payload.id];
      // refresh cart in local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart.items = [];
      // refresh cart in local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    loadCartFromLocalStorage(state, action) {
      state.cart = action.payload;
    },
    addSelectedCategory(state, action: PayloadAction<{ category: string }>) {
      // if category is already selected, remove it
      if (state.selectedCategories.includes(action.payload.category)) {
        state.selectedCategories = state.selectedCategories.filter(
          (category) => category !== action.payload.category
        );
      } else {
        state.selectedCategories.push(action.payload.category);
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loadingProducts = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loadingProducts = false;
      state.products = action.payload ?? [];
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loadingProducts = false;
      state.error = "Error fetching products";
    });
    builder.addCase(getProductById.pending, (state) => {
      state.loadingProducts = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.loadingProducts = false;
      state.selectedProduct = action.payload ?? null;
    });
    builder.addCase(getProductById.rejected, (state) => {
      state.loadingProducts = false;
      state.error = "Error fetching product";
    });
    builder.addCase(getCategories.pending, (state) => {
      state.loadingCategories = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loadingCategories = false;
      state.categories = action.payload ?? [];
    });
    builder.addCase(getCategories.rejected, (state) => {
      state.loadingCategories = false;
      state.error = "Error fetching categories";
    });
  },
});

export default productsSlice.reducer;

export const {
  increaseProductQuantity,
  decrementProductQuantity,
  removeProductFromCart,
  clearCart,
  loadCartFromLocalStorage,
  addSelectedCategory,
} = productsSlice.actions;
