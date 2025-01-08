import React from 'react';

interface PriceSectionProps {
  price: number;
}

const PriceSection = ({ price }: PriceSectionProps) => {
  return (
    <div className="mt-6">
      <div className="text-3xl font-bold bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#6E59A5] bg-clip-text text-transparent mb-2">
        ${price.toFixed(2)}
      </div>
      <p className="text-gray-400 text-sm">
        One-click payment - Instant digital delivery
      </p>
    </div>
  );
};

export default PriceSection;