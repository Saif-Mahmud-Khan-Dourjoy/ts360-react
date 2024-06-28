import '../../assets/css/home.css'
import laptop from '../../assets/Home/laptop.png'
import infinite from '../../assets/Home/infinite.png'
import desktop from '../../assets/Home/desktop.png'
import tabBG from '../../assets/Home/tabBG.png'
import topBG from '../../assets/Home/topBG.png'
import bottomBG from '../../assets/Home/bottomBG.png'
import TrendUp from '../../assets/Home/TrendUp.png'
import Scales from '../../assets/Home/Scales.svg'
import Laptop from '../../assets/Home/Laptop.svg'
import Gear from '../../assets/Home/Gear.svg'
import Gear2 from '../../assets/Home/Gear2.png'
import Handshake from '../../assets/Home/Handshake.svg'
import ellipse from '../../assets/Home/Ellipse.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import "../../assets/css/slickSlider.css"
import "../../assets/css/slickSlider.css"

import Slider from "react-slick";
const images = [TrendUp, Gear, Laptop, Scales, Handshake]
const tabs = [
  { id: 0, title: "Do more with less", content: "TestSprint360 would allow you to do more with less. All capabilities from Test Case creation to runtime environment for running both locally and in your own CI/CD server is provided in one package. Generate customized Pdf test execution report with your own logo." },
  { id: 1, title: "Customization according to your need", content: "TestSprint360 would customize to meet the enterprise requirement of your test organization. That includes integration with your test management systems, allowing your developers to write custom functions, localization testing to cover both LTR and RTL languages and dedicated customer support. Pricing based on customization type." },
  { id: 2, title: "Run locally or in our infrastructure", content: "As much as you can run locally, you can also choose to run in our hosted infrastructure. We would help you set up your daily batch run in our hosted Jenkins. TestSprint360 would partner with a leading cloud testing provider to allow you to run your tests on multiple browsers and devices." },
  { id: 3, title: "Overcome the agility gap in testing", content: "Both large and small companies struggle with agile testing. Big companies, despite resources, face challenges implementing sprint-based automation, leading to delays. Smaller companies lack the resources for extensive solutions. Existing low-code options are often expensive and limited, forcing them into pricier options that might not be perfect fits." },
  { id: 4, title: "Partner with us", content: "Do you have your own test lab and want to orchestrate in your own devices? Are you thinking of setting up your own lab? In either case, our team of engineers would help you get set up so that you can orchestrate tests in your lab devices with TestSprint360." },

];
const settings = {
  dots: false,         // Dont Show dots for navigation
  infinite: true,     // Infinite looping of slides
  speed: 5000,         // Transition speed
  slidesToShow: 1,    // Number of slides to show at a time
  slidesToScroll: 1,  // Number of slides to scroll at a time
  arrows: false,      // Disable the arrows
  autoplay: true,     // Enable autoplay
  autoplaySpeed: 5000 // Autoplay speed in milliseconds (5000ms = 5 seconds)
};

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const startIntervals = () => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
      setProgress(0);
    }, 5000);

    progressIntervalRef.current = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 2 : 0));
    }, 100);
  };

  const resetIntervals = () => {
    clearInterval(intervalRef.current);
    clearInterval(progressIntervalRef.current);
    setProgress(0);
    startIntervals();
  };

  useEffect(() => {
    startIntervals();
    return () => {
      clearInterval(intervalRef.current);
      clearInterval(progressIntervalRef.current);
    };
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
    resetIntervals();
  };
  return (
    <>
      <div className="overflow-hidden mt-[107px] main-div" style={{ background: 'linear-gradient(to bottom,#46647f,#1d3850 )' }}>
        <div className='curved-bg'>

          <div className='relative z-10 md:pl-24  lg:py-0 pl-7 md:pr-24 pr-7 h-full'>
            <div className='flex justify-center  lg:justify-between lg:items-center h-full lg:flex-row flex-col gap-y-4 top-[-5%] sm:top-[-10%] lg:top-0 relative'>
              <div className='lg:order-1 order-2 ' data-aos="fade-right">
                <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left'>
                  Continuous Testing at the speed of Agile
                </div>
                <div className='text-xl sm:text-2xl font-semibold my-4 text-center md:text-left'>
                  More Automation, Less Hassle

                </div>
                <div className="text-xl sm:text-2xl font-semibold gradient-text text-center md:text-left" >Expected Launch December 2024!</div>
                <div className='mt-4 sm:gap-x-3 flex sm:flex-row flex-col gap-y-3 justify-center items-center md:justify-start'>
                  <button type="button" className="text-white bg-[#3A9ED9] hover:bg-[#54b1e6eb] focus:outline-none  font-medium rounded-full text-sm md:text-xl px-7 md:px-10 lg:px-[27px] xl:px-10  py-[14px] lg:py-2.5 text-center me-2 mb-2 shadow-homeButtom" >Buy Now</button>
                  <button type="button" className="text-white bg-[#82D955] hover:bg-[#6fbc49] focus:outline-none  font-medium rounded-full text-sm md:text-xl px-7 md:px-10 lg:px-[27px] xl:px-10  py-[14px] lg:py-2.5 text-center me-2 mb-2 shadow-homeButtom" >Start Free Trial</button>
                </div>
              </div>
              <div className='lg:order-2 order-1 flex justify-center' data-aos="fade-left">

                <img className='max-h-96 lg:max-h-[1000px] w-fit home-laptop-img' src={laptop} alt="" />


              </div>


            </div>

          </div>

        </div>
        <div className='mt-10 md:pl-24 pl-7 md:pr-24 pr-7'>
          <div className='flex justify-center'>
            <div className=' text-white font-bold text-3xl  text-center  lg:w-[60%]  xl:w-[50%]' data-aos="zoom-in">
              <div className='inline-block relative top-[-2.5px] leading-[60px]'>Test</div> <div className="text-container">
                <span className='text-white ' >Automation</span>
                <span className='text-[#56AF82]'>Automation</span>
                <span className='text-[#8781F2]'>Automation</span>
                <span className='text-[#F2985A]'>Automation</span>
                <span className='text-[#FF5656]'>Automation</span>
              </div> <div className='inline-block relative top-[-2.5px] leading-[60px]'>that keeps pace </div>
              <div className='inline-block relative top-[-2.5px] leading-[60px]'> with your agile cadence </div>
            </div>
          </div>

          <div className='mt-14'>
            <div className='flex justify-between gap-x-20 gap-y-10 flex-wrap flex-col md:flex-row'>
              <div className='flex flex-col items-center justify-center bg-[#486681] rounded-md p-10 flex-1 hover:shadow-2xl home-about-div' data-aos="fade-up">
                <div>
                  <img className='max-h-48 mb-5' src={infinite} alt="" />
                </div>
                <div className='text-center text-gray-300  home-about-div-text lg:text-xl text-base'>
                  Our CICD pipelines seamlessly integrate Continuous Testing (CT) across the software development lifecycle. We believe Agile thrives on a foundation of automated testing.
                </div>
              </div>
              <div className='flex flex-col items-center justify-center bg-[#486681] rounded-md p-10 flex-1 hover:shadow-2xl home-about-div' data-aos="fade-down">
                <div>
                  <img className='max-h-48 mb-5' src={desktop} alt="" />
                </div>
                <div className='text-center text-gray-300 home-about-div-text lg:text-xl text-base'>
                  We offer end-to-end mobile, web, and API testing capabilities that seamlessly align with the Agile cadence of both large and small firms, propelling them towards efficient and timely software delivery.
                </div>
              </div>
            </div>
          </div>
          <div className='mt-12'>
            <div className='text-white font-semibold text-2xl lg:text-3xl text-center' data-aos="flip-left">
              Why TestSprint360?
            </div>
            <div className="hidden lg:flex mt-8 gap-x-36 items-stretch">
              <div className="w-[30%] flex flex-col" data-aos="fade-up-right">
                {tabs.map((tab, index) => (
                  <div key={tab.id} className="relative mb-5">
                    <div
                      className={`text-xl lg:text-2xl p-2 cursor-pointer ${index === activeTab ? 'text-[#FFF]' : 'text-[#5C7E9D]'}`}
                      onClick={() => handleTabClick(index)}
                    >
                      {tab.title}
                    </div>
                    {index === activeTab && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 rounded" style={{
                        width: `${progress}%`, transition: 'width 0.1s linear', backgroundColor: '#dbf26e',
                        backgroundImage: 'linear-gradient(319deg, #dbf26e 0%, #61fa74 37%, #1cfdd6 100%)'
                      }} />
                    )}
                  </div>
                ))}
              </div>
              <div className="w-[60%] flex " data-aos="fade-up-left">
                {tabs.map((tab, index) => (
                  <div key={tab.id} className={`mt-4 relative w-full ${index === activeTab ? 'whyTSRight' : ''} ${index === activeTab ? '' : 'hidden'}`} style={{ backgroundImage: `url(${tabBG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '30px' }}>
                    <div className='px-5 h-full w-full absolute top-[-10px] left-[-10px]'>

                      <div className='bg-[#71B48D] rounded-lg h-full w-full flex flex-col justify-center px-5   text-xl font-medium relative'>
                        <div>
                          <img src={images[index]} alt="" className={`max-h-14`} />

                        </div>
                        <div className='text-base lg:text-xl relative z-10 mt-3'>
                          {tab.content}
                        </div>
                        <img src={topBG} alt="" className='absolute top-0 right-0 -z-0 max-h-16' />
                        <img src={bottomBG} alt="" className='absolute bottom-0 left-3 -z-0 max-h-16' />

                      </div>

                    </div>

                  </div>
                ))}
              </div>
            </div>
            <div className='mt-8 block lg:hidden' data-aos="fade-up-left">
              <Slider {...settings}>
                {tabs.map((tab, index) => (
                  <div className="flex flex-col" key={index}>
                    <div key={tab.id} className="flex justify-center">
                      <div
                        className={`h-[60px] sm:h-fit text-xl sm:text-2xl p-2 cursor-pointer text-white text-center`}

                      >
                        {tab.title}
                      </div>

                    </div>

                    <div className={`mt-8 relative max-w-[95%] md:max-w-[70%] min-h-[450px] sm:min-h-[400px] mx-auto `} style={{ backgroundImage: `url(${tabBG})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '30px' }}>
                      <div className='sm:px-5 h-full w-full absolute sm:top-[-10px] sm:left-[-10px] '>

                        <div className='bg-[#71B48D] rounded-lg h-full w-full flex flex-col justify-center px-5   sm:text-xl font-medium relative'>
                          <div>
                            <img src={images[index]} alt="" className={`max-h-14`} />

                          </div>
                          <div className='relative z-10 mt-3'>
                            {tab.content}
                          </div>
                          <img src={topBG} alt="" className='absolute top-0 right-0 -z-0 max-h-16' />
                          <img src={bottomBG} alt="" className='absolute bottom-0 left-3 -z-0 max-h-16' />

                        </div>

                      </div>

                    </div>





                  </div>
                ))}


              </Slider>
            </div>
          </div>




        </div>
        <div className='mt-24 pb-10 relative px-5 overflow-hidden'>
          <img src={ellipse} alt="" className='absolute top-0 right-0 max-h-[120px] z-0' />
          <img src={bottomBG} alt="" className='absolute bottom-0 left-3 max-h-[70px] z-0' />
          <img src={Gear2} alt="" className='gear-rotate absolute bottom-[-16px] left-[50px] max-h-[70px]' style={{ zIndex: '0' }} />
          <img src={Gear2} alt="" className='gear-rotate absolute top-[25px] right-0 max-h-[70px]' style={{ zIndex: '0' }} />



          <div className='text-xl sm:text-2xl font-bold text-center w-full sm:w-[60%] lg:w-[45%] text-gray-300 mx-auto relative z-10' data-aos="flip-left">
            Unleash continuous testing
            with TestSprint360
          </div>
          <div className='mt-14 flex justify-center relative z-10' data-aos="flip-right">
            <button type="button" className="text-white bg-[#82D955] hover:bg-[#6fbc49] focus:outline-none  font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ boxShadow: '0px 61px 17px 0px rgba(0, 0, 0, 0.00), 0px 39px 16px 0px rgba(0, 0, 0, 0.01), 0px 22px 13px 0px rgba(0, 0, 0, 0.04), 0px 10px 10px 0px rgba(0, 0, 0, 0.07), 0px 2px 5px 0px rgba(0, 0, 0, 0.08)' }}>Start Free Trail</button>
          </div>
        </div>




      </div>


    </>
  );
};

export default Home;
