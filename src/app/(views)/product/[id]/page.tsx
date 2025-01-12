import AddToCart from "@/app/common/AddToCart";
import { fetchProductById } from "@/app/services";
import { IProduct } from "@/app/types/interfaces";
import { formatCurrency } from "@/app/utils/parsingNumbers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = async ({ params }: { params: Promise<{ id: number }> }) => {
  const id = (await params).id;
  const product: IProduct = await fetchProductById(id);

  return (
    <main className="container mx-auto my-16 min-h-dvh rounded-lg text-text">
      <div className="container bg-secondary h-auto rounded-lg">
        <div className="flex justify-start">
          <Link href="/product">
            <div className="flex items-center justify-center mt-8 ml-8 py-2 px-4 w-36 bg-p3green hover:bg-p3greenLight rounded-lg">
              Back to Store
            </div>
          </Link>
        </div>
        <div className="flex justify-between w-full flex-col lg:flex-row gap-4 p-8">
          <div className="relative h-auto max-h-[450px] h- w-full overflow-y-auto scrollbar-hide rounded-lg overflow-x-hidden">
            <div className="relative w-full">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                style={{
                  objectFit: "cover",
                  height: "100%",
                  width: "100%",
                  objectPosition: "top",
                }}
                placeholder="blur"
                blurDataURL="../assets/blur-data-url.png"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full md:max-w-[800px] bg-primary py-4 px-6 rounded-lg">
            <div className="flex flex-col ml-2 gap-4">
              <h3 className="font-bold text-lg">{product.title}</h3>
              <p>{product.description}</p>
              <p className="text-base capitalize font-semibold">
                Category:{" "}
                <span className="font-normal">{product.category}</span>
              </p>
              <p>
                Rate: {product.rating.rate} out of {product.rating.count} votes
              </p>
              <p className="font-semibold">{formatCurrency(product.price)}</p>
            </div>
            <AddToCart product={product}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
