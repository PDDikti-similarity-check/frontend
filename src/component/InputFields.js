import '../App.css';
import React from 'react';


const TextInput = ({
    label = "",
    variant = "",
    placeholder,
    className,
    id,
    value,
    type = 'text',
    onChange,
    children}) => {
        return( 
        <div>
            <label className="font-raleway text-[14px]">
                {label}
            </label>
            <input 
                type={type}
                variant={variant}
                placeholder={placeholder}
                className={` rounded-[15px] font-raleway text-[12px] border-gray-300 appearance-none mb-3 py-3.5 px-3 leading-tight focus:outline-none focus:shadow-outline ${className} ${variant}`} 
                value={value}
                onChange={onChange}
                id={id}
                >{children}
            </input>  
        </div> 
        )
}

const ReqTextInput = ({
    label = "Insert label",
    variant = "",
    placeholder,
    className,
    id,
    value,
    type = 'text',
    onChange,
    children}) => {
        return( 
        <div>
            <label className="font-raleway text-[14px]">
                
                <div className='flex items-center'>
                    {label}
                    <p className="font-raleway text-[14px] font-bold text-[#D0021B]">
                        *
                    </p>
                </div>
            </label>
            <input 
                type={type}
                variant={variant}
                placeholder={placeholder}
                className={`${className} ${variant} rounded-[15px] font-raleway text-[14px] border-gray-300 appearance-none mb-3 py-3.5 px-3 leading-tight focus:outline-none focus:shadow-outline`} 
                value={value}
                onChange={onChange}
                id={id}
                required='true'
                >{children}
            </input>  
        </div> 
        )
}

const DisTextInput = ({
    label = "Insert label",
    variant = "",
    className,
    id,
    value,
    type = 'text',
    children}) => {
        return( 
        <div>
            <label className="font-raleway text-[14px]">
                {label}
            </label>
            <input 
                type={type}
                variant={variant}
                className={` ${variant} bg-[#D9D9D9] rounded-[15px] font-raleway text-[14px] border-black-500 appearance-none mb-3 py-3.5 px-3 leading-tight focus:outline-none focus:shadow-outline ${className}`} 
                value={value}
                id={id}
                disabled
                >{children}
            </input>  
        </div> 
        )
}

const DisabledTextInput = ({
    label = "",
    variant = "",
    placeholder,
    className,
    id,
    value,
    type = 'text',
    onChange,
    children}) => {
        return( 
        <div>
            <label className="font-raleway text-[14px]">
                {label}
            </label>
            <input 
                type={type}
                variant={variant}
                placeholder={placeholder}
                className={`${className} ${variant} rounded-[4px] font-raleway text-[14px] border-gray-300 appearance-none w-full mb-3 py-3.5 px-3 leading-tight focus:outline-none focus:shadow-outline`} 
                value={value}
                onChange={onChange}
                id={id}
                disabled
                >{children}
            </input>  
        </div> 
        )
}

export {TextInput, ReqTextInput, DisTextInput, DisabledTextInput };
