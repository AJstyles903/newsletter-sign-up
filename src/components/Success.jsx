import React from 'react';
import iconForSuccess from '../assets/images/icon-success.svg';
import { useNavigate } from 'react-router-dom';
import {Email} from './NewsletterSignUp';

const Success = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };

    return (
        <>
            <div className='flex flex-col justify-center items-start pt-[100px] md:py-8 h-screen md:h-auto md:max-w-[400px] px-6 md:px-12 md:rounded-3xl bg-white'>
                <img className="w-[20%]" src={iconForSuccess} alt="success" />
                <h1 className='text-dark-slate-grey text-5xl font-roboto-bold my-6'>Thanks for subscribing!</h1>
                <p className='text-charcoal-grey text-sm'>A confirmation email has been sent to <span className='text-dark-slate-grey font-roboto-bold'>{Email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                <button onClick={handleClick} className='bg-dark-slate-grey text-white mt-[250px] md:my-6 font-roboto-bold text-[14px] py-4 w-full rounded-md hover:bg-gradient-to-r from-[#ff586a] to-tomato hover:shadow-md hover:shadow-[#f08768]'>Dismiss message</button>
            </div>
        </>
    )
}

export default Success;