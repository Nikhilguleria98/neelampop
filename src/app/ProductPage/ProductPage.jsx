// ProductPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import products from "./products";
import ProductGallery from "../../components/Product/ProductGallery";
import ProductDetails from "../../components/Product/ProductDetails";

export default function ProductPage() {
  const { id, variant } = useParams();

  const baseProduct = products.find((item) => item.id === Number(id));
  const selectedVariant = baseProduct?.variants?.find((item) => item.slug === variant);
  const variantNotFound = Boolean(variant && baseProduct?.variants && !selectedVariant);
  const product = selectedVariant ? { ...baseProduct, ...selectedVariant } : baseProduct;
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "5 ml");

  useEffect(() => {
    setSelectedSize(product?.sizes?.[0] || "5 ml");
  }, [id, variant]);

  if (!baseProduct) {
    return <h2 className="py-16 text-center text-red-500">Product not found</h2>;
  }

  if (variantNotFound) {
    return <h2 className="py-16 text-center text-red-500">Variant not found</h2>;
  }

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <main className={`${baseProduct.id === 3 ? "lotion-bottle-typography " : ""}mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-6 px-4 py-6 sm:px-6 md:grid-cols-[minmax(0,0.82fr)_1px_minmax(0,1.18fr)] md:gap-5 lg:gap-8 lg:px-8 lg:py-8`}>
      {/* Left: Gallery */}
      <div>
        <ProductGallery 
          product={product} 
          selectedSize={selectedSize}
        />
      </div>

      {/* Divider */}
      <div className="hidden h-full min-h-[24rem] bg-[#c9dfe3] md:block" />

      {/* Right: Details */}
      <div>
        <ProductDetails 
          product={product} 
          selectedSize={selectedSize}
          onSizeChange={handleSizeChange}
        />
      </div>
    </main>
  );
}
