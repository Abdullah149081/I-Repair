import Container from '@/components/ui/Container';
import RepairBannerSection from './Home/RepairBannerSection';
import Services from './Services';

function Home() {
  return (
    <Container>
      <RepairBannerSection />
      <Services />
    </Container>
  );
}

export default Home;
