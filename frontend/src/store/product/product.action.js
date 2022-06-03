import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loadCategories = createAsyncThunk(
  "product/ loadCategories",
  async (_, thunkAPI) => {
    try {
      const url = "http://localhost:5000/categories";
      const res = await axios.get(url);
      const { data } = await res;
      return data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const loadProducts = createAsyncThunk(
  "product/ loadProducts",
  async (_, thunkAPI) => {
    try {
      const url = "http://localhost:5000/products";
      const res = await axios.get(url);
      const { data } = await res;

      return data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const filteredProducts = createAsyncThunk(
  "product/filteredProducts",
  async (id, thunkAPI) => {
    const rootStore = thunkAPI.getState().product;
    const selectedCategory = rootStore.categories.filter(
      (product) => product.name === id
    );
    try {
      const url = "http://localhost:5000/products";
      const res = await axios.get(url);
      const { data } = await res;

      const result = data.filter(
        (product) => product.category === selectedCategory[0].id
      );

      return result;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
