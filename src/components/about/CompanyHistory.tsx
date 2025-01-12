import SectionTitle from '../shared/SectionTitle';

const milestones = [
  {
    year: 1997,
    title: 'Foundation',
    description: 'Established as a small plastic manufacturing unit in Mumbai.',
  },
  {
    year: 2005,
    title: 'Expansion',
    description:
      'Expanded operations with new machinery and increased production capacity.',
  },
  {
    year: 2010,
    title: 'Innovation',
    description:
      'Introduced new product lines and advanced manufacturing processes.',
  },
  {
    year: 2015,
    title: 'Modernization',
    description:
      'Upgraded to state-of-the-art machinery and automation systems.',
  },
  {
    year: 2020,
    title: 'Sustainability',
    description:
      'Implemented eco-friendly practices and sustainable manufacturing processes.',
  },
];

const CompanyHistory = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionTitle
          title='Our Journey'
          subtitle="Since 1997, we've been committed to excellence in plastic manufacturing"
        />

        <div className='relative'>
          <div className='absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200' />

          <div className='space-y-12'>
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className='relative w-full md:w-1/2 p-6'>
                  <div className='absolute top-6 w-4 h-4 rounded-full bg-blue-600 transform -translate-x-1/2 md:translate-x-0 left-0 md:right-0' />
                  <div className='ml-8 md:ml-0 bg-white p-6 rounded-lg shadow-lg'>
                    <span className='inline-block px-4 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800 mb-4'>
                      {milestone.year}
                    </span>
                    <h3 className='text-xl font-bold text-gray-900 mb-2'>
                      {milestone.title}
                    </h3>
                    <p className='text-gray-600'>{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
