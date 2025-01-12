// Purpose: To create a service that fetches data from the fake store api

import { IProduct } from "../types/interfaces";


const BASE_URL = "https://fakestoreapi.com";

////////////// PRODUCTS //////////////

export const fetchAllProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(`${BASE_URL}/products`);
  const products = await response.json();
  return products;
};

export const fetchProductById = async (id: number): Promise<IProduct> => {
  const response = await fetch(`${BASE_URL}/products/${id}`);
  const product = await response.json();
  return product;
};

export const fetchProductsByCategory = async (category: string): Promise<IProduct[]> => {
  const response = await fetch(`${BASE_URL}/products/category/${category}`);
  const products = await response.json();
  return products;
};


////////////// CATEGORIES //////////////

export const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch(`${BASE_URL}/products/categories`);
  const categories = await response.json();
  return categories;
};

