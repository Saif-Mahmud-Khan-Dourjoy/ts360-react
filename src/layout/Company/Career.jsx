import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Career() {
  return (
    <div className=" mt-40 md:mt-44 lg:px-24 px-7 overflow-hidden">
      <div className="flex  items-center flex-col">

        <div className="flex gap-x-2 md:flex-row flex-col gap-y-2" data-aos="flip-left">
          <div className="text-center"><span className="text-sky-400 text-3xl sm:text-4xl md:text-5xl font-bold mb-0">Automate</span> </div>
          <div className="text-center"> <span className="text-zinc-800 text-3xl sm:text-4xl md:text-5xl font-bold "> your Career Path</span></div>
        </div>

        <div data-aos="flip-right" className=" w-full md:w-[80%] xl:w-1/2 mt-6 text-center text-slate-600 text-lg md:text-[22px] font-normal ">{`We're passionate about making testing accessible. Help us empower everyone with the power of automation.`}</div>
       
        </div>

        <div className="my-20">
        
          <div className="border-2 sm:p-8 px-4 py-4  rounded-lg border-[#2F2F2F] bg-[#F6F6F6]" data-aos="zoom-in">
            <div className="text-black text-2xl font-bold  leading-snug">JavaScript Developer</div>
            <div className="text-black text-lg font-medium leading-snug my-8">We are looking for an experienced Javascript developer to join our team.</div>
            <div className="flex justify-between sm:flex-row flex-col">
              <div className="flex gap-x-4">
                  <div className="bg-[#486681] h-fit px-3 sm:px-6 py-2 rounded-full text-white shadow-2xl hover:bg-[#426d94] cursor-pointer">
                  <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                 Remote
                  
                  </div>
                  <div className="bg-[#486681] h-fit px-3 sm:px-6 py-2 rounded-full text-white shadow-2xl hover:bg-[#426d94] cursor-pointer">
                  <FontAwesomeIcon className="mr-2" icon={faClock} />
                 Full-time
                  
                  </div>
              </div>
              <div >
                <Link to='/job-details/1'>
                <div className="bg-[#6EC740] px-10 py-2 rounded-xl text-white shadow-2xl hover:bg-[#7be745] cursor-pointer sm:mt-0 mt-8 w-fit mx-auto sm:mx-0">
                  
              View Job
              </div>
              </Link>
              </div>
            </div>
          </div>
          {/* <div className="border-2 sm:p-8 px-4 py-4  rounded-lg border-[#2F2F2F] bg-[#F6F6F6] mt-6" data-aos="zoom-in">
            <div className="text-black text-2xl font-bold  leading-snug">JavaScript Developer</div>
            <div className="text-black text-lg font-medium leading-snug my-8">We are looking for an experienced Javascript developer to join our team.</div>
            <div className="flex justify-between sm:flex-row flex-col">
              <div className="flex gap-x-4">
                  <div className="bg-[#486681] h-fit px-3 sm:px-6 py-2 rounded-full text-white shadow-2xl hover:bg-[#426d94] cursor-pointer">
                  <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                 Remote
                  
                  </div>
                  <div className="bg-[#486681] h-fit px-3 sm:px-6 py-2 rounded-full text-white shadow-2xl hover:bg-[#426d94] cursor-pointer">
                  <FontAwesomeIcon className="mr-2" icon={faClock} />
                 Full-time
                  
                  </div>
              </div>
              <div >
              <Link to='/job-details/1'>
                <div className="bg-[#6EC740] px-10 py-2 rounded-xl text-white shadow-2xl hover:bg-[#7be745] cursor-pointer sm:mt-0 mt-8 w-fit mx-auto sm:mx-0">
              View Job
              </div>
              </Link>
              </div>
            </div>
          </div> */}
        </div>


      
    </div>
  )
}
