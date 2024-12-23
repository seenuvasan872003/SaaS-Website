import 'react'
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";

const Footer = () => {
  return (
    <>
        <footer className="footer bg-black text-white px-2 py-10">
            <div className='grid grid-col-1 sm:grid-cols-2 gap-10'>
                <div className=' h-[247px] flex flex-col sm:col-start-1 justify-between'>
                    <p className='text-[#BCBCBC]'>
                        Effortlessly turn your ideas into a 
                        fully functional, responsive, 
                        no-code SaaS website.
                    </p>
                    <div className='flex gap-3'>
                      <FaXTwitter className='size-5 text-[#808080] hover:text-white'/>
                      <PiInstagramLogoFill className='size-5 text-[#808080] hover:text-white'/>
                      <FaPinterest className='size-5 text-[#808080] hover:text-white'/>
                      <FaLinkedin className='size-5 text-[#808080] hover:text-white'/>
                      <FaGithub className='size-5 text-[#808080] hover:text-white'/>
                      <IoLogoYoutube className='size-5 text-[#808080] hover:text-white'/>
                    </div>
                </div>
                <div className='md:flex gap-7 sm:col-end-4 text-center '>
                    <div>
                        <h6 className="mb-6 font-bold text-sm ">Product</h6>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Features</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Integrations</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Updates</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">FAQ</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Pricing</a>
                    </div>
                    <div>
                        <h6 className="mb-6 font-bold text-sm">Company</h6>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">About us</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Blog</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Careers</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Manifesto</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Press</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Contact</a>
                    </div>
                    <div>
                        <h6 className="mb-6 font-bold text-sm ">Resources</h6>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Examples</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Community</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Guides</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Docs</a>

                    </div>
                    <div>
                        <h6 className="mb-6 font-bold text-sm ">Legal</h6>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Privacy</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Terms</a>
                        <a className="block mb-6 text-[#7B7B7B] hover:text-white">Security</a>
                    </div>
                </div>
            </div>
        </footer>
        <button className='btn btn-active btn-neutral bg-black hover:bg-white hover:text-black'>
            <a href="https://flowcv.me/seenuvasan" target="_blank" rel="noopener noreferrer" className='font-bold text-2xl align-middle '>
                <FcBusinessman  className='inline align-middle m-2'/>About Me
            </a> 
        </button>
    </>
  )
}

export default Footer