import { ArrowRight, Award, Users, Clock, MapPin } from 'lucide-react';
import { useEffect, useRef } from "react";

const AboutPreview = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true; // Force muted

      // Prevent user from unmuting
      videoRef.current.addEventListener("volumechange", () => {
        if (videoRef.current && !videoRef.current.muted) {
          videoRef.current.muted = true;
        }
      });
    }
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated underline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
            About Amar Industries
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Video Section with floating card */}
        <div className="relative mb-36">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              src="https://res.cloudinary.com/dzfpuadsb/video/upload/v1744538625/1_uwuoxw.mp4"
              className="w-full rounded-xl"
              controls
              autoPlay
              muted
              loop
            >
              Your browser does not support the video tag.
            </video>
          </div>
          
          {/* Floating mission statement card */}
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-auto md:mx-0 md:absolute md:right-12 md:bottom-0 md:transform md:translate-y-1/2 mt-8 md:mt-0">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide innovative plastic packaging solutions that meet the highest standards 
              of quality, sustainability, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Main content with better spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          {/* Text Section with improved typography */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              A Legacy of Excellence Since 1997
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Established in 1997, Amar Industries has grown to become a trusted leader in
              the plastic manufacturing industry. With over two decades of
              experience, we've built a reputation for quality, innovation, and
              reliability in plastic packaging solutions.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our state-of-the-art manufacturing facilities and dedicated team of experts
              ensure that we deliver products that exceed industry standards and meet the 
              unique needs of our diverse clientele.
            </p>

            {/* Learn More Link with improved styling */}
            <a
              href="/about"
              className="inline-flex items-center px-6 py-3 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn more about our journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Stats Section with improved visualization */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 border-b pb-4">Our Impact</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Years of Excellence */}
              <div className="flex items-start bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-500 text-white shadow-md">
                    <Clock className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-blue-600">25</h3>
                  <h4 className="text-lg font-medium text-gray-800">
                    Years of Excellence
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Serving industries with dedication and expertise.
                  </p>
                </div>
              </div>

              {/* Happy Clients */}
              <div className="flex items-start bg-green-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-md">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-green-600">1K+</h3>
                  <h4 className="text-lg font-medium text-gray-800">
                    Happy Clients
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Across multiple industries worldwide.
                  </p>
                </div>
              </div>

              {/* Products Manufactured */}
              <div className="flex items-start bg-purple-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-purple-500 text-white shadow-md">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-purple-600">50M+</h3>
                  <h4 className="text-lg font-medium text-gray-800">
                    Products Manufactured
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Quality products delivered annually.
                  </p>
                </div>
              </div>

              {/* Locations */}
              <div className="flex items-start bg-amber-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-amber-500 text-white shadow-md">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-amber-600">3</h3>
                  <h4 className="text-lg font-medium text-gray-800">
                    Manufacturing Units
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Strategic locations for efficient delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

// import { ArrowRight, Award, Users, Clock, MapPin } from 'lucide-react';
// import { useEffect, useRef } from "react";

// const AboutPreview = () => {

//   const videoRef = useRef<HTMLVideoElement | null>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = true; // Force muted

//       // Prevent user from unmuting
//       videoRef.current.addEventListener("volumechange", () => {
//         if (videoRef.current && !videoRef.current.muted) {
//           videoRef.current.muted = true;
//         }
//       });
//     }
//   }, []);


//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header with animated underline */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
//             About Amar Industries
//             <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
//           </h2>
//           <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
//         </div>

//         {/* Video Section with floating card */}
//         <div className="relative mb-20">
//       <div className="rounded-xl overflow-hidden shadow-2xl">
//         <video
//           ref={videoRef}
//           src="/1.mp4"
//           className="w-full rounded-xl"
//           controls
//           autoPlay
//           muted
//           loop
//         >
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
          
//           <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-auto md:absolute md:right-12 md:bottom-0 md:transform md:translate-y-1/2">
//             <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
//             <p className="text-gray-600">
//               To provide innovative plastic packaging solutions that meet the highest standards 
//               of quality, sustainability, and customer satisfaction.
//             </p>
//           </div>
//         </div>
        


//         {/* Main content with better spacing */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
//           {/* Text Section with improved typography */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">
//               A Legacy of Excellence Since 1997
//             </h2>
//             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//               Established in 1997, Amar Industries has grown to become a trusted leader in
//               the plastic manufacturing industry. With over two decades of
//               experience, we've built a reputation for quality, innovation, and
//               reliability in plastic packaging solutions.
//             </p>
//             <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//               Our state-of-the-art manufacturing facilities and dedicated team of experts
//               ensure that we deliver products that exceed industry standards and meet the 
//               unique needs of our diverse clientele.
//             </p>

//             {/* Learn More Link with improved styling */}
//             <a
//               href="/about"
//               className="inline-flex items-center px-6 py-3 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//             >
//               Learn more about our journey
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </a>
//           </div>

//           {/* Stats Section with improved visualization */}
//           <div className="bg-white rounded-xl shadow-lg p-8">
//             <h3 className="text-2xl font-semibold text-gray-800 mb-8 border-b pb-4">Our Impact</h3>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Years of Excellence */}
//               <div className="flex items-start bg-blue-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-500 text-white shadow-md">
//                     <Clock className="h-6 w-6" />
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-2xl font-bold text-blue-600">25</h3>
//                   <h4 className="text-lg font-medium text-gray-800">
//                     Years of Excellence
//                   </h4>
//                   <p className="mt-2 text-gray-600">
//                     Serving industries with dedication and expertise.
//                   </p>
//                 </div>
//               </div>

//               {/* Happy Clients */}
//               <div className="flex items-start bg-green-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-500 text-white shadow-md">
//                     <Users className="h-6 w-6" />
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-2xl font-bold text-green-600">1K+</h3>
//                   <h4 className="text-lg font-medium text-gray-800">
//                     Happy Clients
//                   </h4>
//                   <p className="mt-2 text-gray-600">
//                     Across multiple industries worldwide.
//                   </p>
//                 </div>
//               </div>

//               {/* Products Manufactured */}
//               <div className="flex items-start bg-purple-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-14 w-14 rounded-full bg-purple-500 text-white shadow-md">
//                     <Award className="h-6 w-6" />
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-2xl font-bold text-purple-600">50M+</h3>
//                   <h4 className="text-lg font-medium text-gray-800">
//                     Products Manufactured
//                   </h4>
//                   <p className="mt-2 text-gray-600">
//                     Quality products delivered annually.
//                   </p>
//                 </div>
//               </div>

//               {/* Locations */}
//               <div className="flex items-start bg-amber-50 p-6 rounded-lg transition-all duration-300 hover:shadow-md">
//                 <div className="flex-shrink-0">
//                   <div className="flex items-center justify-center h-14 w-14 rounded-full bg-amber-500 text-white shadow-md">
//                     <MapPin className="h-6 w-6" />
//                   </div>
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-2xl font-bold text-amber-600">3</h3>
//                   <h4 className="text-lg font-medium text-gray-800">
//                     Manufacturing Units
//                   </h4>
//                   <p className="mt-2 text-gray-600">
//                     Strategic locations for efficient delivery.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//     </section>
//   );
// };

// export default AboutPreview;
