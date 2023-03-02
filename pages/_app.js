import '../styles/global.css';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Script
				strategy='afterInteractive'
				src='https://www.googletagmanager.com/gtag/js?id=G-BLT0K54P03'
			/>
			<Script
				id='google-analytics'
				strategy='afterInteractive'
				dangerouslySetInnerHTML={{
					__html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-BLT0K54P03', {
                        page_path: window.location.pathname,
                    });`,
				}}
			/>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}
