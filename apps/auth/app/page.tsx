import Avatar from '@repo/design-system/avatar';
import DemoComponent from '@repo/design-system/components/DemoComponent';

const Home = () =>           {
  console.log('');

  return (
    <>
      <DemoComponent />
      <Avatar />
      <p className="text-3xl font-bold underline">AUTH APP</p>;
    </>
  );
};

export default Home;
