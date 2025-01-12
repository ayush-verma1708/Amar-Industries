import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import ProductCard from '../components/products/ProductCard';
import SectionTitle from '../components/shared/SectionTitle';

const products = [
  {
    name: 'PET Preforms',
    description: 'High-quality PET preforms for various bottle sizes and applications.',
    image: 'https://images.unsplash.com/photo-1605618826115-fb9e775cf15d?auto=format&fit=crop&q=80',
    features: [
      'Multiple neck sizes available',
      'Crystal clear transparency',
      'Excellent barrier properties',
      'Suitable for hot-fill applications',
    ],
  },
  {
    name: 'PET Bottles',
    description: 'Custom PET bottles designed for various industries and uses.',
    image: 'https://images.unsplash.com/photo-1622016195010-b8db0f06c477?auto=format&fit=crop&q=80',
    features: [
      'Customizable designs',
      'Multiple size options',
      'Food-grade material',
      'Impact resistant',
    ],
  },
  // Add more products...
];

const ProductsPage = () => {
  return (
    <div>
      <PageHeader
        title="Our Products"
        subtitle="Discover our range of high-quality plastic packaging solutions"
        backgroundImage="https://images.unsplash.com/photo-1622016195010-b8db0f06c477?auto=format&fit=crop&q=80"
      />
      
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Product Range"
            subtitle="Explore our comprehensive range of plastic packaging solutions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;