import '../App.css';
import React from 'react';


const TextInput = ({
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
            <label className="font-PlusJakartaSans text-[12px] font-bold">
                {label}
            </label>
            <input 
                type={type}
                variant={variant}
                placeholder={placeholder}
                className={`${className} ${variant} rounded-[4px] font-PlusJakartaSans text-[12px] border-gray-300 appearance-none w-full mb-3 py-3.5 px-3 leading-tight focus:outline-none focus:shadow-outline`} 
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
            <label className="font-PlusJakartaSans text-[12px] font-bold">
                
                <div className='flex items-center'>
                    {label}
                    <p className="font-PlusJakartaSans text-[12px] font-bold text-[#D0021B]">
                        *
                    </p>
                </div>
            </label>
            <input 
                type={type}
                variant={variant}
                placeholder={placeholder}
                className={`${className} ${variant} rounded-[4px] font-PlusJakartaSans text-[12px] border-gray-300 appearance-none w-full mb-3 py-3.5 px-3 leading-tight focus:outline-none focus:shadow-outline`} 
                value={value}
                onChange={onChange}
                id={id}
                required
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
            <label className="font-PlusJakartaSans text-[12px] font-bold">
                {label}
            </label>
            <input 
                type={type}
                variant={variant}
                className={`${className} ${variant} rounded-[4px] font-PlusJakartaSans text-[12px] border-gray-300 appearance-none w-full mb-3 py-3.5 px-3 leading-tight focus:outline-none focus:shadow-outline`} 
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
            <label className="font-PlusJakartaSans text-[12px]">
                {label}
            </label>
            <input 
                type={type}
                variant={variant}
                placeholder={placeholder}
                className={`${className} ${variant} rounded-[4px] font-PlusJakartaSans text-[12px] border-gray-300 appearance-none w-full mb-3 py-3.5 px-3 leading-tight focus:outline-none focus:shadow-outline`} 
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
