import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getProductList } from '../../utils/products';

const Products = ({ productList }) => {
    return (
        <>
            <Head>
                <title>Products // UP Boutique</title>
            </Head>
            <div className='page-wrapper'>
                <Header bgImage={'/images/featured-3.png'} />
                <main>
                    <pre>{JSON.stringify(productList, null, 2)}</pre>
                </main>
                <Footer />
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const productList = await getProductList();
    return {
        props: {
            productList,
        },
    };
};

export default Products;