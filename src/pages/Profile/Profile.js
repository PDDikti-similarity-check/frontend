import React, { useState, useEffect } from "react";
import { DisTextInput } from "../../component";
import axios from "axios";

const Profile = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [namaorganisasi, setNamaOrganisasi] = useState("");
    const [telepon, setTelepon] = useState("");
    const [namapengguna, setNamaPengguna] = useState("");
    // const BASE_URL = "http://localhost:9091/";

    // useEffect(() => {
    //     let userId = localStorage.getItem("userId");
    //     axios.get("/user/retrieve-user/" + userId).then((response) => {
    //         console.log(response.data);
    //         setUser(response.data);
    //         setUsername(response.data.username);
    //         setEmail(response.data.email);
    //         setPassword(response.data.password);
    //         setNamaOrganisasi(response.data.organization_name);
    //         setTelepon(response.data.pic_phone_number);
    //         setNamaPengguna(response.data.pic_name);
    //         setShowLoading(false)
    //     });
    // }, []);

    // const getUser = async (e) => {
    //     const userData = {
    //         username: username,
    //         email: email,
    //         password: password,
    //         role: "USER",
    //         organization_name: namaorganisasi,
    //         pic_phone_number: telepon,
    //         pic_name: namapengguna,
    //     };
    //     console.log(userData)
    //     const response = await axios.post(BASE_URL + "api/register", userData)
    //     console.log(response)
    // };

    return (
        <>
        <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
            Profile
        </p>
        <div className="mt-[30px] flex justify-center">
            <div className="border-2 rounded-[15px] drop-shadow-md bg-white h-[380px] w-[850px]">
                <div className="flex justify-end mt-[30px] mr-[40px]">
                    <button className="bg-[#5DAFEF] w-[100px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 shadow shadow-sd text-[14px] font-bold text-white">
                        Edit
                    </button>
                </div>
                <div className="flex mt-[20px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                    <div className="w-80">
                        <DisTextInput
                            label="Nama Organisasi"
                            value={namaorganisasi}
                            className="w-[400px]"
                            
                        />
                    </div>
                    <div div className="w-80">
                        <DisTextInput
                            label="Nama Pengguna"
                            value={namapengguna}
                            className="w-[400px]"
                        />
                    </div>
                </div>
                <div className="flex mt-[10px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                    <div className="w-80">
                        <DisTextInput
                            label="Email"
                            value={email}
                            className="w-[400px]"
                        />
                    </div>
                    <div div className="w-80">
                        <DisTextInput
                            label="Nomor Telepon"
                            value={telepon}
                            className="w-[400px]"
                        />
                    </div>
                </div>
                <div className="flex mt-[10px] px-20 justify-between font-raleway text-[12px] text-primaryblack">
                    <div div className="w-80">
                        <DisTextInput
                            label="Username"
                            value={username}
                            className="w-[400px]"
                        />
                    </div>
                    <div div className="w-80">
                        <DisTextInput
                            label="Password"
                            type="password"
                            value="hahhaha"
                            className="w-[400px]"
                        />
                    </div>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default Profile;