import 'react'
import img1 from '../assets/streamlined/image1.png'
import img2 from '../assets/streamlined/image2.png'

const Streamlined = () => {
  return (
    <>
        <section>
            <div>
                <div className='m-5 text-center'>
                    <h1 className='font-bold text-3xl md:text-4xl text-center mb-3'>Streamlined for easy management</h1>
                    <p className='text-center'>
                        <span className='sm:block text-xl'>Enjoy customizable lists, team work tools, and smart</span>
                        <span className='sm:block text-xl'>tracking all in one place. Set tasks, get reminders, and</span>
                        <span className='sm:block text-xl'>see your progress simply and quickly.</span>
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-10 lg:py-[100px] lg:px-[200px]'>
                    <div className='text-center drop-shadow-xl py-[20px] px-10 rounded-lg bg-[#ffffff]'>
                        <div className='flex items-center justify-center mt-5 mb-15'>
                        <img src={img1} alt="" />
                        </div>
                        <h3 className='font-bold text-xl m-3'>Integration ecosystem</h3>
                        <p className='m-3'>
                            <span className='sm:block text-xl'>Enhance your productivity by connecting</span>
                            <span className='sm:block text-xl'>with your favorite tools, keeping all your</span>
                            <span className='sm:block text-xl'>essentials in one place.</span>
                        </p>
                    </div>
                    <div className='text-center drop-shadow-xl py-[20px] px-10 rounded-lg bg-[#ffffff]'>
                        <div className='flex items-center justify-center mt-5 mb-15'>
                        <img src={img2} alt="" />
                        </div>
                        <h3 className='font-bold text-xl m-3'>Goal setting and tracking</h3>
                        <p className='m-3'>
                            <span className='sm:block text-xl'>Define and track your goals, breaking down</span>
                            <span className='sm:block text-xl'>objectives into achievable tasks to keep your</span>
                            <span className='sm:block text-xl'>targets in sight.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Streamlined