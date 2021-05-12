import React from "react";
import GlobalStyles from "../globalStyles";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Dashboard from "../components/Dashboard";
import About from "../components/About";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navbar />
      <Slider />
      <Dashboard />
      <About />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
