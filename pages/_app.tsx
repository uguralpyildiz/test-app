
import { AppProps } from 'next/app';
import '../public/styles.css';

function testLesson({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default testLesson;