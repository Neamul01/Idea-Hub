import { redirect } from 'next/navigation';

const Home = () => {
  redirect('/about-me');
};

export default Home;
