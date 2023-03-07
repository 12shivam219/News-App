import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer() {
    return (
        <>
            <footer className='footer bg-[#011e29]'>
                <div className="foot flex w-full max-w-[80%] relative m-auto text-[#dbcece] justify-between py-7">
                    <div className="contact">
                        <div>
                            <h1 className='kalam text-[30px] font-extrabold'>Contact</h1>
                            <div className="address my-3">
                                <span className='block kalam font-extrabold'>Nest News</span>
                                <span className='block kalam font-extrabold'>500 Terry Francois Street</span>
                                <span className='block kalam font-extrabold'>San Francisco, CA 94158</span>
                            </div>
                            <div className="email">
                                <span className='block kalam font-extrabold'><span>Tel:</span>123-456-7890</span>
                                <span className='block kalam font-extrabold'><span>Email:</span>info@mysite.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="stayConnected">
                        <h1 className='kalam font-extrabold'>stay Connected</h1>
                        <div className="socialMedia mt-7">
                            <span className='block'> <FacebookIcon />Facebook</span>
                            <span className='block my-2'><InstagramIcon />Instagram</span>
                            <span className='block'><TwitterIcon />Twitter</span>
                        </div>
                    </div>
                    <div className="message">
                        <h1 className='kalam font-extrabold'>Or Leave a Message Here...</h1>
                        <div className="form mt-7">
                            <form action="none" className='flex flex-col'>
                                <div className="name flex justify-between h-[50px]">
                                    <input type="text" className='w-[45%] kalam h-full bg-[#1b1c1d0a] border-b-2 border-solid border-black outline-none' placeholder='Full Name' name="" id="" />
                                    <input type="email" className='w-[45%] kalam h-full bg-[#1b1c1d0a] border-b-2 border-solid border-black outline-none' placeholder='Email' name="" id="" />
                                </div>
                                <label htmlFor="subj" className='mt-7'>
                                    <input type="text" className='w-full kalam bg-[#1b1c1d0a] border-b-2 border-solid border-black outline-none' id='subj' placeholder='Subject' name="" /></label>
                                <label htmlFor="msg" className='mt-5'>
                                    <input type="text" className='w-full kalam bg-[#1b1c1d0a] border-b-2 border-solid border-black outline-none' placeholder='Message...' name="" id="msg" /></label>
                                <div className='text-right pt-2'><button className='h-[30px] w-[80px] kalam border-2 border-solid border-gray-600 rounded-lg'>Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
