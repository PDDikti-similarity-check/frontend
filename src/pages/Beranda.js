import React from 'react'

const Beranda = () => {
  return (
    <div>
        <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
          Cek kesesuaian data mahasiswa yang Anda miliki dengan data PDDikti!
        </p>
        <div className='mx-[150px] mt-[60px]'>
          <div class="grid grid-cols-1 gap-10 justify-items-center lg:flex lg:justify-center">
            <a href="/cekdata/unggahfile">
              <div className='border-2 rounded-[15px] drop-shadow-md bg-[#FBFCFF] h-[250px] w-[300px] flex justify-center pt-5 hover:bg-lightblue hover:border-b-blue hover:border-4 hover:text-blue items-center'>Unggah CSV/XLS</div>
            </a>
            <a href="/cekdata/isiform">
              <div className='border-2 rounded-[15px] drop-shadow-md bg-[#FBFCFF] h-[250px] w-[300px] flex justify-center pt-5  hover:bg-lightblue hover:border-b-blue hover:border-4 hover:text-blue  items-center'>Isi Formulir</div>
            </a>
            <a href="/cekdata/kirimapi">
              <div className='border-2 rounded-[15px] drop-shadow-md bg-[#FBFCFF] h-[250px] w-[300px] flex justify-center pt-5  hover:bg-lightblue hover:border-b-blue hover:border-4 hover:text-blue items-center'>Kirim API</div>
            </a>
          </div>
        </div>
    </div>

  )
}

export default Beranda