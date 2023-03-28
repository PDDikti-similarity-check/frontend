import React from 'react'
import backgroundimg from "../others/bg-login.png";
import logo from "../others/logo.png";
import { TextInput } from '../component';

const Login = () => {
  return (
    <div className="flex h-screen w-screen " >
      <img src={backgroundimg} className='h-full w-full' />
      <div className='absolute backdrop-blur-md bg-grey/70 h-full w-full'></div>
      <img src={logo} className='absolute  top-8 left-8' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div class="border-2 rounded-[15px] bg-white h-[500px] w-[1000px]">
          <p className=' mt-[40px] flex justify-center font-raleway text-[24px] text-primaryblack font-[700]'>
            PANGKALAN DATA PENDIDIKAN TINGGI
          </p>
          <p className='flex justify-center font-raleway text-[20px] text-primaryblack font-[500]'>
            KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN
          </p>
          <div className="flex flex-col mt-[40px] justify-center items-center font-raleway text-[12px] text-primaryblack">
            <div >
              <TextInput
                  placeholder="Username"
                  className='w-[500px] rounded-[15px] text-[14px]'
              />
            </div>
            <div >
              <TextInput
                  placeholder="Password"
                  className='w-[500px] mt-[10px] rounded-[15px] text-[14px]'
              />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center mt-[40px]'>
            <button className='bg-[#5DAFEF] w-[300px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 drop-shadow-md text-[14px] font-bold text-white'>Sign In</button>
            <div className='flex flex-row justify-center items-center mt-[20px]'>
              <p>Belum punya akun?</p>
              <a href='/register' className='ml-2 text-blue'>Register di sini</a>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Login