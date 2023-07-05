import React, { useState, useEffect } from "react";
import { DisTextInput } from "../../component";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [namaorganisasi, setNamaOrganisasi] = useState("");
    const [telepon, setTelepon] = useState("");
    const [namapengguna, setNamaPengguna] = useState("");
   
    let navigate = useNavigate();

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

    const handleEdit = () =>{
        navigate("/profile/edit");
    }

    return (
        <>
        <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
            Profile
        </p>
        <div className="mt-[30px] flex justify-center">
            <div className="border-2 rounded-[15px] drop-shadow-md bg-white h-[380px] w-[850px]">
                <div className="flex justify-end mt-[30px] mr-[40px]">
                    <button className="bg-[#5DAFEF] w-[100px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 shadow shadow-sd text-[14px] text-white" onClick={handleEdit}>
                        Ubah Profil
                    </button>
                </div>
                <div className="flex mt-[20px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                    <div className="w-80">
                        <DisTextInput
                            label="Nama Organisasi"
                            value={namaorganisasi}
                            className="w-80"
                            
                        />
                    </div>
                    <div div className="w-80">
                        <DisTextInput
                            label="Nama Pengguna"
                            value={namapengguna}
                            className="w-80"
                        />
                    </div>
                </div>
                <div className="flex mt-[10px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                    <div className="w-80">
                        <DisTextInput
                            label="Email"
                            value={email}
                            className="w-80"
                        />
                    </div>
                    <div div className="w-80">
                        <DisTextInput
                            label="Nomor Telepon"
                            value={telepon}
                            className="w-80"
                        />
                    </div>
                </div>
                <div className="flex mt-[10px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                    <div div className="w-80">
                        <DisTextInput
                            label="Username"
                            value={username}
                            className="w-80"
                        />
                    </div>
                    <div div className="w-80">
                        <DisTextInput
                            label="Password"
                            type="password"
                            value={password.slice(0,8)}
                            className="w-80"
                        />
                    </div>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default Profile;