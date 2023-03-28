import  React , {useState } from 'react';

const FileInput = ({title, description, onChange}) => {
    return (
      <div className='inputReg'>
          <label class="block mb-2 text-[12px] font-raleway text-black " for="file_input">{title}</label>
          <input class="block w-[400px] text-[14px] font-raleway text-black border border-gray-500 rounded-[10px] cursor-pointer focus:outline-none sm:max-w-[400px]" aria-describedby="file_input_help" id="file_input" type="file" onChange={onChange} accept=".csv,.xls"/>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">{description}</p>
      </div>
      );
  };

  export {FileInput}