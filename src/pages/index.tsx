import type { NextPage } from 'next';
import MyToggle from '../components/Switch';

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-5xl">Hello Dan</h1>
      <MyToggle />
    </>
  );
};

export default Home;
