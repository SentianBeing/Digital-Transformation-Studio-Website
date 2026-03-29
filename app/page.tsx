import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import SliderSection from '@/components/SliderSection';
import FeatureSection from '@/components/FeatureSection';
import Partners from '@/components/Partners';
import NewsSection from '@/components/NewsSection';
import CareersSection from '@/components/CareersSection';
import Recognition from '@/components/Recognition';
import Insights from '@/components/Insights';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <SliderSection />
      <Partners />
      <FeatureSection
        title="The DiveGrid Advantage"
        subtitle="Our Ecosystem"
        description="DiveGrid ventures don't operate in isolation — they reinforce each other. Salhurry drives growth for our portfolio businesses. DiveGrid Infrastructure builds the physical assets. Southern Sigma Ventures supplies the materials that make it all possible. Together, we create compounding value across every layer of the stack."
        imageSrc="https://picsum.photos/seed/divegrid-ecosystem/1920/1080"
        buttonText="Explore Our Ventures"
        overlay
      />
      <NewsSection />
      <CareersSection />
      <Recognition />
      <Insights />
    </main>
  );
}
