"use client";

import RoundedCheckbox from "@/app/common/Checkbox";
import ProductGallery from "@/app/common/ProductGallery";
import {
  getAllProducts,
  getCategories,
  loadCartFromLocalStorage,
} from "@/lib/features/products";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AppDispatch } from "@/lib/store";
import { useEffect } from "react";

const page = () => {
  const { products, categories } = useAppSelector((state) => state.products);
  const dispatch: AppDispatch = useAppDispatch();
  useEffect(() => {
    const fetchInfo = async () => {
      const cartOnStorage = localStorage.getItem("cart");
      if (cartOnStorage) {
        dispatch(loadCartFromLocalStorage(JSON.parse(cartOnStorage)));
      }
      dispatch(getAllProducts());
      dispatch(getCategories());
    };
    fetchInfo();
  }, []);
  return (
    <main className="container bg-secondary mx-auto my-10 min-h-dvh flex flex-col lg:flex-row gap-4 p-8 rounded-lg">
      <section className="w-full lg:max-w-[80%] lg:w-1/3">
        <div className="bg-primary p-6 rounded-lg min-h-28 w-full">
          <h3 className="text-2xl font-bold text-text">Filter By</h3>
          <div className="flex flex-col space-y-4 capitalize mt-6 p-6">
            {categories.length > 0 ? (
              categories.map((category: string) => (
                <RoundedCheckbox category={category} key={category} />
              ))
            ) : (
              <>
                <div className="bg-skeleton animate-skeletonAnimation bg-[length:200%_100%] rounded-lg w-64 h-5"></div>
                <div className="bg-skeleton animate-skeletonAnimation bg-[length:200%_100%] rounded-lg w-64 h-5"></div>
                <div className="bg-skeleton animate-skeletonAnimation bg-[length:200%_100%] rounded-lg w-64 h-5"></div>
                <div className="bg-skeleton animate-skeletonAnimation bg-[length:200%_100%] rounded-lg w-64 h-5"></div>
              </>
            )}
          </div>
        </div>
      </section>
      <ProductGallery products={products} />
    </main>
  );
};

export default page;
