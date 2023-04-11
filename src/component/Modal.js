import  React , {useState } from 'react';
import "../App.css";

const ConfirmModal = ({label, description, detail, leftbutton, rightbutton, onClickRight, onClickLeft}) => {

  return (
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in" >
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative transform overflow-hidden rounded-[10px] bg-lightblue text-left shadow-xl transition-all sm:my-8 sm:w-[380px] sm:max-w-[436px]">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-lightblue sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-blue" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin-="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{label}</h3>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500">{description}</p>
                                </div>
                                <div class="mt-2">
                                    <p class="text-sm text-blue text-[12px] font-bold">{detail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:justify-center items-center sm:px-6">
                        <button type="button" class="inline-flex w-full justify-center rounded-[8px] bg-buttonblue py-2 text-xs font-bold text-white shadow-sm hover:brightness-90 sm:ml-3 sm:w-[110px]" onClick={onClickRight}>{rightbutton}</button>
                        <a class="flex mt-2 justify-center item-center text-buttonblue text-xs font-bold cursor-pointer underline hover:brightness-90 sm:mt-0" onClick={onClickLeft}>{leftbutton}</a>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
};

const WarningModal = ({label, description, detail, leftbutton, rightbutton, onClickRight, onClickLeft}) => {

    return (
      <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"></div>
          <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in" >
              <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <div class="relative transform overflow-hidden rounded-[10px] bg-lightblue text-left shadow-xl transition-all sm:my-8 sm:w-[380px] sm:max-w-[436px]">
                      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                          <div class="sm:flex sm:items-start">
                              <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin-="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                                </svg>
                              </div>
                              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                  <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{label}</h3>
                                  <div class="mt-2">
                                      <p class="text-sm text-gray-500">{description}</p>
                                  </div>
                                  <div class="mt-2">
                                      <p class="text-sm text-blue text-[12px] font-bold">{detail}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:justify-center items-center sm:px-6">
                          <button type="button" class="inline-flex w-full justify-center rounded-[8px] bg-danger py-2 text-xs font-bold text-white shadow-sm hover:brightness-90 sm:ml-3 sm:w-[110px]" onClick={onClickRight}>{rightbutton}</button>
                          <a class="flex mt-2 justify-center item-center text-buttonblue text-xs font-bold cursor-pointer underline hover:brightness-90 sm:mt-0" onClick={onClickLeft}>{leftbutton}</a>
                      </div>
                  </div>
              </div>
          </div>
      </div> 
      );
  };

const SuccessModal = ({label, description, rightbutton, onClickRight}) => {

    return (
      <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in" >
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative border-[1px] border-[#0AB663] transform overflow-hidden rounded-[25px] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[436px]">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-states-success bg-opacity-75 sm:mx-0 sm:h-10 sm:w-10">
                            <svg class="h-6 w-6 text-states-success" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin-="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                            </svg>
                        </div>
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{label}</h3>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">{description}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button" class="inline-flex w-full bg-[#0AB663] justify-center rounded-[25px] bg-primary px-3 py-2 text-xs font-bold text-white shadow-sm hover:brightness-90 sm:ml-3 sm:w-[129px]" onClick={onClickRight}>{rightbutton}</button>
                    </div>
                </div>
            </div>
        </div>
      </div> 
      );
};

const ErrorModal = ({label, description, rightbutton, onClickRight}) => {

    return (
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto motion-safe:animate-fade-in">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div class="relative border-[1px] border-danger transform overflow-hidden rounded-[25px] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[436px]">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin-="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        </div>
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">{label}</h3>
                        
                        <div class="mt-2">
                            <p class="text-sm text-gray-500">{description}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" class="inline-flex w-full justify-center rounded-[25px] bg-danger px-3 py-2 text-xs font-bold text-white shadow-sm hover:brightness-90 sm:ml-3 sm:w-[129px]" onClick={onClickRight}>{rightbutton}</button>
                    </div>
                </div>
            </div>
        </div>
      </div> 
      );
};
  
export {WarningModal, ConfirmModal, SuccessModal, ErrorModal};