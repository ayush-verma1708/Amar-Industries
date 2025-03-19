import PageHeader from '../components/shared/PageHeader';
import ProductCard from '../components/products/ProductCard';
import SectionTitle from '../components/shared/SectionTitle';

const products = [
  {
    name: 'PET Preforms',
    // image:
    //   'https://images.unsplash.com/photo-1605618826115-fb9e775cf15d?auto=format&fit=crop&q=80',
    image: '/9.jpg',

    description:
      'High-quality PET preforms for various bottle sizes and applications.',
    features: [
      'Multiple neck sizes available',
      'Crystal clear transparency',
      'Excellent barrier properties',
      'Suitable for hot-fill applications',
    ],
  },
  {
    name: 'PET Jars',
    image: '/10.jpg',
    description: 'Durable and clear PET jars for food and cosmetics',
    features: [
      'Various sizes and shapes',
      'Highly durable',
      'Perfect for storing food items and cosmetics',
      'Crystal-clear design for visibility',
    ],
  },
  {
    name: 'PET Bottles',
    image: '/11.jpg',
    description: 'Custom PET bottles for beverages and more',
    features: [
      'Available in multiple shapes and sizes',
      'Lightweight and durable',
      'Custom branding options available',
      'Perfect for beverages and liquid packaging',
    ],
  },
 
];

const ProductsPage = () => {
  return (
    <div>
      <PageHeader
        title='Our Products'
        subtitle='Discover our range of high-quality plastic packaging solutions'
        backgroundImage='https://images.unsplash.com/photo-1622016195010-b8db0f06c477?auto=format&fit=crop&q=80'
      />

      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionTitle
            title='Product Range'
            subtitle='Explore our comprehensive range of plastic packaging solutions'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
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
