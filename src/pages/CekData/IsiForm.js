import React, { useState, useEffect } from "react";
import { Button, ReqTextInput } from "../../component";
import axios from "axios";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { Loader } from "../../component/Loader";


const IsiForm = () => {
    const [nama, setName] = useState("");
    const [ibu_kandung, setIbuKandung] = useState("");
    const [tanggal_lahir, setTanggalLahir] = useState("");
    const [showLoading, setShowLoading] = useState(false);


    const [errorNama, setErrorName] = useState(false);
    const [errorIbuKandung, setErrorIbuKandung] = useState(false);
    const [errorTanggalLahir, setErrorTanggalLahir] = useState(false);

    const handleIsiForm = async (e) => {
        e.preventDefault();
        if (nama.length == 0) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }
        if (ibu_kandung.length == 0) {
            setErrorIbuKandung(true);
        } else {
            setErrorIbuKandung(false);
        }
        if (tanggal_lahir.length == 0) {
            setErrorTanggalLahir(true);
        } else {
            setErrorTanggalLahir(false);
        }

        if (
            nama.length !== 0 &&
            ibu_kandung.length !== 0 &&
            tanggal_lahir.length !== 0
        ){
            setShowLoading(true);
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
        }
    };

    return (
        <>
        {showLoading ? <Loader /> : null}
        <div>
            <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
                Cek Kesesuaian Datamu dengan Data Kami
            </p>
            <div className="flex mt-[60px] w-full justify-center space-x-20 font-raleway text-[12px] text-primaryblack">
                <div>
                    <ReqTextInput
                        label="Nama Lengkap"
                        placeholder="Nama Lengkap"
                        className="w-[500px]"
                        value={nama}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errorNama
                        ? [
                            <div className="flex flex-row items-center space-x-2">
                                <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                <label className="text-danger-main">
                                    Field Nama Lengkap harus diisi
                                </label>
                            </div>
                            ]
                        : null}
                </div>
            </div>
            <div className="flex mt-[20px] w-full justify-center space-x-20 font-raleway text-[12px] text-primaryblack">
                <div>
                    <ReqTextInput
                        label="Ibu Kandung"
                        placeholder="Ibu Kandung"
                        className="w-[500px]"
                        value={ibu_kandung}
                        onChange={(e) => setIbuKandung(e.target.value)}
                    />
                    {errorIbuKandung
                        ? [
                            <div className="flex flex-row items-center space-x-2">
                                <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                <label className="text-danger-main">
                                    Field Ibu Kandung harus diisi
                                </label>
                            </div>
                            ]
                        : null}
                </div>
            </div>
            <div className="flex mt-[20px] w-full justify-center space-x-20 font-raleway text-[12px] text-primaryblack">
                <div>
                    <ReqTextInput
                        label="Tanggal Lahir"
                        placeholder="Tanggal Lahir"
                        className="w-[500px]"
                        type="date"
                        value={tanggal_lahir}
                        onChange={(e) => setTanggalLahir(e.target.value)}
                    />
                    {errorTanggalLahir
                        ? [
                            <div className="flex flex-row items-center space-x-2">
                                <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                <label className="text-danger-main">
                                    Field Tanggal Lahir harus diisi
                                </label>
                            </div>
                            ]
                        : null}
                </div>
            </div>
            <div className="flex justify-center items-center mt-[40px]">
                <Button className="bg-[#5DAFEF]" onClick={handleIsiForm}>
                    Cek
                </Button>
            </div>
        </div>
        </>
    );
};

export default IsiForm;
