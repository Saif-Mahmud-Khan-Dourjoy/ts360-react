import { Route, Routes } from "react-router-dom";
import Login from "./layout/Login/Login";
import Register from "./layout/Login/Register";
import Forgot from "./layout/Login/Forgot";
import Reset from "./layout/Login/Reset";
import NewPassword from "./layout/Login/NewPassword";
import Home from "./layout/Home/Home";
import AboutUs from "./layout/Company/AboutUs";
import Career from "./layout/Company/Career";
import Contact from "./layout/Contact/Contact";
import AutomationArticle from "./layout/Resource/AutomationArticle";
import DemoVideo from "./layout/Resource/DemoVideo";
import Navbar from './routes/Navbar'
import ShowNav from "./routes/ShowNav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./routes/Footer";
import ShowFooter from "./routes/ShowFooter";
import SingleJob from "./layout/Company/SingleJob";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 2000, // values from 0 to 3000, with step 50ms
  easing: 'ease',
});





function App() {

  return (
    <>
      <ShowNav>
        <Navbar />
      </ShowNav>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/" element={<Home />} />
        <Route path="/automation-article" element={<AutomationArticle />} />
        <Route path="/demo-video" element={<DemoVideo />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/job-details/:id" element={<SingleJob/>}/>
      </Routes>
      <ShowFooter>
        <Footer />
      </ShowFooter>

    </>
  );
}

export default App;
