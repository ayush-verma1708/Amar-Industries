import Hero from '../components/home/Hero';
import ProductHighlights from '../components/home/ProductHighlights';
import AboutPreview from '../components/home/AboutPreview';
import VisionMission from '../components/home/VisionMission';
import Testimonials from '../components/home/Testimonials'; // Import the new component

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProductHighlights />
      <AboutPreview />
      <VisionMission />
      <Testimonials />
    </>
  );
};

export default HomePage;
