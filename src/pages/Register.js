import React from 'react'
import backgroundimg from "../others/bg-login.png";
import logo from "../others/logo.png";
import { ReqTextInput } from '../component';

const Register = () => {
  return (
    <div className="flex h-screen w-screen " >
      <img src={backgroundimg} className='h-full w-full' />
      <div className='absolute backdrop-blur-md bg-grey/70 h-full w-full'></div>
      <img src={logo} className='absolute  top-8 left-8' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div class="border-2 rounded-[15px] bg-white h-[500px] w-[1000px]">
          <div className="flex mt-[40px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
            <div >
              <ReqTextInput
                  label="Nama Organisasi:"
                  placeholder="Nama Organisasi"
                  className='w-[400px]'
              />
            </div>
            <div >
              <ReqTextInput
                  label="Nama Pengguna:"
                  placeholder="Nama Pengguna"
                  className='w-[400px]'
              />
            </div>
          </div>
          <div className="flex mt-[20px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
            <div >
              <ReqTextInput
                  label="Email:"
                  placeholder="Email"
                  className='w-[400px]'
              />
            </div>
            <div >
              <ReqTextInput
                  label="Nomor Telepon:"
                  placeholder="Nomor telepon"
                  className='w-[400px]'
              />
            </div>
          </div>
          <div className="flex mt-[20px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
            <div >
              <ReqTextInput
                  label="Username:"
                  placeholder="Username"
                  className='w-[400px]'
              />
            </div>
            <div >
              <ReqTextInput
                  label="Password:"
                  placeholder="Password"
                  className='w-[400px]'
              />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center mt-[40px]'>
            <button className='bg-[#5DAFEF] w-[300px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 drop-shadow-md text-[14px] font-bold text-white'>Register</button>
            <div className='flex flex-row justify-center items-center mt-[20px]'>
              <p>Sudah punya akun?</p>
              <a href='/login' className='ml-2 text-blue'>Login</a>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Register