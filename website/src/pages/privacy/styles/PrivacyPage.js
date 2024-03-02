
import Head from 'next/head';
import WhatsAppButton from '../../WhatsAppButton';
import Privacy from '../components/PrivacyPolicy';


const PrivacyPage = () => {
  return (
    <div className="container">
      <div>
      <WhatsAppButton />
      </div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Privacy & Policy</title>
        <link rel="icon" href="./favicon.png" />

      </Head>
      <Privacy />
    </div>
  );
};

export default PrivacyPage;