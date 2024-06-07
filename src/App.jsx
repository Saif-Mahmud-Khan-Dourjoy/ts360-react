import { Route, Routes } from "react-router-dom";
import Login from "./layout/Login/Login";
import Register from "./layout/Login/Register";
import Forgot from "./layout/Login/Forgot";
import Reset from "./layout/Login/Reset";
import NewPassword from "./layout/Login/NewPassword";
import Home from "./home/Home";
import AboutUs from "./layout/Company/AboutUs";
import Career from "./layout/Company/Career";
import Contact from "./layout/Contact/Contact";
import AutomationArticle from "./layout/Resource/AutomationArticle";
import DemoVideo from "./layout/Resource/DemoVideo";
import Navbar from './routes/Navbar'
import ShowNav from "./routes/ShowNav";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function App() {

  return (
    <>
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
      </Routes>
      <ShowNav>
        <Navbar />
      </ShowNav>

    </>
  );
}

export default App;
