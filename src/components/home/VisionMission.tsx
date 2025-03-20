import { Target, Compass, Shield } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-16 bg-white text-gray-800 border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Our Vision, Mission & Values
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Vision Section */}
          <div className="text-center">
            <div className="flex justify-center mb-6 text-blue-600">
              <Target className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600">
              To be a leading company in our domain by embracing innovation and
              continual improvement, setting new standards in plastic
              manufacturing excellence.
            </p>
          </div>

          {/* Mission Section */}
          <div className="text-center">
            <div className="flex justify-center mb-6 text-blue-600">
              <Compass className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              To provide superior, economical, and innovative plastic products
              while maintaining the highest standards of quality and customer
              satisfaction through ethical business practices.
            </p>
          </div>

          {/* Values Section */}
          <div className="text-center">
            <div className="flex justify-center mb-6 text-blue-600">
              <Shield className="h-16 w-16" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <p className="text-lg text-gray-600">
              Integrity, excellence, and respect form the core of our values,
              guiding our actions and ensuring we deliver the best to our
              customers and communities.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;
