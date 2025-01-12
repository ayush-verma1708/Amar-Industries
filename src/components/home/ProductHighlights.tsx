const products = [
  {
    name: 'PET Preforms',
    image: '/9.jpg',
    description: 'High-quality PET preforms for various bottle sizes',
  },
  {
    name: 'PET Jars',
    image: '/10.jpg',
    description: 'Durable and clear PET jars for food and cosmetics',
  },
  {
    name: 'PET Bottles',
    image: '/11.jpg',
    description: 'Custom PET bottles for beverages and more',
  },
  {
    name: 'HDPE Jars',
    image: '/12.jpg',
    description: 'Sturdy HDPE jars for various applications',
  },
  {
    name: 'Caps & Closures',
    image: '/8.jpg',
    description: 'Precision-engineered caps and closures',
  },
  {
    name: 'Plastic Containers',
    image: '/5.jpg',
    description: 'Precision-engineered caps and closures',
  },
];

const ProductHighlights = () => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
          Our Featured Products
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {products.map((product) => (
            <div
              key={product.name}
              className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow'
            >
              <div className='relative pb-56 overflow-hidden'>
                {' '}
                {/* Aspect ratio box */}
                <img
                  src={product.image}
                  alt={product.name}
                  className='absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {product.name}
                </h3>
                <p className='text-gray-600'>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
