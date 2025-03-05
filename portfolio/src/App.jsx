import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import Layout from "./components/layout/Layout";
import About from "./pages/about/About";
import Techstack from "./pages/techstack/Techstack";
import Project from "./pages/projects/Project";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";

import { ToastContainer } from "react-toastify";
import Mobilenav from "./components/Mobilenav/Mobilenav";
import Footer from "./pages/footer/Footer";
function App() {
  return (
    <>
      <Provider store={store}>
        <Mobilenav />
        <ToastContainer />
        <Layout />
        <About />
        <Education />
        <Techstack />
        <Project />
        <Contact />
        <Footer />
      </Provider>
      <ScrollToTop
        color="#00bec5"
        smooth
        style={{ backgroundColor: "#f6093c", borderRadius: "50%" }}
      />
    </>
  );
}

export default App;





