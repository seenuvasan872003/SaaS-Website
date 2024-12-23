import 'react'
import '../style/signup.css'
import img1 from '../assets/signup/imageone.png'
import img2 from '../assets/signup/imagetwo.png'
import { GoArrowRight } from "react-icons/go";



const SignUpfree = () => {
  return (
    <>
        <section>
            <div className='signupbg h-[472px]'>
                <div className='grid grid-rows-3 grid-flow-col gap-4 '>
                    <div className='hidden sm:block row-end-3 row-span-2'>
                        <img src={img1} alt="img1" />
                    </div>
                    <div className='row-start-2 row-end-4 text-center items-center p-5'>
                        <h1 className='font-bold text-3xl md:text-4xl'>Sign up for free today</h1>
                        <p className='mt-2'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
                        <div className="md:flex md:space-x-4 text-center md:justify-center md:items-center mt-3 ">
                            <button className="bg-black text-white px-6 py-2 mr-4 mb-2 md:m-0 rounded-lg"><a href='https://flowcv.me/seenuvasan' target="_blank" rel="noopener noreferrer">Get for free</a></button>
                            <button className="text-gray-600 px-6 py-2">Learn more <GoArrowRight className='inline' /></button>
                        </div>
                    </div>
                    <div className='hidden sm:block row-start-2 row-span-2'>
                        <img src={img2} alt="img2" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignUpfree