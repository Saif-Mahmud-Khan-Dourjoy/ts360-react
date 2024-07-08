import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import ContactImg from '../../assets/ContactUs/contactimg.png'
import Laptop from '../../assets/ContactUs/laptopContact.png'
import Intersect from '../../assets/ContactUs/Intersect.png'
import Intersect1 from '../../assets/ContactUs/Intersect-1.png'
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
        <meta name="title" content="Contact Us"   />
        <meta name="description" content="Contact us if you have any kind of query"   />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="md:flex mt-40 md:mt-[200px] relative overflow-hidden">
        {/* <div data-aos="fade-left" className="hidden md:block w-[96px] h-[50%] bg-lime-400 absolute md:top-[24%] lg:top-[25%] xl:top-[22%] right-0"></div> */}
        <div className="md:w-[60%]">
          <div className="lg:pl-24 pl-7 pr-5" data-aos="flip-left">
            <span className="text-zinc-800 text-3xl lg:text-4xl font-bold">We’d </span><span className="text-sky-400 text-3xl lg:text-4xl font-bold ">Love</span><span className="text-zinc-800 text-3xl lg:text-4xl font-bold "> to Hear from You</span>
            <div className=" text-slate-600 text-base font-normal mt-2">Have a question, suggestion, or just want to chat about test automation? Let us know!</div>
          </div>
          <div className=" bg-blue-400 lg:pl-24 pl-7 pr-7 md:pr-20 pt-10 pb-12 mt-8 relative" data-aos="flip-right">
            {/* <div className="hidden md:block w-[70px] h-[90px] bg-lime-400 absolute bottom-0 right-0"></div> */}
            <div className="grid gap-6 mb-1 sm:grid-cols-2">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-100 ">Name</label>
                <input type="text" id="name" className="bg-transparent  border-b-2 focus:border-b-gray-300 focus:outline-none text-gray-100 focus:ring-0 text-sm block w-full p-2.5 focus:border-b-2 placeholder-gray-300" placeholder="Enter Name" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100 ">Email</label>
                <input type="email" id="email" className="bg-transparent  border-b-2 focus:border-b-gray-300 focus:outline-none text-gray-100 focus:ring-0 text-sm block w-full p-2.5 focus:border-b-2 placeholder-gray-300" placeholder="Enter E-mail" required />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-100 ">Message</label>
              <textarea rows="4" id="message" className="bg-transparent  border-b-2 focus:border-b-gray-300 focus:outline-none text-gray-100 focus:ring-0 text-sm block w-full p-2.5 focus:border-b-2 placeholder-gray-300" placeholder="Write your message"> </textarea>

            </div>

            <div className="text-center mt-[39px] text-white">
              <span className="cursor-pointer hover:text-gray-200">SEND MESSAGE <FontAwesomeIcon className="ml-2" icon={faArrowRight} /></span>
            </div>

          </div>
        </div>
        {/* <div className=" flex-1 flex md:items-end justify-center px-5 py-10 md:pb-10 md:px-2" data-aos="zoom-in" style={{
          backgroundImage: `url(${ContactImg})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: 'center',
          width:'100px'
          
         


        }} >
          <div className=" text-center ">
            <div className=" text-white lg:text-base xl:text-lg font-normal ">You can also directly e-mail us at</div>
            <div className=" text-white lg:text-[22px] xl:text-[26px] font-semibold mt-2">contact@testsprint360.com</div>
          </div>
        </div> */}

        <div className="md:rounded-tl-[70px] h-auto p-5 flex-1 bg-gradient-to-b from-[#538195]  to-[#2F5B6F] relative flex flex-col justify-center items-center" data-aos="zoom-in">

          <img src={Intersect} alt="" className="absolute bottom-0 left-10 h-10 sm:h-14 " style={{ zIndex: '2' }} />
          <img src={Intersect1} alt="" className="absolute top-0 right-0 h-20 sm:h-28 " style={{ zIndex: '2' }} />
          <img src={Laptop} alt="" className="  max-h-80" />
          <div className=" text-center absolute bottom-[15%]  md:static z-10 ">
            <div className="text-white lg:text-base xl:text-lg font-normal ">You can also directly e-mail us at</div>
            <div className="  text-white lg:text-[22px] xl:text-[26px] font-semibold mt-2">contact@testsprint360.com</div>
          </div>
        </div>
      </div >
    </>
  )
}

