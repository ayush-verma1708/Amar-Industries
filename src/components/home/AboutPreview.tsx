import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div>
            <img src='/13.png' alt='Factory' className='rounded-lg shadow-lg' />
          </div>

          <div>
            <h2 className='text-3xl font-bold text-gray-900 mb-6'>
              About Amar Industries
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              Established in 1997, Amar Industries has been a trusted name in
              the plastic manufacturing industry. With over two decades of
              experience, we've built a reputation for quality, innovation, and
              reliability in plastic packaging solutions.
            </p>
            <div className='space-y-4'>
              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white'>
                    <span className='text-2xl font-bold'>25</span>
                  </div>
                </div>
                <div className='ml-4'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    Years of Excellence
                  </h3>
                  <p className='mt-2 text-gray-600'>
                    Serving industries with dedication
                  </p>
                </div>
              </div>

              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white'>
                    <span className='text-2xl font-bold'>1K+</span>
                  </div>
                </div>
                <div className='ml-4'>
                  <h3 className='text-lg font-medium text-gray-900'>
                    Happy Clients
                  </h3>
                  <p className='mt-2 text-gray-600'>
                    Across multiple industries
                  </p>
                </div>
              </div>
            </div>

            <a
              href='/about'
              className='inline-flex items-center mt-8 text-blue-600 hover:text-blue-700 font-medium'
            >
              Learn more about our journey
              <ArrowRight className='ml-2 h-5 w-5' />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
