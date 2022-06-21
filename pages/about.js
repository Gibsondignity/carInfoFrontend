import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "react-scroll-to-top";
import About from "../components/About";
import Slider from "../components/Slider";
import Static from "../components/Static";


const about = () => {
  return (
    <>
      <ScrollToTop smoth color="#14213d" style={{ borderRadius: 0 }} />
      <Navbar />
      <Static/>
      {/* <Slider /> */}
      <About />
      <Footer />
    </>
  );
}

export default about;
