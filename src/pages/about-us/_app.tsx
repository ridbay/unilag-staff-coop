import { AppProps } from "next/app";

const AboutLayout = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="bg-red-400">
      Mjay Lax
      <Component {...pageProps} />
    </div>
  );
};

// export default AboutLayout;
