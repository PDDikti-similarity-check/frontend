import React, { useState, useEffect } from "react";
import { Button, ReqTextInput } from "../../component";
import axios from "axios";

const IsiForm = () => {
    const [nama, setName] = useState("");
    const [ibu_kandung, setIbuKandung] = useState("");
    const [tanggal_lahir, setTanggalLahir] = useState("");

    const handleIsiForm = async () => {
        await axios
            .post("/api/feature/cek-kesesuaian", [
                {
                    nama: nama,
                    ibu_kandung: ibu_kandung,
                    tanggal_lahir: tanggal_lahir,
                },
            ])
            .then((response) => {
                console.log(response.data);
            });
    };

    return (
        <div>
            <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
                Cek Kesesuaian Datamu dengan Data Kami
            </p>
            <div className="flex mt-[60px] w-full justify-center space-x-20 font-raleway text-[12px] text-primaryblack">
                <div>
                    <ReqTextInput
                        label="Nama:"
                        placeholder="Nama"
                        className="w-[500px]"
                        value={nama}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <ReqTextInput
                        label="Ibu Kandung:"
                        placeholder="Ibu Kandung"
                        className="w-[500px]"
                        value={ibu_kandung}
                        onChange={(e) => setIbuKandung(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex mt-[20px] w-[1100px] justify-center space-x-20 font-raleway text-[12px] text-primaryblack">
                <div>
                    <ReqTextInput
                        label="Tanggal Lahir"
                        placeholder="Tanggal Lahir"
                        className="w-[500px]"
                        value={tanggal_lahir}
                        onChange={(e) => setTanggalLahir(e.target.value)}
                    />
                </div>
                <div className="hidden">
                    <ReqTextInput
                        label=""
                        placeholder=""
                        className="w-[500px]"
                    />
                </div>
            </div>
            <div className="flex justify-center items-center mt-[40px]">
                <Button className="bg-[#5DAFEF]" onClick={handleIsiForm}>
                    Cek
                </Button>
            </div>
        </div>
    );
};

export default IsiForm;
