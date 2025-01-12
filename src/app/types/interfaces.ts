export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IHeaderTitle {
  category: string;
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface IInitialProductsState {
  products: IProduct[];
  loadingProducts: boolean;
  selectedProduct: IProduct | null;
  categories: string[];
  loadingCategories: boolean;
  selectedCategories: string[];
  cart: {
    items: { [id: number]: ICartItem };
  };
  error: string;
}
