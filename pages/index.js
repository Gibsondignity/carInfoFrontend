import Clients from "../components/Clients";
import Concepts from "../components/Concepts";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Space";
import Step from "../components/Step";
import ScrollToTop from "react-scroll-to-top";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <ScrollToTop smoth color="#14213d" style={{ borderRadius: 0 }} />
      <Navbar />
      <Slider />
      <Hero />
      <Featured />
      {/* <Step /> */}
      <Projects />
      <Clients />
      <Concepts />
      <Footer />
    </>
  );
}
