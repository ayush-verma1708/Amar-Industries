import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const images = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg'];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading(true); // Show loading spinner before image change
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  useEffect(() => {
    setIsLoading(false); // Hide loading spinner after image change
  }, [currentImageIndex]); // Trigger when currentImageIndex changes

  return (
    <div className='relative h-screen'>
      {/* Loading spinner */}
      {isLoading && (
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-16 h-16 border-4 border-t-4 border-blue-600 rounded-full animate-spin' />
        </div>
      )}

      {/* Background image with smooth fade effect */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: isLoading ? 0 : 1, // Hide image during loading
        }}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50' />
      </div>

      <div className='relative h-full flex items-center'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
            Welcome to Amar Industries
          </h1>
          <p className='text-xl md:text-2xl text-gray-200 mb-8'>
            Your One-Stop Solution for Plastic Packaging Needs
          </p>
          <a
            href='/products'
            className='inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors'
          >
            Discover Our Products
            <ArrowRight className='ml-2 h-5 w-5' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
