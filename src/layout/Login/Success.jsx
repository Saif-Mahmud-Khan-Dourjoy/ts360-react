
import logo from "../../assets/logo.png";
import Auth2 from "../../assets/Auth/auth2.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft";


export default function Success() {




  return (
    <>
      <div className="py-8 lg:px-24 px-7 ">
        <div className="font-medium text-xl cursor-pointer flex items-center gap-1">
          <img className="w-11 h-11" src={logo} alt="logo" />
          <h1 className="font-bold text-lg ml-2">
            <span className="text-[#82D955]">Test</span>
            <span className="text-[#3AB6FF]">Sprint</span>360
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className=" w-full lg:w-[45%]">

            <div className="font-bold text-[30px] text-gray-950 mt-8">
            Password Reset
            </div>
            <div className="text-sm font-medium text-gray-400 dark:text-gray-300">
            We sent a code to <span className="text-gray-700 font-semibold">dev.testsprint@testsprint360.com</span>  
            </div>

            <div className="mt-14">
              <div className="mb-6 text-gray-900 text-sm font-semibold">
              Enter Code
              </div>
             
             
             

                <div className="mb-14">
                <div className="w-full flex justify-center space-x-5">
                      {otp.map((data,i)=>{
                        return <input className="border-b-2 w-20 h-16 outline-none text-center text-xl font-semibold" type="text" key={`input-${i}`} value={data} maxLength={1} onChange={(e)=>handleChange(e,i)}/>
                      })}      
              </div>
                </div>


                <div className="w-full">
                 <Link to=''><button type="submit" className={`shadow-lg w-full  text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600  cursor-pointer  font-medium rounded-md text-lg   px-5 py-2.5 text-center `}>Send Code</button></Link> 
                </div>

           


            </div>
            <hr className="mt-6 mb-3" />

            <div className="text-sm text-center text-gray-400 dark:text-gray-300">
             {`Didn’t receive the code?`} <span className="text-blue-400 cursor-pointer">Resend it</span>
            </div>
            <div className="text-center text-gray-400 mt-6">
               <Link to='/login' className="text-blue-500 flex justify-center items-center"><FontAwesomeIcon icon={faArrowAltCircleLeft} className="mr-1" /> Sign In </Link>
            </div>


          </div>

          <div className="hidden lg:block w-[45%] ">
              <img src={Auth2} alt="" />
          </div>
        </div>

      </div>

    </>
  );
}


