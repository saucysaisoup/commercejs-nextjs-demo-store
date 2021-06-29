import React from "react";
import Head from "next/head";
import Root from "../components/common/Root";
import Footer from "../components/common/Footer";
import SocialMedia from "../components/common/SocialMedia";
import ProductsBanner from "../components/homepage/ProductsBanner";

const Home = () => (
  <Root transparentHeader={true}>
    <Head>
      <title>Yatsys Store</title>
    </Head>

    <ProductsBanner />
    <SocialMedia />
    <Footer />
  </Root>
);

export default Home;
