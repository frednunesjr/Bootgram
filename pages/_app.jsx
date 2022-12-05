import '../public/styles/custom-bootstrap.scss';
import SSRProvider from 'react-bootstrap/SSRProvider';
import Layout from '../components/Layout';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	return (
		<SSRProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SSRProvider>
	)
}