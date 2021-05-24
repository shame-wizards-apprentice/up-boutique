import Head from 'next/head';
import Header from '../components/Header/index';

const Home = () => {
  return (
    <>
      <Head>
        <title>UP Boutique</title>
      </Head>
      <div className='page-wrapper'>
        <Header />
        <main>
          <h2>Hello from UP Boutique!</h2>
        </main>
      </div>
    </>
  );
};

export default Home;