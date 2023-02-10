import '@/styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Copyright from '@/components/Copyright';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
			<Copyright />
		</>
	);
}
