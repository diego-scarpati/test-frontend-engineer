"use client";

import Image from "next/image";
import { useState } from "react";
import minus from "../assets/minus.png";
import plus from "../assets/plus.png";
import { IProduct } from "../types/interfaces";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AppDispatch } from "@/lib/store";
import {
  increaseProductQuantity,
  decrementProductQuantity,
} from "@/lib/features/products";

type AddToCartProps = {
  product: IProduct;
};

const AddToCart = ({ product }: AddToCartProps) => {
  const dispatch: AppDispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.products);
  // should check if the product is already in the cart and if it is, set the quantity of the product to the quantity in the cart
  const quantityInCart = cart.items[product.id]?.quantity || 0;
  const [quantity, setQuantity] = useState<number>(quantityInCart);

  const handleAddToCart = () => {
    setQuantity(1);
    dispatch(increaseProductQuantity({ product }));
  };

  const increment = () => {
    setQuantity((prev) => prev + 1);
    dispatch(increaseProductQuantity({ product }));
  };
  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 0));
    dispatch(decrementProductQuantity({ id: product.id }));
  };

  return (
    <div className="flex items-center h-12">
      {quantity === 0 ? (
        <button
          className="bg-p3green text-text px-4 py-2 rounded-lg hover:bg-p3greenLight"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center space-x-4">
          <button
            className="flex justify-center items-center m-auto bg-p3green w-8 h-8 rounded-full hover:bg-p3greenLight"
            onClick={decrement}
          >
            <Image src={minus} alt="minus" width={16} height={16} />
          </button>
          <span className="h-7 text-lg font-semibold">{quantity}</span>
          <button
            className="flex justify-center items-center m-auto bg-p3green w-8 h-8 rounded-full hover:bg-p3greenLight"
            onClick={increment}
          >
            <Image src={plus} alt="plus" width={14} height={14} />
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
