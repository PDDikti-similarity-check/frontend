import React, { useState, useEffect } from "react";
import { DisTextInput, TextInput } from "../../component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SuccessModalWarningEditProfile, WarningModalEditProfile } from "../../component/Modal";
import { Loader } from "../../component/Loader";
import { BsFillExclamationCircleFill } from "react-icons/bs";

const EditProfile = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [namaorganisasi, setNamaOrganisasi] = useState("");
    const [telepon, setTelepon] = useState("");
    const [namapengguna, setNamaPengguna] = useState("");
    let navigate = useNavigate();

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorNamaorganisasi, setErrorNamaOrganisasi] = useState(false);
    const [errorTelepon, setErrorTelepon] = useState(false);
    const [errorNamapengguna, setErrorNamaPengguna] = useState(false);
    const [errorEmailType, setErrorEmailType] = useState(false);

    const [modalSimpan, setModalSimpan] = useState(false);
    const [modalSuksesSimpan, setModalSuksesSimpan] = useState(false);
    const [modalKembali, setModalKembali] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    useEffect(() => {
        let userId = localStorage.getItem("userId");
        axios.get("/api/user/" + userId).then((response) => {
            console.log(response.data);
            setUsername(response.data.username);
            setEmail(response.data.email);
            setPassword(response.data.password);
            setNamaOrganisasi(response.data.organization_name);
            setTelepon(response.data.pic_phone_number);
            setNamaPengguna(response.data.pic_name);
        });
    }, []);

    const UpdateUser = async (e) => {
        e.preventDefault();
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
        
        if(
            email.length !== 0 &&
            namaorganisasi.length !== 0 &&
            telepon.length !== 0 &&
            namapengguna.length !== 0 
            ){
            setModalSimpan(true)
        }else{
            setModalSimpan(false);
        }
    };

    const putUserData = async (e) => {
        setModalSimpan(false);
        setShowLoading(true);
        let userId = localStorage.getItem("userId");
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
                .put("/api/user/update-profile/" + userId , userData)
                .then((response) => {
                    window.location.reload(false);
                    showLoading(false);
                    setModalSuksesSimpan(true);
                });
    }

    const handleNamaOrg = (event) => {
        setNamaOrganisasi(event.target.value);
    };
    const handleNamaPengguna = (event) => {
        setNamaPengguna(event.target.value)
    };
    const handleEmail = (event) => {
        setEmail(event.target.value)
    };

    return (
        <>
        {showLoading ? <Loader /> : null}
        {modalSimpan ? (
            <WarningModalEditProfile
                tittle="Simpan Perubahan?"
                description1="Anda yakin ingin menyimpan perubahan?"
                rightbutton="Yakin"
                leftbutton="Batal"
                onClickRight={putUserData}
                onClickLeft={() => setModalSimpan(false)}
            />
        ) : null}
        {modalSuksesSimpan? (
            <SuccessModalWarningEditProfile
                description1="Perubahan telah disimpan"
                rightbutton="Selesai"
                onClick={() =>  navigate('/profile')}
            />
        ) : null}
        {modalKembali ? (
            <WarningModalEditProfile
                tittle="Tinggalkan Halaman?"
                description1="Perubahanmu belum disimpan"
                rightbutton="Tinggalkan"
                leftbutton="Batal"
                onClickRight={() => navigate('/profile')}
                onClickLeft={() => setModalKembali(false)}
            />
        ) : null}
            <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
                Edit Profile
            </p>
            <div className="mt-[30px] flex justify-center">
                <div className="border-2 rounded-[15px] drop-shadow-md bg-white h-[360px] w-[850px]">
                    <div className="flex mt-[30px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                        <div className="w-80">
                            <TextInput
                                label="Nama Organisasi"
                                value={namaorganisasi}
                                onChange={handleNamaOrg}
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
                        <div div className="w-80">
                            <TextInput
                                label="Nama Pengguna"
                                value={namapengguna}
                                onChange={handleNamaPengguna}
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
                    <div className="flex mt-[10px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                        <div className="w-80">
                            <TextInput
                                label="Email"
                                value={email}
                                onChange={handleEmail}
                            />
                            {errorEmail
                            ? [
                                <div className="flex flex-row items-center space-x-2">
                                    <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                    <label className="text-danger-main">
                                        Field Email harus diisi
                                    </label>
                                </div>,
                                ]
                            : null}
                            {errorEmailType
                            ? [
                                <div className="flex flex-row items-center space-x-2">
                                    <BsFillExclamationCircleFill className="text-danger-main"></BsFillExclamationCircleFill>
                                    <label className="text-danger-main">
                                        Format email tidak sesuai
                                    </label>
                                </div>,
                                ]
                            : null}
                        </div>
                        <div div className="w-80">
                            <TextInput
                                label="Nomor Telepon"
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
                                </div>,
                                ]
                            : null}
                        </div>
                    </div>
                    <div className="flex mt-[10px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                        <div div className="w-80">
                            <DisTextInput 
                                label="Username" 
                                value={username} 
                                className="w-80"/>
                        </div>
                        <div div className="w-80">
                            <DisTextInput
                                label="Password"
                                type="password"
                                value="hahhaha"
                                className="w-80"/>
                            <a className="text-blue" href="/profile/edit/password">
                                Change Password
                            </a>
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
                    onClick={UpdateUser}
                >
                    Simpan
                </button>
            </div>
        </>
    );
};

export default EditProfile;