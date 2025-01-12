import PageHeader from '../components/shared/PageHeader';
import CompanyHistory from '../components/about/CompanyHistory';
import TeamSection from '../components/about/TeamSection';
import VisionMission from '../components/home/VisionMission';

const AboutPage = () => {
  return (
    <div>
      <PageHeader
        title='About Amar Industries'
        subtitle='A legacy of excellence in plastic manufacturing since 1997'
        backgroundImage='https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
      />
      <CompanyHistory />
      <VisionMission />
      <TeamSection />
    </div>
  );
};

export default AboutPage;
