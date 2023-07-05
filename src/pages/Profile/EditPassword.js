import React, { useState, useEffect } from "react";
import { DisTextInput, TextInput } from "../../component";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "../../component/Loader";
import { SuccessModalWarningEditPass, WarningModalEditPass } from "../../component/Modal";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const EditPassword = () => {
    const [passwordBaru, setPasswordBaru] = useState("");
    const [passwordKonfirmasi, setPasswordKonfirmasi] = useState("");
    const [passwordLama, setPasswordLama] = useState("");

    const [errorPassLama, setErrorPassLama] = useState(false);
    const [errorPassBaru, setErrorPassBaru] = useState(false);
    const [errorConfPassBaru, setErrorConfPassBaru] = useState(false);

    const [errorPassLamaKosong, setErrorPassLamaKosong] = useState(false);
    const [errorPassBaruKosong, setErrorPassBaruKosong] = useState(false);
    const [errorKonfKosong, setErrorkonfKosong] = useState(false);

    const [modalSimpan, setModalSimpan] = useState(false);
    const [modalSuksesSimpan, setModalSuksesSimpan] = useState(false);
    const [modalKembali, setModalKembali] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    let strongPassword = new RegExp(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );
    let navigate = useNavigate();

    const changePassword = async (e) => {
        e.preventDefault();

        setErrorPassBaru(false);
        setErrorConfPassBaru(false);

        if (passwordLama.length == 0) {
            setErrorPassLamaKosong(true);
        } else {
            setErrorPassLamaKosong(false);
        }

        if (passwordBaru.length == 0) {
            setErrorPassBaruKosong(true);
        } else {
            setErrorPassBaruKosong(false);
            if (strongPassword.test(passwordBaru) == false) {
                setErrorPassBaru(true);
            } else {
                setErrorPassBaru(false);
            }
        }
        if (passwordKonfirmasi.length == 0) {
            setErrorkonfKosong(true);
        } else {
            setErrorkonfKosong(false);
            if (passwordKonfirmasi !== passwordBaru) {
                setErrorConfPassBaru(true);
            } else {
                setErrorConfPassBaru(false);
            }
        }

        if (
            passwordLama.length !== 0 &&
            passwordBaru.length !== 0 &&
            passwordKonfirmasi.length !== 0 &&
            strongPassword.test(passwordBaru) == true && 
            passwordKonfirmasi === passwordBaru
            ){
                setModalSimpan(true);
        }
    };


    const putUserData = async (e) => {
        setModalSimpan(false);
        setShowLoading(true);
        let userId = localStorage.getItem("userId");
        const userPassword = {
            old_password: passwordLama,
            new_password: passwordBaru,
        };
        try {
            await axios
                .post(
                    "/api/user/check-update-user-password/" +
                        userId,
                    userPassword
                )
                .then((response) => {
                    setShowLoading(false);
                    setModalSuksesSimpan(true);
                });
        } catch (error) {
            console.log(error.response.status);
            if (error.response.status == 401) {
                setShowLoading(false);
                setErrorPassLama(true);
            }
            console.error(error);
        }
    }

    const handlePassLama = (event) => {
        setPasswordLama(event.target.value);
    };

    const handlePassBaru = (event) => {
        setPasswordBaru(event.target.value);
    };
    const confPassBaru = (event) => {
        setPasswordKonfirmasi(event.target.value);
    };

    return (
        <>
        {showLoading ? <Loader /> : null}
        {modalSimpan ? (
            <WarningModalEditPass
                tittle="Ubah Kata Sandi?"
                description1="Anda yakin ingin mengubah kata sandi?"
                rightbutton="Yakin"
                leftbutton="Batal"
                onClickRight={putUserData}
                onClickLeft={() => setModalSimpan(false)}
            />
        ) : null}
        {modalSuksesSimpan? (
            <SuccessModalWarningEditPass
                description1="Kata sandi anda telah diubah"
                rightbutton="Selesai"
                onClick={() => navigate('/profile')}
            />
        ) : null}
        {modalKembali ? (
            <WarningModalEditPass
                tittle="Tinggalkan Halaman?"
                description1="Perubahanmu belum disimpan"
                rightbutton="Tinggalkan"
                leftbutton="Batal"
                onClickRight={() => navigate('/profile')}
                onClickLeft={() => setModalKembali(false)}
            />
        ) : null}
            <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
                Edit Password
            </p>
            <div className="mt-[30px] flex justify-center">
                <div className="border-2 rounded-[15px] drop-shadow-md bg-white h-[360px] w-[850px]">
                    <div className="flex mt-[30px] px-20 justify-center font-raleway text-[12px] text-primaryblack">
                        <div className="w-80">
                            <TextInput
                                label="Password Lama"
                                placeholder="Password Lama"
                                onChange={handlePassLama}
                            />
                            {errorPassLamaKosong
                            ? [
                                <div className="flex flex-row items-center space-x-2">
                                    <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                    <label className="text-danger-main">
                                        Field Password Lama harus diisi
                                    </label>
                                </div>,
                                ]
                            : null}
                            {errorPassLama
                            ? [
                                <div className="flex flex-row items-center space-x-2">
                                    <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                    <label className="text-danger-main">
                                        Password lama tidak sesuai
                                    </label>
                                </div>,
                                ]
                            : null}
                        </div>
                    </div>
                    <div className="flex mt-[10px] px-20 justify-center font-raleway text-[12px] text-primaryblack">
                        <div className="w-80">
                            <TextInput
                                label="Password Baru"
                                placeholder="Password Baru"
                                onChange={handlePassBaru}
                            />
                            {errorPassBaruKosong
                            ? [
                                <div className="flex flex-row items-center space-x-2">
                                    <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                    <label className="text-danger-main">
                                        Field Password Baru harus diisi
                                    </label>
                                </div>,
                                ]
                            : null}
                            {errorPassBaru
                            ? [
                                <div className="flex flex-row items-center space-x-2">
                                    <BsFillExclamationCircleFill className="text-danger-main w-[20px]"></BsFillExclamationCircleFill>
                                    <label className="text-danger-main">
                                        Password harus minimal 8 karakter serta
                                        kombinasi simbol, angka, huruf kecil, dan
                                        kapital
                                    </label>
                                </div>,
                                ]
                            : null}
                        </div>
                    </div>
                    <div className="flex mt-[10px] px-20 justify-center font-raleway text-[12px] text-primaryblack">
                        <div div className="w-80">
                            <TextInput
                                label="Konfirmasi Password Baru"
                                placeholder="Konfirmasi Password Baru"
                                onChange={confPassBaru}
                            />
                            {errorKonfKosong
                            ? [
                                <div className="flex flex-row items-center space-x-2">
                                    <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                    <label className="text-danger-main">
                                        Field Password Baru harus diisi
                                    </label>
                                </div>,
                                ]
                            : null}
                            {errorConfPassBaru
                            ? [
                                <div className="flex flex-row items-center space-x-2">
                                    <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                    <label className="text-danger-main">
                                        Password tidak sesuai dengan yang baru
                                    </label>
                                </div>,
                                ]
                            : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-[30px] space-x-4">
                <button className="border-[#5DAFEF] border text-[#5DAFEF] w-[100px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 shadow shadow-sd text-[14px] " 
                onClick={() => setModalKembali(true)}>
                    Batal
                </button>
                <button
                    className="bg-[#5DAFEF] w-[100px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 shadow shadow-sd text-[14px] text-white"
                    onClick={changePassword}
                >
                    Simpan
                </button>
            </div>
        </>
    );
};

export default EditPassword;
