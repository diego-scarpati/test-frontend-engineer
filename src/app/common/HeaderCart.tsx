"use client"

import Image from "next/image";
import cartImg from "../assets/cart.png";
import { useAppSelector } from "@/lib/hooks";

const HeaderCart = () => {
  const cart = useAppSelector((state) => state.products.cart);
  // Should sum up the quantity of all products in the cart
  const cartQuantity = Object.values(cart.items).reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  
  return (
    <div className="flex items-center">
      <Image src={cartImg} width={32} height={32} alt="cart" className="mr-4" />
      {cartQuantity > 0 && <span className="bg-p3green text-text font-semibold rounded-full h-5 px-2 flex items-center justify-center absolute right-5 top-3">
        {cartQuantity}
      </span>}
    </div>
  );
};

export default HeaderCart;
