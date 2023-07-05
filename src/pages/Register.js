import React, { useState, useEffect } from "react";
import backgroundimg from "../others/bg-login.png";
import logo from "../others/logo.png";
import { ReqTextInput, TextInput } from "../component";
import axios from "axios";
import { Loader } from "../component/Loader";
import { InfoModalRegister, SuccessModalRegister, SuccessModalWarningEditPass, WarningModalEditPass } from "../component/Modal";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Register = () => {
    let navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [namaorganisasi, setNamaOrganisasi] = useState("");
    const [telepon, setTelepon] = useState("");
    const [namapengguna, setNamaPengguna] = useState("");
    const [passType, setPassType] = useState("password");
    const [seePassword, setSeePassword] = useState(false);

    const [errorUsername, setErrorUsername] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPasswordKosong, setErrorPasswordKosong] = useState(false);
    const [errorNamaorganisasi, setErrorNamaOrganisasi] = useState(false);
    const [errorTelepon, setErrorTelepon] = useState(false);
    const [errorNamapengguna, setErrorNamaPengguna] = useState(false);
    
    const [errorPass, setErrorPass] = useState(false);
    const [errorEmailType, setErrorEmailType] = useState(false);

    const [modalSimpan, setModalSimpan] = useState(false);
    const [modalSuksesSimpan, setModalSuksesSimpan] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    function handlePassType() {
        setSeePassword(!seePassword);
        if (seePassword == false) {
            setPassType("text");
        } else if (seePassword == true) {
            setPassType("password");
        }
    }

    let strongPassword = new RegExp(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    const postRegister = async (e) => {
        e.preventDefault(); 

        setErrorEmailType(false);
        setErrorPass(false);

        if (email.length == 0) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
            if (re.test(email) == false) {
                setErrorEmailType(true);
            } else {
                setErrorEmailType(false);
            }
        }

        if (namaorganisasi.length == 0) {
            setErrorNamaOrganisasi(true);
        } else {
            setErrorNamaOrganisasi(false);
        }
        if (telepon.length == 0) {
            setErrorTelepon(true);
        } else {
            setErrorTelepon(false);
        }
        if (namapengguna.length == 0) {
            setErrorNamaPengguna(true);
        } else {
            setErrorNamaPengguna(false);
        }
        if (username.length == 0) {
            setErrorUsername(true);
        } else {
            setErrorUsername(false);
        }
        if (password.length == 0) {
            setErrorPasswordKosong(true);
        } else {
            setErrorPasswordKosong(false);
            if (strongPassword.test(password) == false) {
                setErrorPass(true);
            } else {
                setErrorPass(false);
            }
        }

        if(
            email.length !== 0 &&
            password.length !== 0 &&
            username.length !== 0 &&
            namaorganisasi.length !== 0 &&
            namapengguna.length !== 0 &&
            telepon.length !== 0 &&
            strongPassword.test(password) == true &&
            re.test(email) == true
            ){
                setModalSimpan(true);
            }
    }

    const putUserData = async (e) => {
        setModalSimpan(false);
        setShowLoading(true);
        const userData = {
            username: username,
            email: email,
            password: password,
            role: "USER",
            organization_name: namaorganisasi,
            pic_phone_number: telepon,
            pic_name: namapengguna,
        };
        await axios
            .post("/api/register", userData)
            .then((response) => {
                setShowLoading(false);
                setModalSuksesSimpan(true);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <>
        {showLoading ? <Loader /> : null}
        {modalSimpan ? (
            <InfoModalRegister
                tittle="Buat Akun?"
                description1="Anda yakin ingin membuat akun?"
                rightbutton="Yakin"
                leftbutton="Batal"
                onClickRight={putUserData}
                onClickLeft={() => setModalSimpan(false)}
            />
        ) : null}
        {modalSuksesSimpan? (
            <SuccessModalRegister
                description1="Akun telah berhasil dibuat"
                rightbutton="Selesai"
                onClick={() => navigate('/login')}
            />
        ) : null}

        <div className="flex h-screen w-screen ">
            <img src={backgroundimg} className="h-full w-full" />
            <div className="absolute backdrop-blur-md bg-grey/70 h-full w-full"></div>
            <img src={logo} className="absolute top-8 left-8" />
            <form>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex flex-col border-2 rounded-[15px] bg-white h-[550px] w-[1000px] items-center justify-center">
                        <div className="flex mt-[40px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                            <div className="w-1/2">
                                <TextInput
                                    label="Nama Organisasi"
                                    placeholder="Nama Organisasi"
                                    className="w-[400px]"
                                    value={namaorganisasi}
                                    onChange={(event) =>
                                        setNamaOrganisasi(event.target.value)
                                    }
                                />
                                {errorNamaorganisasi
                                ? [
                                    <div className="flex flex-row items-center space-x-2">
                                        <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                        <label className="text-danger-main">
                                            Field Nama Organisasi harus diisi
                                        </label>
                                    </div>,
                                    ]
                                : null}
                            </div>
                            <div className="w-1/2">
                                <TextInput
                                    label="Nama Pengguna"
                                    placeholder="Nama Pengguna"
                                    className="w-[400px]"
                                    value={namapengguna}
                                    onChange={(event) =>
                                        setNamaPengguna(event.target.value)
                                    }
                                />
                                {errorNamapengguna
                                ? [
                                    <div className="flex flex-row items-center space-x-2">
                                        <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                        <label className="text-danger-main">
                                            Field Nama Pengguna harus diisi
                                        </label>
                                    </div>,
                                    ]
                                : null}
                            </div>
                        </div>
                        <div className="flex mt-[20px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                            <div className="w-1/2">
                                <TextInput
                                    label="Email"
                                    placeholder="Email"
                                    className="w-[400px]"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                                {errorEmail
                                ? [
                                    <div className="flex flex-row items-center space-x-2">
                                        <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                        <label className="text-danger-main">
                                            Field Email harus diisi
                                        </label>
                                    </div>
                                    ]
                                : null}
                                {errorEmailType
                                ? [
                                    <div className="flex flex-row items-center space-x-2">
                                        <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                        <label className="text-danger-main">
                                            Format email tidak sesuai
                                        </label>
                                    </div>
                                    ]
                                : null}
                            </div>
                            <div className="w-1/2">
                                <TextInput
                                    label="Nomor Telepon"
                                    placeholder="Nomor telepon"
                                    className="w-[400px]"
                                    type="number"
                                    value={telepon}
                                    onChange={(event) =>
                                        setTelepon(event.target.value)
                                    }
                                />
                                {errorTelepon
                                ? [
                                    <div className="flex flex-row items-center space-x-2">
                                        <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                        <label className="text-danger-main">
                                            Field Nomor Telpon harus diisi
                                        </label>
                                    </div>
                                    ]
                                : null}
                            </div>
                        </div>
                        <div className="flex mt-[20px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                            <div className="w-1/2">
                                <TextInput
                                    label="Username"
                                    placeholder="Username"
                                    className="w-[400px]"
                                    value={username}
                                    onChange={(event) =>
                                        setUsername(event.target.value)
                                    }
                                />
                                {errorUsername
                                ? [
                                    <div className="flex flex-row items-center space-x-2">
                                        <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                        <label className="text-danger-main">
                                            Field Username harus diisi
                                        </label>
                                    </div>
                                    ]
                                : null}
                            </div>
                            <div className="w-1/2">
                                <label className="font-raleway text-[14px]">
                                    <div className="flex items-center">
                                        Password
                                    </div>
                                </label>
                                
                                <div className="flex items-center rounded-[15px] w-[400px] font-raleway border border-gray-300 appearance-none mb-3 pr-2 leading-tight focus:outline-none focus:shadow-outline">
                                    <input
                                        type={passType}
                                        placeholder="Password"
                                        // required={true}
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        class="w-full pl-[10px] py-2.5 px-3 rounded-[15px] text-[12px] outline-none border-none focus:outline-none "
                                    />
                                    {seePassword ? (
                                        <div className="pl-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="#404040"
                                                class="bi bi-eye-fill"
                                                viewBox="0 0 16 16"
                                                onClick={handlePassType}
                                            >
                                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="pl-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="#404040"
                                                class="bi bi-eye-slash-fill"
                                                viewBox="0 0 16 16"
                                                onClick={handlePassType}
                                            >
                                                <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                {errorPasswordKosong
                                ? [
                                    <div className="flex flex-row items-center space-x-2">
                                        <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                        <label className="text-danger-main">
                                            Field Password harus diisi
                                        </label>
                                    </div>
                                    ]
                                : null}
                                {errorPass
                                ? [
                                    <div className="flex flex-row items-center space-x-2">
                                        <BsFillExclamationCircleFill className="text-danger-main w-[20px]"></BsFillExclamationCircleFill>
                                        <label className="text-danger-main">
                                            Password harus minimal 8 karakter serta
                                            kombinasi simbol, angka, huruf kecil, dan
                                            kapital
                                        </label>
                                    </div>
                                    ]
                                : null}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center mt-[40px]">
                            <button className="bg-[#5DAFEF] w-[300px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 drop-shadow-md text-m font-bold  text-white" 
                            onClick={postRegister}>
                                Daftar
                            </button>
                            <div className="flex flex-row justify-center items-center text-sm mt-[20px]">
                                <p>Sudah punya akun?</p>
                                <a href="/login" className="ml-2 text-blue">
                                    Masuk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
};

export default Register;
