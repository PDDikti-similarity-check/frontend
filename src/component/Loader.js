import  React , {useState } from 'react';
import "../App.css";
import ReactLoading from 'react-loading';

const Loader = ({label, description}) => {
      return (
        <div class="absolute z-30" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-neutral-90 bg-opacity-20 transition-opacity"></div>
            <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in drop-shadow-2xl" >
                <div class="flex min-h-full justify-center text-center items-center">
                    <div class="relative transform overflow-hidden rounded-[12px] bg-neutral-10 text-center transition-all w-1/4 ">
                            
                            <div class="mt-2 flex item-center justify-center">
                                <ReactLoading type={"cylon"} color="#1B87DC" height={'25%'} width={'25%'} />                
                            </div>
     
                    </div>
                </div>
            </div>
        </div> 
        );
};
  
export {Loader};