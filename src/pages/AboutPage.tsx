import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutPage: React.FC = () => {
  const { ref: sectionRef1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: sectionRef2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: sectionRef3, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: sectionRef4, inView: inView4 } = useInView({ triggerOnce: true });

  return (
    <div className="bg-white text-gray-900">
      {/* Page Header */}
      <div className="relative h-64 md:h-80 bg-blue-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/8.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-blue-950 opacity-60"></div>
        <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">About Us</h1>
            <p className="text-lg text-blue-200">A trusted manufacturer of quality plastic products</p>
          </div>
        </div>
      </div>

      {/* About Us Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.section
          className="mb-16"
          ref={sectionRef1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Our Company</h2>
          <p className="text-lg text-gray-700 mb-6">
            Amar Industries is a trusted manufacturer of high-quality plastic products, including PET preforms, 
            PET jars, bottles, HDPE containers, and caps & closures in various sizes, shapes, and colors.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            With advanced facilities and expertise, we provide innovative packaging solutions tailored for 
            multiple industries, ensuring durability and environmental responsibility.
          </p>
        </motion.section>

        {/* Infrastructure & Quality */}
        <motion.section
          className="mb-16"
          ref={sectionRef2}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <div className="bg-blue-100 h-80 flex items-center justify-center rounded-lg overflow-hidden">
                <img src="/1.jpg" alt="Manufacturing Facility" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">Infrastructure & Quality</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our state-of-the-art infrastructure, combined with a dedicated workforce, ensures 
                that Amar Industries delivers products that meet global quality standards.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Materials */}
        <motion.section
          className="mb-16"
          ref={sectionRef3}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-blue-900 mb-6">Our Materials</h2>
              <p className="text-lg text-gray-700 mb-6">
                We use food-grade, non-toxic, and environmentally friendly materials that are highly durable, recyclable, 
                and resistant to chemicals.
              </p>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                <li>High-quality PET preforms</li>
                <li>PET jars & bottles</li>
                <li>HDPE jars & bottles</li>
                <li>Customizable caps & closures</li>
                <li>Multiple shapes, sizes, and colors</li>
              </ul>
            </div>
            <div className="flex-1">
              <div className="bg-blue-100 h-80 flex items-center justify-center rounded-lg overflow-hidden">
                <img src="https://res.cloudinary.com/dzfpuadsb/image/upload/v1744538615/2_xntige.jpg" alt="Product Samples" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Commitment */}
        <motion.section
          ref={sectionRef4}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Excellence",
                desc: "Stringent quality control ensures every product meets the highest industry standards.",
                color: "bg-blue-600",
              },
              {
                title: "Environmental Responsibility",
                desc: "Our materials are recyclable and eco-friendly, minimizing environmental impact.",
                color: "bg-green-600",
              },
              {
                title: "Customer Satisfaction",
                desc: "We prioritize our clients' needs with customized solutions and reliable service.",
                color: "bg-purple-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">{item.title}</h3>
                <p className="text-center text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
