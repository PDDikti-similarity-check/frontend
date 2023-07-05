import React from 'react';

// const Button = ({
//     type = "button",
//     className,
//     onClick,
//     children}) => {
//         return( 
//             <button 
//                 type={type}
//                 className={`${className} inline-flex w-full justify-center rounded-[8px] py-2 hover:brightness-90 text-[14px] font-bold text-white sm:w-fit sm:px-[40px]`} 
//                 onClick={onClick}
//                 >{children}
//             </button>  
//         )
// }

const Button = ({
    type = "button",
    variant = "button-primary",
    className,
    id,
    onClick,
    disabled = false,
    children}) => {
        if (variant == "button-primary") {
            variant = "bg-blue"
        }
        else if (variant == "button-danger") {
            variant = "bg-danger"
        }
        else if (variant == "button-warning") {
            variant = "bg-warning"
        }
        else if (variant == "button-sukses") {
            variant = "bg-sukses"
        }
        return (
            <button
                type={type}
                variant={variant}
                className={` gap-x-2 inline-flex justify-center rounded-sm px-4 py-2 text-neutral-10 text-sm ${variant} ${className} `}
                onClick={onClick}
                id={id}
                disabled ={disabled}
            >
                {children}
            </button>
            // </div>
        );
}

const OutlineButton = ({
    type = "button",
    variant = "button-primary",
    className,
    id,
    onClick,
    children}) => {        
        if (variant == "button-primary") {
            variant = "border-blue text-blue"
        }
        else if (variant == "button-danger") {
            variant = "border-danger text-danger"
        }
        else if (variant == "button-warning") {
            variant = "border-warning text-warning"
        }
        else if (variant == "button-sukses") {
            variant = "border-sukses text-sukses"
        }
        return( 
        // <div className="button-container">   
            <button 
                type={type}
                variant={variant}
                className={`gap-x-2 inline-flex justify-center rounded-sm px-4 py-2 border text-sm ${className} ${variant}`} 
                onClick={onClick}
                id={id}
                >{children}
            </button>  
        // </div> 
        )
}
export {Button, OutlineButton}