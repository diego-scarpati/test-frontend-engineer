import Image from "next/image";
import { ICartItem } from "../types/interfaces";
import { formatCurrency } from "../utils/parsingNumbers";
import AddToCart from "./AddToCart";
import cross from "../assets/cross.png";
import { AppDispatch } from "@/lib/store";
import { useAppDispatch } from "@/lib/hooks";
import { removeProductFromCart } from "@/lib/features/products";

type CartItemProps = {
  cartItem: ICartItem;
};

const CartItem = ({ cartItem }: CartItemProps) => {
  const dispatch: AppDispatch = useAppDispatch();


  return (
    <div className="flex justify-between items-center px-1 my-3">
      <div className="flex ml-4 gap-4">
        <Image
          src={cross}
          alt={cartItem.product.title}
          width={20}
          height={20}
          onClick={()=> dispatch(removeProductFromCart({ id: cartItem.product.id }))}
          className="hover:cursor-pointer"
        />
        <p className="font-bold">{cartItem.product.title}</p>
      </div>

      <div className="flex justify-between items-center w-[30%]">
        <div className="flex justify-center w-1/3">
          <AddToCart product={cartItem.product} />
        </div>
        <p className="flex justify-end font-semibold w-1/3 ">
          {formatCurrency(cartItem.product.price)}
        </p>
        <p className="flex justify-end font-semibold w-1/3 ">
          {formatCurrency(cartItem.quantity * cartItem.product.price)}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
