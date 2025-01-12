import SectionTitle from '../shared/SectionTitle';
import { useEffect } from 'react';

const milestones = [
  {
    year: 1997,
    title: 'Foundation',
    description: 'Established as a small plastic manufacturing unit in Mumbai.',
  },
  {
    year: 2000,
    title: 'First Major Contract',
    description:
      'Secured our first major contract with a leading beverage company.',
  },
  {
    year: 2005,
    title: 'Expansion',
    description:
      'Expanded operations with new machinery and increased production capacity.',
  },
  {
    year: 2008,
    title: 'ISO Certification',
    description:
      'Achieved ISO 9001 certification for quality management systems.',
  },
  {
    year: 2010,
    title: 'Innovation',
    description:
      'Introduced new product lines and advanced manufacturing processes.',
  },
  {
    year: 2013,
    title: 'New Manufacturing Plant',
    description:
      'Opened a new state-of-the-art manufacturing plant to cater to increased demand.',
  },
  {
    year: 2015,
    title: 'Modernization',
    description:
      'Upgraded to state-of-the-art machinery and automation systems.',
  },
  {
    year: 2018,
    title: 'Global Presence',
    description:
      'Started exporting products to international markets, expanding our global footprint.',
  },
  {
    year: 2020,
    title: 'Sustainability',
    description:
      'Implemented eco-friendly practices and sustainable manufacturing processes.',
  },
  {
    year: 2022,
    title: 'Digital Transformation',
    description:
      'Adopted digital solutions to streamline operations and enhance customer service.',
  },
  {
    year: 2023,
    title: 'Employee Growth',
    description:
      'Launched new employee welfare programs and professional development initiatives.',
  },
];

const CompanyHistory = () => {
  useEffect(() => {
    const slider = document.getElementById('milestone-slider');
    if (slider) {
      slider.style.animation = 'slide 120s linear infinite';
    }
  }, []);

  return (
    <section className='py-16 bg-gradient-to-r from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionTitle
          title='Our Journey'
          subtitle="Since 1997, we've been committed to excellence in plastic manufacturing"
        />

        <div className='relative'>
          <div
            id='milestone-slider'
            className='overflow-hidden'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            {/* Duplicate the milestones to create a seamless loop */}
            {[
              ...milestones,
              ...milestones,
              ...milestones,
              ...milestones,
              ...milestones,
              ...milestones,
            ].map((milestone) => (
              <div
                key={milestone.year}
                className='flex-shrink-0 w-80 p-6 transform transition-transform hover:scale-105'
              >
                <div className='bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl'>
                  <span className='inline-block px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 mb-4'>
                    {milestone.year}
                  </span>
                  <h3 className='text-xl font-bold text-gray-900 mb-2'>
                    {milestone.title}
                  </h3>
                  <p className='text-gray-600'>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        #milestone-slider {
          display: flex;
          align-items: center;
          width: calc(
            100% * ${milestones.length * 2}
          ); /* Double the width to accommodate the duplicated milestones */
        }
      `}</style>
    </section>
  );
};

export default CompanyHistory;
