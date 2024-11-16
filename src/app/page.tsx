import Experience from '@/components/screens/home/experience';
import Hero from '@/components/screens/home/hero';
import Skills from '@/components/screens/home/skills';

const Home = () => {
  return (
    <div className="flex flex-col gap-16 overflow-hidden rounded-lg font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Skills />
      <Experience />
    </div>
  );
};

export default Home;
