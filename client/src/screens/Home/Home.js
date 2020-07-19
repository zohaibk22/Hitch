import React from 'react';
import Header from '../../components/shared/Header/header'
import Footer from '../../components/shared/Footer/footer'
import Splash from '../../components/Home/Splash/Splash'

function Home(props) {
  return (
    <>
      <Header />
      <Splash />
      <Footer />
    </>

  );
}

export default Home;