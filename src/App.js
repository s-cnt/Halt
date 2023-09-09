import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #gallery,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Header/>
      <Products />
      <Services />
      <Gallery/>
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
