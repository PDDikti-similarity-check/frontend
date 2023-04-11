import React from 'react'
import unggahfile from "../others/a.jpg";
import isiform from "../others/b.jpg";
import kirimapi from "../others/c.jpg";



const Beranda = () => {
  return (
    <div>
        <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
          Cek kesesuaian data mahasiswa yang Anda miliki dengan data PDDikti!
        </p>
        <div className='mx-[150px] mt-[60px]'>
          <div class="grid grid-cols-1 gap-10 justify-items-center lg:flex lg:justify-center">
            <a href="/cekdata/unggahfile">
              <div className='border-2 rounded-[15px] drop-shadow-md bg-[#FBFCFF] h-[270px] w-[300px] flex flex-col items-center pt-5 hover:border-b-blue hover:border-4 hover:text-blue'>
                <img src={unggahfile} className="w-[150px]" />
                <span className='items-start font-raleway px-6 pt-3'>
                  <p className='font-bold text-[14px]'>
                    Unggah CSV/XLS
                  </p>
                  <p className='pt-2 text-[12px]'>
                    Cek kesesuaian datamu dengan mengunggah file data mahasiswa yang kamu miliki dalam bentuk CSV/XLS
                  </p>
                </span>
              </div>
            </a>
            <a href="/cekdata/isiform">
              <div className='border-2 rounded-[15px] drop-shadow-md bg-[#FBFCFF] h-[270px] w-[300px] flex flex-col items-center pt-5 hover:border-b-blue hover:border-4 hover:text-blue'>
                <img src={isiform} className="w-[160px]" />
                <span className='font-raleway px-6 pt-3'>
                  <p className='font-bold text-[14px]'>
                    Isi Formulir
                  </p>
                  <p className='pt-2 text-[12px]'>
                  Cek kesesuaian datamu dengan mengisi form mengenai satu mahasiswa yang kamu cari
                  </p>
                </span>
              </div>
            </a>
            <a href="/cekdata/kirimapi">
              <div className='border-2 rounded-[15px] drop-shadow-md bg-[#FBFCFF] h-[270px] w-[300px] flex flex-col items-center pt-5 hover:border-b-blue hover:border-4 hover:text-blue'>
                <img src={kirimapi} className="w-[105px]" />
                <span className='font-raleway px-6 pt-3'>
                  <p className='font-bold text-[14px]'>
                    Kirim API
                  </p>
                  <p className='pt-2 text-[12px]'>
                    Cek kesesuaian datamu dengan cara mengirimkan API
                  </p>
                </span>
              </div>
            </a>
          </div>
        </div>
    </div>

  )
}

export default Beranda