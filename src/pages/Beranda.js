import React from 'react'

const Beranda = () => {
  return (
    <div>
        <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
          Cek kesesuaian data mahasiswa yang Anda miliki dengan data PDDikti!
        </p>
        <div className='mr-[200px] ml-[200px] mt-[60px]'>
          <div class="grid grid-cols-3 justify-items-center">
            <a href="/cekdata/unggahfile">
              <div className='border-2 rounded-[15px] drop-shadow-md bg-[#FBFCFF] h-[250px] w-[300px] flex justify-center pt-5'>Unggah CSV/XLS</div>
            </a>
            <a href="/cekdata/isiform">
              <div className='border-2 rounded-[15px] drop-shadow-md bg-[#FBFCFF] h-[250px] w-[300px] flex justify-center pt-5'>Isi Formulir</div>
            </a>
            <a href="/cekdata/kirimapi">
              <div className='border-2 rounded-[15px] drop-shadow-md bg-[#FBFCFF] h-[250px] w-[300px] flex justify-center pt-5'>Kirim API</div>
            </a>
          </div>
        </div>
    </div>

  )
}

export default Beranda