import { useState } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [variable, setVariable] = useState(0);

  return (
    <Layout>
      <Component {...pageProps} variable={variable} setVariable={setVariable} />
    </Layout>
  );
}

export default MyApp;
