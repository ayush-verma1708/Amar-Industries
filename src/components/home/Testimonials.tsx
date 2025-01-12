const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      feedback:
        'Amar Industries provides exceptional quality and service. Their products are reliable and always delivered on time.',
      image: '/customer1.jpg',
    },
    {
      name: 'Jane Smith',
      feedback:
        'We have been using their packaging solutions for years. The team is professional and their products are top-notch!',
      image: '/customer2.jpg',
    },
    {
      name: 'Mark Wilson',
      feedback:
        'Great experience! The customer service was excellent, and the product quality exceeded our expectations.',
      image: '/customer3.jpg',
    },
  ];

  return (
    <section className='py-16 bg-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-3xl font-bold text-gray-900 mb-12'>
          What Our Clients Say
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='bg-white rounded-lg shadow-lg p-6'>
              <div className='flex justify-center mb-4'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='h-24 w-24 rounded-full object-cover'
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-900'>
                {testimonial.name}
              </h3>
              <p className='text-gray-600 mt-4'>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
