import React, { useState } from 'react';
import mobileIllustration from '../assets/images/illustration-sign-up-mobile.svg';
import desktopIllustration from '../assets/images/illustration-sign-up-desktop.svg';
import iconForList from '../assets/images/icon-list.svg';
import { useNavigate } from 'react-router-dom';

let Email;

const NewsletterSignUp = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState(false);
    const validEmail = /^[\w0-9_./%+-]+@[\w]+\.[\w]{2,4}$/;
    Email = email;
    const handleClick = () => {
        if (!email || !validEmail.test(email)) {
            setErrorMsg(true);
        } else {
            setErrorMsg(false);
            navigate('/success');
        }
    }

    return (
        <>
            <div className='bg-white p-0 md:p-6 md:rounded-3xl gap-x-6 flex md:flex-row flex-col-reverse '>
                <div className="px-8 md:px-0 md:max-w-[45%] mx-auto my-12">
                    <h1 className='text-dark-slate-grey font-roboto-bold  text-4xl md:text-5xl'>Stay updated!</h1>
                    <p className='my-2 text-charcoal-grey font-roboto-regular text-[14px] md:text-[16px]'>Join 60,000+ product manager receiving monthly update on:</p>
                    <ul className='flex flex-col gap-y-2 md:gap-y-3 md:justify-center my-4 md:my-8 text-charcoal-grey font-roboto-regular text-[14px] md:text-md'>
                        <li className='flex gap-3 items-start'>
                            <img src={iconForList} alt="404" />
                            <p>Product discovery and building what matters</p>
                        </li>
                        <li className='flex gap-3 items-start'>
                            <img src={iconForList} alt="404" />
                            <p>Measuring to ensure updates are a success</p>
                        </li>
                        <li className='flex gap-3 items-start'>
                            <img src={iconForList} alt="404" />
                            <p>And much more!</p>
                        </li>
                    </ul>
                    <div className='flex justify-between font-roboto-bold mt-12 text-[10px] md:text-[12px]'>
                        <label htmlFor='email' className='text-dark-slate-grey'>Email address</label>
                        {
                            errorMsg ? <span className='text-tomato'>Valid email required</span> : ""
                        }
                    </div>
                    <input className={`w-full outline-none py-4 rounded-md my-1 px-6 ${errorMsg ? "border-2 border-tomato placeholder-tomato bg-red-200" : "border-2 border-grey"}`} type="email" id='email' name="email" placeholder='email@company.com' onChange={(e) => setEmail(e.target.value)} value={email} />
                    <button className='bg-dark-slate-grey text-white my-6 font-roboto-bold text-[14px] py-4 w-full rounded-md hover:bg-gradient-to-r from-[#f95273] to-[#ff6a3c] hover:shadow-md hover:shadow-[#f08768] duration-500' onClick={handleClick}>Subscribe to monthly newsletter</button>
                </div>
                <div className=''>
                    <img className='h-[100%] hidden md:block' src={desktopIllustration} alt='illustration' />
                    <img className='w-[100%] md:hidden' src={mobileIllustration} alt="illustration" />
                </div>
            </div>
        </>
    )
}

export { Email };
export default NewsletterSignUp;