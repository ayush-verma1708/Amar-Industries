import React from 'react';

interface ProductCardProps {
  name: string;
  description: string;
  features: string[];
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  features,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 h-6 w-6 text-blue-600">•</span>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;