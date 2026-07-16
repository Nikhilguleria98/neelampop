import React, { useState } from "react";
import { Star } from "lucide-react";

const AccordionItem = ({
  title,
  children,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b-2 border-black">
      <button
        className="flex w-full items-center justify-between p-4 text-base font-medium cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        {title}

        <span
          className={`transition-transform duration-300 text-3xl ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-4 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
};

const ProductDetails = ({
  product,
  selectedSize,
  onSizeChange,
}) => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    setOpenIndex(
      openIndex === index ? null : index
    );
  };

  return (
    <section className="flex flex-col gap-6 h-full">
      {/* Header */}
      <header className="space-y-2 lg:flex lg:items-center gap-3">
        <h1 className="text-pretty text-2xl font-semibold">
          {product.name}

          {selectedSize && (
            <span className="text-[#2592AD]">
              {" "}
              ({selectedSize})
            </span>
          )}
        </h1>

        {product.rating && (
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className={
                    index <
                    Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>

            <span>
              ({product.reviews || 0} reviews)
            </span>
          </div>
        )}
      </header>

      {/* Description */}
      {product.description && (
        <p className="max-w-3xl leading-relaxed text-foreground">
          {product.description}
        </p>
      )}

      <div className="h-[2px] w-full bg-black"></div>

      {/* Specifications */}
      {product.specifications && (
        <AccordionItem
          title="Product Specifications"
          isOpen={openIndex === 0}
          onClick={() => toggleAccordion(0)}
        >
          <div className="mt-3 text-sm leading-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {Object.entries(
              product.specifications
            ).map(([key, value]) => (
              <div
                key={key}
                className="flex justify-between gap-3"
              >
                <span className="font-medium capitalize">
                  {key.replace(
                    /([A-Z])/g,
                    " $1"
                  )}
                </span>

                <span className="text-gray-600 text-right">
                  : {value}
                </span>
              </div>
            ))}
          </div>
        </AccordionItem>
      )}

      {/* Applications */}
      {product.applications?.length > 0 && (
        <AccordionItem
          title="Applications"
          isOpen={openIndex === 2}
          onClick={() => toggleAccordion(2)}
        >
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {product.applications.map(
              (item, idx) => (
                <li key={idx}>{item}</li>
              )
            )}
          </ul>
        </AccordionItem>
      )}

      {/* Application Areas */}
      {product.applicationAreas?.length >
        0 && (
        <AccordionItem
          title="Industry Applications"
          isOpen={openIndex === 3}
          onClick={() => toggleAccordion(3)}
        >
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {product.applicationAreas.map(
              (item, idx) => (
                <li key={idx}>{item}</li>
              )
            )}
          </ul>
        </AccordionItem>
      )}

      {/* Features */}
      {product.features?.length > 0 && (
        <AccordionItem
          title="Features"
          isOpen={openIndex === 4}
          onClick={() => toggleAccordion(4)}
        >
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {product.features.map(
              (feature, idx) => (
                <li key={idx}>{feature}</li>
              )
            )}
          </ul>
        </AccordionItem>
      )}

      {/* Highlights */}
      {product.highlights?.length > 0 && (
        <AccordionItem
          title="Highlights"
          isOpen={openIndex === 5}
          onClick={() => toggleAccordion(5)}
        >
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
            {product.highlights.map(
              (item, idx) => (
                <li key={idx}>{item}</li>
              )
            )}
          </ul>
        </AccordionItem>
      )}

      {/* Sizes */}
      {product.sizes?.length > 0 && (
        <AccordionItem
          title="Product Sizes"
          isOpen={openIndex === 1}
          onClick={() => toggleAccordion(1)}
        >
          <div className="mt-3 text-sm leading-6">
            <p className="text-gray-600 mb-4">
              Select a size:
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-3">
              {product.sizes.map(
                (size, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      onSizeChange(size)
                    }
                    className={`px-3 py-2 border rounded-md transition-all duration-200 text-xs sm:text-sm ${
                      selectedSize === size
                        ? "bg-[#2592AD] text-white border-[#2592AD]"
                        : "hover:border-[#2592AD]"
                    }`}
                  >
                    {size}
                  </button>
                )
              )}
            </div>
          </div>
        </AccordionItem>
      )}

      {/* Inquiry */}
      <div className="mt-auto pt-6 border-t border-gray-200">
        <button className="inline-flex items-center justify-center bg-[#2592AD] px-8 py-3 text-sm font-medium text-white hover:bg-[#1d7a95] transition-colors duration-300 w-full sm:w-auto">
          SEND INQUIRY
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;