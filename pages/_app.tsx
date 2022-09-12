import "../styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <>
         <Head>
            <title>Copiepages_00</title>
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
         </Head>

         <Component {...pageProps} />
      </>
   )
}

export default MyApp
