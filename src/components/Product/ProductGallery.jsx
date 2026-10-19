import { useState, useEffect } from "react"

export default function ProductGallery({ product, selectedSize }) {
  const [active, setActive] = useState(0);
  
  // Get images based on selected size
  const getSizeImages = () => {
    if (selectedSize && product.sizeImages && product.sizeImages[selectedSize]) {
      return product.sizeImages[selectedSize];
    }
    // Fallback to default images if no size-specific images exist
    return product.images || [];
  };

  const images = getSizeImages();
  const main = images[active];

  // Reset active image when size changes
  useEffect(() => {
    setActive(0);
  }, [selectedSize]);

  return (
    <section className="flex flex-col gap-3">
      {/* Size indicator */}
      <div className="text-sm text-gray-600">
        Currently viewing: <span className="font-semibold text-[#2592AD]">{selectedSize}</span>
      </div>

      {/* Main image */}
      <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-md border border-[#d9e6df] bg-[#f7faf4] sm:h-72 md:h-[320px] lg:h-[340px]">
        {main ? (
          <img
            src={main.src}
            alt={main.alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400">No image available</div>
        )}
      </div>

      {/* Thumbnail images */}
      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 py-1">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`flex-shrink-0 rounded-md border transition-all ${
              active === idx 
                ? "ring-2 ring-[#2592AD] border-[#2592AD]" 
                : "border-gray-300 hover:border-[#2592AD]"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-14 w-[4.5rem] rounded-md object-cover sm:h-16 sm:w-20"
            />
          </button>
        ))}
      </div>

      {/* Image counter */}
      <div className="text-xs text-gray-500 text-center">
        Image {active + 1} of {images.length}
      </div>
    </section>
  );
}
