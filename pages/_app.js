import Router, { useRouter } from 'next/router';
import '../styles/globals.css'
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }) {


    const [loading, setLoading] = useState(false);

    Router.events.on('routeChangeStart', (url) => {
      setLoading(true);
     });

    Router.events.on('routeChangeComplete', (url) => {
      setLoading(false);
    });
   

   return(
     <>
       {loading ? (
          <div className="load"></div>
         ) : (
         
             <Component {...pageProps} />
         
         )}
   </>
 )
}
export default MyApp
