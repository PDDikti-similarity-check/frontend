import React from 'react';

const Button = ({
    type = "button",
    className,
    onClick,
    children}) => {
        return( 
            <button 
                type={type}
                className={`${className} inline-flex w-full justify-center rounded-[8px] py-2 hover:brightness-90 text-[14px] font-bold text-white sm:w-fit sm:px-[40px]`} 
                onClick={onClick}
                >{children}
            </button>  
        )
}

export {Button}