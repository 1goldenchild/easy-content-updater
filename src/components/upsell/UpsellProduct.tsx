import React from 'react';
import { UpsellHeader } from './UpsellHeader';
import { ProductImage } from './ProductImage';
import ProductFeatures from './ProductFeatures';
import PriceSection from './PriceSection';

interface UpsellProductProps {
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  isProcessing: boolean;
  onAccept: () => void;
  onDecline: () => void;
}

const UpsellProduct = ({
  name,
  description,
  price,
  features,
  image,
  isProcessing,
  onAccept,
  onDecline
}: UpsellProductProps) => {
  console.log('UpsellProduct rendering with:', { name, image, price });
  
  return (
    <div className="bg-[#1A1F2C] p-4 md:p-8 rounded-lg w-full">
      <UpsellHeader />

      <div className="bg-[#2A2F3C] p-4 md:p-6 rounded-lg mb-8 w-full">
        <div className="flex flex-col md:flex-row gap-6 items-start max-w-[1200px] mx-auto">
          <ProductImage src={image} alt={name} />
          
          <div className="w-full md:w-2/3 max-w-[800px] mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-white">{name}</h2>
            <p className="text-white font-bold mb-4 max-w-[700px]">{description}</p>
            <ProductFeatures features={features} />
            <PriceSection price={price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpsellProduct;