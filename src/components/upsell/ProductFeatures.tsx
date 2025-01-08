import React from 'react';

interface ProductFeaturesProps {
  features: string[];
}

const ProductFeatures = ({ features }: ProductFeaturesProps) => {
  return (
    <ul className="space-y-3 max-w-[700px]">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start text-gray-300">
          <span className="text-purple-400 mr-2 flex-shrink-0">✓</span>
          {feature}
        </li>
      ))}
    </ul>
  );
};

export default ProductFeatures;