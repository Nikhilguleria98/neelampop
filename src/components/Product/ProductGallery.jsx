import { useState, useEffect } from "react";

export default function ProductGallery({ product, selectedSize }) {
  const [active, setActive] = useState(0);

  // Get images according to selected size
  const images =
    (selectedSize &&
      product?.sizeImages?.[selectedSize]?.length > 0 &&
      product.sizeImages[selectedSize]) ||
    product?.images ||
    [];

  const main = images[active];

  // Reset active image when size or images change
  useEffect(() => {
    setActive(0);
  }, [selectedSize, product]);

  return (
    <section className="flex w-full flex-col gap-3">
      {/* Selected size */}
      <div className="text-sm text-gray-600">
        Currently viewing:{" "}
        <span className="font-semibold text-[#2592AD]">
          {selectedSize || "Default"}
        </span>
      </div>

      {/* Main image container */}
     {/* Main image */}
<div className="relative h-64 w-full overflow-hidden rounded-xl border border-[#d9e6df] bg-[#f7faf4] sm:h-72 md:h-[400px] lg:h-[440px]">

  {main ? (
    <>
      {/* Background fills the entire container */}
      <img
        src={main.src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl opacity-30"
      />

      {/* Full product image without cropping */}
      <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
        <img
          src={main.src}
          alt={main.alt || product?.name || "Product image"}
          className="h-full w-full object-contain object-center"
        />
      </div>
    </>
  ) : (
    <div className="flex h-full items-center justify-center text-gray-400">
      No image available
    </div>
  )}
</div>

      {/* Thumbnail images */}
      {images.length > 0 && (
        <div className="flex gap-3 overflow-x-auto px-1 py-2">
          {images.map((img, idx) => (
            <button
              key={img.src || idx}
              type="button"
              onClick={() => setActive(idx)}
              aria-label={`View image ${idx + 1}`}
              aria-pressed={active === idx}
              className={`flex h-[76px] w-[88px] flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-[#f7faf4] p-2 transition-all duration-200 sm:h-20 sm:w-24 ${
                active === idx
                  ? "border-[#2592AD] ring-2 ring-[#2592AD]/30"
                  : "border-gray-200 hover:border-[#2592AD]"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt || `Product view ${idx + 1}`}
                className="h-full w-full object-contain object-center"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image counter */}
      {images.length > 0 && (
        <div className="text-center text-xs text-gray-500">
          Image {active + 1} of {images.length}
        </div>
      )}
    </section>
  );
}