import { IProduct } from "../types/interfaces";
import ProductCard from "./ProductCard";
import { useAppSelector } from "@/lib/hooks";

type ProductGalleryProps = {
  products: IProduct[];
};

const ProductGallery = ({ products }: ProductGalleryProps) => {
  const { selectedCategories } = useAppSelector((state) => state.products);

  const filteredProducts = products.filter((product) => {
    if (selectedCategories.length === 0) return true;
    return selectedCategories.includes(product.category);
  });

  return (
    <section className="grid grid-cols-gallery justify-center gap-4 w-auto lg:w-2/3">
      {products.length > 0 ? (
        filteredProducts.map((product: IProduct) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <>
          <div className="bg-skeleton animate-skeletonAnimation bg-[length:300%_200%] w-50 h-70 rounded-lg"></div>
          <div className="bg-skeleton animate-skeletonAnimation bg-[length:300%_200%] w-50 h-70 rounded-lg"></div>
          <div className="bg-skeleton animate-skeletonAnimation bg-[length:300%_200%] w-50 h-70 rounded-lg"></div>
          <div className="bg-skeleton animate-skeletonAnimation bg-[length:300%_200%] w-50 h-70 rounded-lg"></div>
          <div className="bg-skeleton animate-skeletonAnimation bg-[length:300%_200%] w-50 h-70 rounded-lg"></div>
          <div className="bg-skeleton animate-skeletonAnimation bg-[length:300%_200%] w-50 h-70 rounded-lg"></div>
        </>
      )}
    </section>
  );
};

export default ProductGallery;
