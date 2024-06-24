
import target from '../../assets/AboutUs/Target.png'
import bulb from '../../assets/AboutUs/Lightbulb.png'
import cof1 from '../../assets/AboutUs/cof1.png'
import cof2 from '../../assets/AboutUs/cof2.png'
import cof3 from '../../assets/AboutUs/cof3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import bgImage from '../../assets/AboutUs/bg.png';

export default function AboutUs() {
  return (
    <>
      <div className="lg:px-24 px-7 pt-44 overflow-hidden">
        <div className="font-bold text-3xl md:text-5xl text-center " data-aos="flip-left">
          <span className="text-[#3AB6FF]">Faster,</span> <span className="text-[#82D955]">Simpler</span> <span className="text-gray-900 block md:inline mt-2 ">Testing for Everyone</span>
        </div>
        <div className="mt-12 md:mt-16 text-center w-full md:w-[90%] xl:w-[60%] mx-auto text-lg text-gray-400" data-aos="flip-right">
          In August 2023, TestSprint360 began as a mission by three innovators to tackle a critical issue: streamlining test automation for Agile workflows. Since then, a passionate team of developers, testers, and product experts has joined the cause, working to make TestSprint360 the go-to solution for no-code test automation.
        </div>
        <div className="mt-10 mb-16">
          <div className="flex sm:justify-between sm:items-center px-5 py-10 sm:px-10 bg-[#486681] gap-y-8 rounded-3xl sm:gap-x-5 flex-col sm:flex-row" data-aos="zoom-in-up">
            <div className='text-center sm:text-left flex-1'>
              <div className='w-full'>
                <img className='h-16 mx-auto sm:mx-0' src={target} alt="" />
              </div>
              <div className='my-4 font-bold text-2xl md:text-3xl text-white pl-2'>
                Our Mission
              </div>
              <div className='text-base md:text-xl text-gray-300 pl-2'>
                Bridging the gap between agile
                and automation
              </div>
            </div>

            {/* <div
              className=" h-[250px] min-h-[1em] w-0.5 self-stretch bg-gray-300 hidden sm:block">

            </div> */}

            <div className='block sm:hidden'>
              <hr className="w-full h-0.5 bg-gray-300 border-0" />
            </div>
            <div className='flex items-center justify-center sm:justify-start gap-x-8 flex-1'>
              <div
                className=" h-[250px] min-h-[1em] w-0.5 self-stretch bg-gray-300 hidden sm:block">

              </div>
              <div className='text-center sm:text-left h-fit'>
                <div className='w-full'>
                  <img className='h-16 mx-auto sm:mx-0' src={bulb} alt="" />
                </div>
                <div className='my-4 font-bold text-2xl md:text-3xl text-white pl-2'>
                  Our Vision
                </div>
                <div className='text-base md:text-xl text-gray-300 pl-2'>
                  Revolutionizing QA by making Test
                  Automation the Norm
                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div className='font-bold text-2xl sm:text-3xl text-center' data-aos="zoom-out-down">
            The Visionaries behind TestSprint360
          </div>
          <div className='mt-10 flex justify-center items-center gap-x-20 gap-y-12 mb-5 flex-wrap'>
            <div className='flex justify-center items-center flex-col ' data-aos="fade-up-right">
              <img src={cof1} className='h-32 sm:h-40' alt="" />

              <div className='text-center text-xl font-bold mt-8'>
                Koushik Das
              </div>
              <div className='text-center text-base mt-2'>
                Co Founder
              </div>
              <div className='h-1 w-[300px] sm:w-[350px] bg-[#486681] mt-3 rounded relative -z-10'>
                <div className='bg-[#0077B5] w-fit h-fit px-1 rounded-full absolute right-2 top-[-30px]'>
                  <FontAwesomeIcon color='white' icon={faLinkedinIn} />
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center flex-col ' data-aos="zoom-in" >
              <img src={cof2} className='h-32 sm:h-40' alt="" />

              <div className='text-center text-xl font-bold mt-8'>
                Suyog Khedekar
              </div>
              <div className='text-center text-base mt-2'>
                Co Founder
              </div>
              <div className='h-1 w-[300px] sm:w-[350px] bg-[#486681] mt-3 rounded relative -z-10'>
                <div className='bg-[#0077B5] w-fit h-fit px-1 rounded-full absolute right-2 top-[-30px]'>
                  <FontAwesomeIcon color='white' icon={faLinkedinIn} />
                </div>
              </div>
            </div>

            <div className='flex justify-center items-center flex-col ' data-aos="fade-up-left">
              <img src={cof3} className='h-32 sm:h-40' alt="" />

              <div className='text-center text-xl font-bold mt-8'>
                Ashikur Khan
              </div>
              <div className='text-center text-base mt-2'>
                Co Founder
              </div>
              <div className='h-1 w-[300px] sm:w-[350px] bg-[#486681] mt-3 rounded relative -z-10'>
                <div className='bg-[#0077B5] w-fit h-fit px-1 rounded-full absolute right-2 top-[-30px]'>
                  <FontAwesomeIcon color='white' icon={faLinkedinIn} />
                </div>
              </div>
            </div>

          </div>
        </div>



      </div>
      <div className="mt-24 lg:px-24 px-7 py-8  flex items-center overflow-hidden" style={{
        minHeight: "350px",
        width: "100%",
        backgroundImage: `linear-gradient(105deg, rgba(72, 102, 129, 1) 0%, rgba(72, 102, 129, 1) 60%, transparent 60%), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'right',
        position: 'relative'


      }}>
        <div className='absolute top-0 left-0 w-full h-full bg-gray-600/50' style={{ zIndex: 1 }}></div>

        <div className='w-full sm:w-[60%] relative' style={{ zIndex: 2 }}>
          <div data-aos="fade-right">
            <div className='text-white text-2xl mb-8'>
              Build your Career  with us
            </div>
            <div className='text-white sm:text-gray-300 mb-10'>
              At TestSprint360, we are more than a company; we are a dedicated consortium of experts committed to redefining the possibilities of test automation. Join us on this transformative journey as we empower enterprises with our AI driven tool to implement test automation at the pace of agile.
            </div>
          </div>

          <div data-aos="fade-left" className='py-3 md:py-2 px-5 md:px-3 bg-[#6EC740] text-white rounded w-fit cursor-pointer hover:bg-[#6ea14b] shadow-lg'>
            Explore Careers
          </div>
        </div>


      </div>


    </>
  )
}
