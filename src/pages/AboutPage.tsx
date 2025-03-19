import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutPage: React.FC = () => {
  const { ref: sectionRef1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: sectionRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: sectionRef3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: sectionRef4, inView: inView4 } = useInView({ triggerOnce: true });

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative bg-gray-800 h-64 md:h-80">
        <div className="absolute inset-0 bg-cover bg-center opacity-70" 
             style={{ backgroundImage: "url('/images/factory.jpg')" }}></div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto h-full flex items-center justify-center relative z-10 px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">About Us</h1>
            <p className="text-xl text-gray-200">A trusted manufacturer of quality plastic products</p>
          </div>
        </div>
      </div>
      
      {/* About Us Content */}
      <div className="about-us-container max-w-6xl mx-auto px-4 py-12">
        <motion.section 
          className="mb-16"
          ref={sectionRef1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our Company</h2>
          <p className="text-lg mb-6">
            Amar Industries has achieved wide acclamation as a trusted manufacturer of plastic items 
            like high quality PET preform, PET jars & bottles, HDPE jars & bottles, caps & closers in 
            various sizes, shapes and colours for numerous applications.
          </p>
          <p className="text-lg mb-6">
            With our rich experience, expertise & modern facilities, we are a major player in the 
            plastic industry. We serve our industrial clients for their needs of products packaging, 
            storage & others.
          </p>
          <p className="text-lg">
            Being a manufacturer, we keep up with the current market trends and incorporate the best 
            manufacturing practices to bring a commendable array of products.
          </p>
        </motion.section>

        <motion.section 
          className="mb-16"
          ref={sectionRef2}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <div className="bg-gray-200 h-80 mb-4 flex items-center justify-center rounded-lg overflow-hidden">
                <img 
                  src="public/1.jpg" 
                  alt="Manufacturing Facility" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder.jpg";
                  }}
                />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-6">Infrastructure & Quality</h2>
              <p className="text-lg mb-6">
                Excellent infrastructure and a professional working environment ensures that 
                Amar Industries delivers nothing but the best products to its customers.
              </p>
              <p className="text-lg">
                Our team of expert quality analysts conducts stringent tests on the entire range of 
                our products to verify their quality standards before they are supplied to our clients.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          ref={sectionRef3}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1 order-2 md:order-1">
              <h2 className="text-2xl font-semibold mb-6">Our Materials</h2>
              <p className="text-lg mb-6">
                We use food grade material - non-reactive, non-toxic and glossy. It is also chemically 
                resistant and environment friendly, easily recyclable and does not generate noxious gases and combustion.
              </p>
              <ul className="list-disc list-inside text-lg space-y-2">
                <li>High-quality PET preforms</li>
                <li>PET jars & bottles</li>
                <li>HDPE jars & bottles</li>
                <li>Caps & closures in various sizes</li>
                <li>Multiple shapes and colors available</li>
              </ul>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="bg-gray-200 h-80 mb-4 flex items-center justify-center rounded-lg overflow-hidden">
                <img 
                  src="public/2.jpg" 
                  alt="Product Samples" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section 
          ref={sectionRef4}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Quality Excellence</h3>
              <p className="text-center">
                We maintain stringent quality control measures to ensure our products meet the highest standards.
              </p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Environmental Responsibility</h3>
              <p className="text-center">
                Our materials are environmentally friendly and easily recyclable, reflecting our commitment to sustainability.
              </p>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Customer Satisfaction</h3>
              <p className="text-center">
                We focus on understanding and meeting our clients' specific needs with our diverse range of products.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
      

    </div>
  );
};

export default AboutPage;