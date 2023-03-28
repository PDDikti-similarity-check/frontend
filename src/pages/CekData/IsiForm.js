import React from 'react'
import { Button, ReqTextInput } from '../../component';

const IsiForm = () => {
  return (
    <div>
      <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
        Cek Kesesuaian Datamu dengan Data Kami
      </p>
      <div className="flex mt-[60px] w-full justify-center space-x-20 font-raleway text-[12px] text-primaryblack">
        <div >
          <ReqTextInput
              label="Nama Lengkap:"
              placeholder="Nama Lengkap"
              className='w-[500px]'
          />
        </div>
        <div >
          <ReqTextInput
              label="Nama Lembaga:"
              placeholder="Nama Lembaga"
              className='w-[500px]'
          />
        </div>
      </div>
      <div className="flex mt-[20px] w-full justify-center space-x-20 font-raleway text-[12px] text-primaryblack">
        <div >
          <ReqTextInput
              label="NIM/NPM:"
              placeholder="NIM/NMP"
              className='w-[500px]'
          />
        </div>
        <div >
          <ReqTextInput
              label="Prodi:"
              placeholder="Prodi"
              className='w-[500px]'
          />
        </div>
      </div>
      <div className="flex mt-[20px] w-full justify-center space-x-20 font-raleway text-[12px] text-primaryblack">
        <div >
          <ReqTextInput
              label="Alamat:"
              placeholder="Alamat"
              className='w-[1080px] h-[80px]'
          />
        </div>
      </div>
      <div className='flex justify-center items-center mt-[40px]'>
        <Button className='bg-[#5DAFEF]'>Cek</Button>
      </div>
    </div>
  )
}

export default IsiForm