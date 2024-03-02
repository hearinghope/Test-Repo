// pages/_app.js
import NextTopLoader from 'nextjs-toploader';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextTopLoader
        color="#ff6600"
        initialPosition={0.08}
        crawlSpeed={200}
        height={5}
        crawl={false}
        showSpinner={false}
        easing="ease"
        speed={200}
        template='<div class="bar" role="bar"><div class="peg"></div></div> 
        <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        zIndex={1600}
        showAtBottom={false}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
