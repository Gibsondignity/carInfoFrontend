
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ScrollToTop from "react-scroll-to-top";
import BottomNav from "../components/BottomNav";



import Home from "../components/Home";

const  homePage = () => {
  return (
    <div>
      <ScrollToTop smoth color="#14213d" style={{ borderRadius: 0 }} />
      <Navbar />
        <Home />
      <BottomNav name="home" />
    </div>
  );
}

export default homePage;
