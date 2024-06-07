
import logo from "../../assets/logo.png";
import Auth2 from "../../assets/Auth/auth2.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons/faArrowAltCircleLeft";

export default function Forgot() {



  return (
    <>
       <div className="absolute top-8 lg:left-24 left-7">
        <div className="font-medium text-xl cursor-pointer flex items-center gap-1">
          <img className="w-11 h-11" src={logo} alt="logo" />
          <h1 className="font-bold text-lg ml-2">
            <span className="text-[#82D955]">Test</span>
            <span className="text-[#3AB6FF]">Sprint</span>360
          </h1>
        </div>
      </div>
      <div className="py-8 lg:px-24 px-7 flex justify-between items-center h-screen">
       
       
          <div className=" w-full lg:w-[45%]">

            <div className="font-bold text-[30px] text-gray-950 mt-8">
             Forgot Password?
            </div>
            <div className="text-sm font-medium text-gray-400 dark:text-gray-300">
             No worries. We will send you a code to reset your password
            </div>

            <div className="mt-14">
              <form>


                <div className="mb-14">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Email</label>
                  <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="you@yourcompany.com" required />
                </div>


                <div className="w-full">
                  <Link to='/reset-password'><button type="submit" className={`shadow-lg w-full  text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600  cursor-pointer  font-medium rounded-md text-lg   px-5 py-2.5 text-center `}>Send Code</button></Link> 
                </div>

              </form>


            </div>
            <hr className="my-6" />
            <div className="text-center text-gray-400 ">
               <Link to='/login' className="text-blue-500 flex justify-center items-center"><FontAwesomeIcon icon={faArrowAltCircleLeft} className="mr-1" /> Sign In </Link>
            </div>


          </div>

          <div className="hidden lg:block w-[45%] ">
              <img src={Auth2} alt="" />
          </div>
        </div>

   

    </>
  );
}

