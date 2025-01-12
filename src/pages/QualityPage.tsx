import PageHeader from '../components/shared/PageHeader';
import QualityFeature from '../components/quality/QualityFeature';
import SectionTitle from '../components/shared/SectionTitle';
import {
  ClipboardCheck,
  TestTube, // Replacing Flask with TestTube
  Award,
  Microscope,
  ShieldCheck,
  Recycle,
} from 'lucide-react';

const qualityFeatures = [
  {
    icon: ClipboardCheck,
    title: 'Quality Control',
    description:
      'Rigorous testing at every stage of production ensures consistent quality.',
  },
  {
    icon: TestTube, // Updated icon
    title: 'Lab Testing',
    description:
      'State-of-the-art laboratory for material and product testing.',
  },
  {
    icon: Award,
    title: 'Certifications',
    description: 'ISO 9001:2015 certified manufacturing processes.',
  },
  {
    icon: Microscope,
    title: 'Research & Development',
    description:
      'Continuous innovation and improvement in products and processes.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety Standards',
    description: 'Adherence to international safety and quality standards.',
  },
  {
    icon: Recycle,
    title: 'Sustainability',
    description:
      'Commitment to environmental responsibility and sustainable practices.',
  },
];

const QualityPage = () => {
  return (
    <div>
      <PageHeader
        title='Quality Assurance'
        subtitle='Our commitment to excellence in every product'
        backgroundImage='https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
      />

      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <SectionTitle
            title='Our Quality Standards'
            subtitle='We maintain the highest standards of quality through rigorous testing and continuous improvement'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {qualityFeatures.map((feature) => (
              <QualityFeature key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPage;
