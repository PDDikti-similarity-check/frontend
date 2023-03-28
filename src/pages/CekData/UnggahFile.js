import React from 'react';
import { FileInput, Button } from '../../component';

const UnggahFile = () => {
  return (
    <div>
        <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
          Cek Kesesuaian Datamu dengan Data Kami
        </p>
        <div className='mr-[200px] ml-[200px] mt-[40px] flex justify-center'>
          <div class="border-2 rounded-[15px] drop-shadow-md bg-lightblue h-[300px] w-[750px] flex flex-col items-center justify-center">
            <p className='text-[20px]'>Unggah datamu dalam bentuk csv/xls</p>
            <FileInput></FileInput>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-y-4 mt-4'>
          <p class="font-[500]  text-blue text-[20px] mt-[20px] underline">
            Sesuaikan datamu dengan template ini!
          </p>
          <Button className='bg-[#5DAFEF]'>Cek</Button>
        </div>
    </div>
  )
}

export default UnggahFile