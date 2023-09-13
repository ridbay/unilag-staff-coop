import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTheTopButton from '@/components/BacktoTop'
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${lato.className}`}>
      <BackToTheTopButton />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
 