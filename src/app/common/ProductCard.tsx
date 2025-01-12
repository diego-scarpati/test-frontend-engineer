import Image from "next/image";
import { IProduct } from "../types/interfaces";
import { formatCurrency } from "../utils/parsingNumbers";
import AddToCart from "./AddToCart";
import Link from "next/link";

const ProductCard = (product: IProduct) => {
  return (
    <div className="flex flex-col w-50 h-70 overflow-hidden bg-primary rounded-lg p-4 text-text">
      <Link href={`/product/${product.id}`}>
        <h3 className="font-bold text-lg truncate overflow-hidden">
          {product.title}
        </h3>
        <p className="text-base capitalize">{product.category}</p>
        <div className="flex justify-center items-center mx-auto my-2 min-w-full h-48">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="rounded-lg"
            placeholder="blur"
            blurDataURL="../assets/blur-data-url.png"
          />
        </div>
      </Link>
      <div className="flex justify-between items-center px-1">
        <AddToCart product={product}/>
        <p className="font-semibold">{formatCurrency(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
