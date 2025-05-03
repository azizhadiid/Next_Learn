import stylesError from '@/styles/404.module.scss';
import Head from 'next/head';

const Custom404 = () => {
    return (
        <div className={stylesError.error}>
            <Head>
                <title>Not Found</title>
            </Head>
            <img src="/not_found.png" alt="404" className={stylesError.error__image} />
            <div>Halaman Tidak Ditemukan!!!</div>
        </div>
    );
};

export default Custom404;