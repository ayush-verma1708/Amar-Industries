import React from 'react';
import SectionTitle from '../shared/SectionTitle';

const team = [
  {
    name: 'Rajesh Kumar',
    position: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    description: 'With over 25 years of industry experience, Rajesh leads our strategic vision.',
  },
  {
    name: 'Priya Sharma',
    position: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    description: 'Priya oversees our manufacturing processes and technical innovations.',
  },
  {
    name: 'Amit Patel',
    position: 'Quality Control Head',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    description: 'Amit ensures our products meet the highest quality standards.',
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Leadership Team"
          subtitle="Meet the experts driving our success and innovation"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;