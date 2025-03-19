import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = ['/14.jpg', '/15.jpg', '/16.jpg', '/17.jpg'];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Image Transition */}
      {images.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            zIndex: index === currentImageIndex ? 10 : 0,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
    </div>
  );
};

export default Hero;
