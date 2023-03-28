import React from 'react';
import { TextInput, Button } from '../../component';

const KirimApi = () => {
  return (
    <div>
        <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
          Cek Kesesuaian Datamu dengan Data Kami
        </p>
        <div className='mr-[200px] ml-[200px] mt-[40px] flex justify-center'>
          <div class="flex flex-col items-center justify-center">
            <TextInput className='w-[500px] bg-[#FAFAFA]'></TextInput>
            <Button className='bg-[#5DAFEF] w-[200px]'>Generate Key</Button>
            <div class="border-2 rounded-[15px] mt-[40px] pl-[40px] drop-shadow-md bg-lightblue h-[250px] w-[750px] flex flex-col items-start justify-center">
              <p className='text-[20px] mb-[10px] font-[700]'>Tutorial Pengiriman API</p>
              <p className='text-[16px]'>1. Lorem ipsum dolor sit amet</p>
              <p className='text-[16px]'>2. Lorem ipsum dolor sit amet</p>
              <p className='text-[16px]'>3. Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default KirimApi