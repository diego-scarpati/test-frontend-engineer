"use client";

import CartItem from "@/app/common/CartItem";
import { formatCurrency } from "@/app/utils/parsingNumbers";
import { loadCartFromLocalStorage } from "@/lib/features/products";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AppDispatch } from "@/lib/store";
import Link from "next/link";
import { useEffect } from "react";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.products);
  const dispatch: AppDispatch = useAppDispatch();

  useEffect(() => {
    const cartOnStorage = localStorage.getItem("cart");
    if (cartOnStorage && Object.keys(cart.items).length === 0) {
      dispatch(loadCartFromLocalStorage(JSON.parse(cartOnStorage)));
    }
  }, []);

  const cartQuantity = Object.values(cart.items).reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const cartTotal = Object.values(cart.items).reduce((acc, item) => {
    return acc + item.quantity * item.product.price;
  }, 0);

  const cartArray = Object.values(cart.items).filter(
    (item) => item.quantity > 0
  );

  return (
    <main className="container mx-auto my-16 min-h-dvh rounded-lg text-text">
      {cartQuantity < 0 ? (
        <div className="text-text flex justify-center content-center w-full h-full">
          <Link href="/product">
            <p className="text-2xl font-bold text-text">
              Your cart is empty. Click here to go back to the store.
            </p>
          </Link>
        </div>
      ) : (
        <div>
          {cartArray.map((item) => {
            return <CartItem key={item.product.id} cartItem={item} />;
          })}
          <div className="mr-1">
            <p className="flex justify-end font-bold text-lg">
              Total: 
              <span className="ml-4">
                {formatCurrency(cartTotal)}
                </span>
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Cart;
