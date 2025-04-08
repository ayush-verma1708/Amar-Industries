import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = ['/14.jpg', '/15.jpg', '/16.jpg', '/17.jpg'];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] sm:h-[90vh] md:h-screen overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={images[currentImageIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 sm:bg-opacity-30 md:bg-opacity-20" />

      {/* Responsive Text Content (Stays Static) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-lg"
        >
          Welcome to Amar Industries
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-sm sm:text-lg md:text-xl font-light mt-2 opacity-80"
        >
          Quality You Can Trust
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
