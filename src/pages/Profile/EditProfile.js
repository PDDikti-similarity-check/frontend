import React, { useState, useEffect } from "react";
import { DisTextInput, TextInput } from "../../component";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const EditProfile = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [namaorganisasi, setNamaOrganisasi] = useState("");
    const [telepon, setTelepon] = useState("");
    const [namapengguna, setNamaPengguna] = useState("");
    let navigate = useNavigate();

    const BASE_URL = "http://localhost:9091/";

    useEffect(() => {
        let userId = localStorage.getItem("userId");
        axios.get(BASE_URL + "api/user/" + userId).then((response) => {
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
        console.log(userData)
        e.preventDefault();
        await axios
            .put("http://localhost:9091/api/user/update-profile/" + userId , userData)
            .then((response) => {
                window.location.reload(false);
                console.log(response);
            });
    };

    const handleNamaOrg = (event) => {
        // if (event.target.value !== "") {
        //     setNamaOrganisasi(event.target.value)
        // }
        setNamaOrganisasi(event.target.value);
    };
    const handleNamaPengguna = (event) => {
        // if (event.target.value !== "") {
        // }
        setNamaPengguna(event.target.value)
    };
    const handleEmail = (event) => {
        // if (event.target.value !== "") {
        // }
        setEmail(event.target.value)
    };
    const handleTelpon = (event) => {
        // if (event.target.value !== "") {
        // }
        setTelepon(event.target.value)
    };

    const handleEditPassword = () =>{
        navigate("/profile/edit/password");
    }

    return (
        <>
            <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
                Edit Profile
            </p>
            <div className="mt-[30px] flex justify-center">
                <div className="border-2 rounded-[15px] drop-shadow-md bg-white h-[330px] w-[850px]">
                    <div className="flex mt-[30px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                        <div className="w-80">
                            <TextInput
                                label="Nama Organisasi"
                                value={namaorganisasi}
                                onChange={handleNamaOrg}
                            />
                        </div>
                        <div div className="w-80">
                            <TextInput
                                label="Nama Pengguna"
                                value={namapengguna}
                                onChange={handleNamaPengguna}
                            />
                        </div>
                    </div>
                    <div className="flex mt-[10px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                        <div className="w-80">
                            <TextInput
                                label="Email"
                                value={email}
                                onChange={handleEmail}
                            />
                        </div>
                        <div div className="w-80">
                            <TextInput
                                label="Nomor Telepon"
                                value={telepon}
                                onChange={handleTelpon}
                            />
                        </div>
                    </div>
                    <div className="flex mt-[10px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                        <div div className="w-80">
                            <DisTextInput label="Username" value={username} />
                        </div>
                        <div div className="w-80">
                            <DisTextInput
                                label="Password"
                                type="password"
                                value="hahhaha"
                            />
                            <a className="text-blue" href="/profile/edit/password">
                                Change Password
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-[30px] space-x-4">
                <button className="border-[#5DAFEF] border-2 text-[#5DAFEF] w-[100px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 shadow shadow-sd text-[14px] font-bold"onClick={() => navigate(-1)}>
                    Batal
                </button>
                <button
                    className="bg-[#5DAFEF] w-[100px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 shadow shadow-sd text-[14px] font-bold text-white"
                    onClick={UpdateUser}
                >
                    Simpan
                </button>
            </div>
        </>
    );
};

export default EditProfile;