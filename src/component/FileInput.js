import  React , {useState } from 'react';

const FileInput = ({title, description, onChange}) => {
    return (
      <div className='inputReg'>
          <label class="block mb-2 text-[12px] font-PlusJakartaSans text-black " for="file_input">{title}</label>
          <input class="block w-full text-[12px] font-PlusJakartaSans text-black border border-gray-300 rounded-[5px] cursor-pointer bg-gray-50 focus:outline-none sm:max-w-[327px]" aria-describedby="file_input_help" id="file_input" type="file" onChange={onChange} accept="image/*,.pdf,.doc,.docx"/>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">{description}</p>
      </div>
      );
  };

  export {FileInput}