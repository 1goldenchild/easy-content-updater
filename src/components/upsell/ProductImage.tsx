import React from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <div className="relative w-full md:w-1/3">
      <img 
        src={src} 
        alt={alt}
        className="w-full rounded-lg shadow-lg"
      />
      <div className="absolute -top-2 -right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
        Special Offer
      </div>
    </div>
  );
};

export default ProductImage;