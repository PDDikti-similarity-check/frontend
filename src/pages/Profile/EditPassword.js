import React, { useState, useEffect } from "react";
import { DisTextInput, TextInput } from "../../component";
import axios from "axios";

const EditPassword = () => {
    const [passwordBaru, setPasswordBaru] = useState("");
    const [passwordLama, setPasswordLama] = useState("");

    const [errorPassLama, setErrorPassLama] = useState(false);
    const [errorPassBaru, setErrorPassBaru] = useState(false);
    const [errorConfPassBaru, setErrorConfPassBaru] = useState(false);
    let strongPassword = new RegExp(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );

    // const BASE_URL = "http://localhost:9091/";
    const changePassword = async (e) => {
        e.preventDefault();
        if (
            !errorPassBaru &&
            !errorConfPassBaru &&
            !(passwordBaru === "") &&
            !(passwordLama === "")
        ) {
            let userId = localStorage.getItem("userId");
            const userPassword = {
                old_password: passwordLama,
                new_password: passwordBaru,
            };
            try {
                await axios
                    .post(
                        "http://localhost:9091/api/user/check-update-user-password/" +
                            userId,
                        userPassword
                    )
                    .then((response) => {
                        console.log(response.status);
                        window.location.reload(false);
                                // console.log(responseupdate);
                    });
            } catch (error) {
                console.log(error.response.status);
                if (error.response.status == 401) {
                    setErrorPassLama(true);
                }
                console.error(error);
            }
            // console.log(response.status)
        } else {
            setErrorPassBaru(true)
           
        }
    };

   

    const handlePassLama = (event) => {
        setPasswordLama(event.target.value);
        // if (event.target.value !== password) {

        //     setErrorPassLama(true)
        // }
        // else{
        //     setErrorPassLama(false)
        // }
    };
    const handlePassBaru = (event) => {
        if (strongPassword.test(event.target.value) == false) {
            setErrorPassBaru(true);
        } else {
            setErrorPassBaru(false);
            setPasswordBaru(event.target.value);
        }
    };
    const confPassBaru = (event) => {
        if (event.target.value !== passwordBaru) {
            setErrorConfPassBaru(true);
        } else {
            setErrorConfPassBaru(false);
        }
    };

    return (
        <>
            <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
                Edit Password
            </p>
            <div className="mt-[30px] flex justify-center">
                <div className="border-2 rounded-[15px] drop-shadow-md bg-white h-[330px] w-[850px]">
                    <div className="flex mt-[30px] px-20 justify-center font-raleway text-[12px] text-primaryblack">
                        <div className="w-80">
                            <TextInput
                                label="Password Lama"
                                placeholder="Password Lama"
                                onChange={handlePassLama}
                            />
                            {errorPassLama ? (
                                <label className="text-danger">
                                    Password tidak sesuai
                                </label>
                            ) : null}
                        </div>
                    </div>
                    <div className="flex mt-[10px] px-20 justify-center font-raleway text-[12px] text-primaryblack">
                        <div className="w-80">
                            <TextInput
                                label="Password Baru"
                                placeholder="Password Baru"
                                onChange={handlePassBaru}
                            />
                            {errorPassBaru ? (
                                <label className="text-danger">
                                    Password harus minimal 8 karakter serta
                                    kombinasi simbol, angka, huruf kecil, dan
                                    kapital
                                </label>
                            ) : null}
                        </div>
                    </div>
                    <div className="flex mt-[10px] px-20 justify-center font-raleway text-[12px] text-primaryblack">
                        <div div className="w-80">
                            <TextInput
                                label="Konfirmasi Password Baru"
                                placeholder="Konfirmasi Password Baru"
                                onChange={confPassBaru}
                            />
                            {errorConfPassBaru ? (
                                <label className="text-danger">
                                    Password tidak sesuai dengan yang baru
                                </label>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-[30px] space-x-4">
                <button className="border-[#5DAFEF] border-2 text-[#5DAFEF] w-[100px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 shadow shadow-sd text-[14px] font-bold text-white">
                    Batal
                </button>
                <button
                    className="bg-[#5DAFEF] w-[100px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 shadow shadow-sd text-[14px] font-bold text-white"
                    onClick={changePassword}
                >
                    Simpan
                </button>
            </div>
        </>
    );
};

export default EditPassword;
