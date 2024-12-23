import 'react'
import "../style/trackprogress.css"
import bg from '../assets/trackprogress/trackbg1.png'
import icons1 from '../assets/trackprogress/Icons1.png'
import icons2 from '../assets/trackprogress/Icons2.png'
import icons3 from '../assets/trackprogress/Icons3.png'
import icons4 from '../assets/trackprogress/Icons4.png'
import { GoArrowRight } from "react-icons/go";


const TrackProgress = () => {
  return (
    <>
        <section className='mb-20'>
            <div className='trackbg h-[1495px] sm:pt-10'>
                <div className='text-center mb-10'>
                    <h1 className='m-5'>
                        <span className='sm:block font-bold text-3xl md:text-4xl'>A more effective way to</span>
                        <span className='sm:block font-bold text-3xl md:text-4xl'>track progress</span>
                    </h1>
                    <p className='m-5'> 
                        <span className='sm:block text-xl'>Effortlessly turn your ideas into a fully functional, responsive,</span> 
                        <span className='sm:block text-xl'>no-code SaaS website in just minutes with</span>
                        <span className='sm:block text-xl'>the set of free components for Framer.</span> 
                    </p>
                </div>
                <div className='flex items-center justify-center mt-5 mb-15'>
                    <img src={bg} alt="trackeprogressbg" />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-content-center px-20 sm:pt-36  mt-15'>
                    <div className='mb-10'>
                        <img src={icons1} alt="icons"  className='mb-2'/>
                        <h4 className='mb-2 font-bold text-xl'>Integration ecosystem</h4>
                        <p className='mb-2'>Track your progress and motivate your efforts everyday.</p>
                        <div className='mb-2'>
                            <a href="">Learn more <GoArrowRight className='inline' /> </a>
                        </div>
                    </div>
                    <div className='mb-10'>
                        <img src={icons2} alt="icons"  className='mb-2' />
                        <h4 className='mb-2 font-bold text-xl'>Goal setting and tracking</h4>
                        <p className='mb-2'>Set and track goals with manageable task breakdowns.</p>
                        <div className='mb-2'>
                            <a href="">Learn more <GoArrowRight className='inline' /></a>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <img src={icons3} alt="icons"  className='mb-2'/>
                        <h4 className='mb-2 font-bold text-xl'>Secure data encryption</h4>
                        <p className='mb-2'>Ensure your data’s safety with top-tier encryption.</p>
                        <div className='mb-2'>
                            <a href="">Learn more <GoArrowRight className='inline' /></a>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <img src={icons4} alt="icons"  className='mb-2'/>
                        <h4 className='mb-2 font-bold text-xl'>Customizable notifications</h4>
                        <p className='mb-2'>Get alerts on tasks and deadlines that matter most.</p>
                        <div className='mb-2'>
                            <a href="">Learn more <GoArrowRight className='inline' /></a>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </>
  )
}

export default TrackProgress