import React, { useState } from "react";
import { Minus, Plus, Star } from "lucide-react";

const AccordionItem = ({
  title,
  children,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-[#c9dfe3]">
      <button
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-2 py-3 text-sm font-semibold transition-colors hover:bg-[#e5efdd] sm:text-base"
        onClick={onClick}
      >
        {title}

        {isOpen ? <Minus size={19} aria-hidden="true" /> : <Plus size={19} aria-hidden="true" />}
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-2 pb-3">
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
    <section className="flex h-full flex-col gap-4">
      {/* Header */}
      <header className="flex flex-col gap-2 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
        <h1 className="text-pretty text-xl font-semibold leading-tight sm:text-2xl">
          {product.name}

          {selectedSize && (
            <span className="text-[#2592AD]">
              {" "}
              ({selectedSize})
            </span>
          )}
        </h1>

        {product.rating && (
          <div className="flex shrink-0 items-center gap-1.5 text-xs sm:gap-2 sm:text-sm lg:pt-1">
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
        <p className="max-w-3xl text-sm leading-6 text-foreground sm:text-[15px]">
          {product.description}
        </p>
      )}

      <div className="h-px w-full bg-[#c9dfe3]"></div>

      {/* Specifications */}
      {product.specifications && (
        <AccordionItem
          title="Product Specifications"
          isOpen={openIndex === 0}
          onClick={() => toggleAccordion(0)}
        >
          <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 text-sm leading-5 sm:grid-cols-2">
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
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-5 text-gray-700">
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
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-5 text-gray-700">
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
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-5 text-gray-700">
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
          <ul className="list-disc space-y-1.5 pl-5 text-sm leading-5 text-gray-700">
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
          <div className="mt-2 text-sm leading-5">
            <p className="mb-2 text-gray-600">
              Select a size:
            </p>

            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5 lg:grid-cols-6">
              {product.sizes.map(
                (size, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      onSizeChange(size)
                    }
                    className={`rounded-md border px-3 py-1.5 text-xs transition-all duration-200 sm:text-sm ${
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
      <div className="mt-2 border-t border-[#c9dfe3] pt-4">
        <a href="/contact" className="inline-flex w-full items-center justify-center bg-[#2592AD] px-7 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#1d7a95] sm:w-auto">
          SEND INQUIRY
        </a>
      </div>
    </section>
  );
};

export default ProductDetails;
