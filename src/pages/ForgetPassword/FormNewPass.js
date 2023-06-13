import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import backgroundimg from "../../others/bg-login.png";
import logo from "../../others/logo.png";
import { TextInput } from "../../component";
import { useNavigate } from "react-router-dom";
import { BsAt, BsLock } from "react-icons/bs";

const FormNewPass = () => {
    const [passwordBaru, setPasswordBaru] = useState("");
    const [confPasswordBaru, setConfPasswordBaru] = useState("");

    const [errorPassBaru, setErrorPassBaru] = useState(false);
    const [errorConfPassBaru, setErrorConfPassBaru] = useState(false);
    let strongPassword = new RegExp(
        "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
    );

    let navigate = useNavigate();

    const params = useParams();
    const [ispermitted, setPerimitted] = useState(false);
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios
            .get("/validate-token-page/" + params.token)
            .then((response) => {
                console.log(response.data);
                if (response.data.id != 0) {
                    console.log("masuk");
                    setPerimitted(true);
                    setUser(response.data);
                }
            });
    }, []);

    const handleNewPass = async (e) => {
        e.preventDefault();

        if (strongPassword.test(passwordBaru) == false) {
            setErrorPassBaru(true);
        } else {
            setErrorPassBaru(false);
            setPasswordBaru(passwordBaru);
            if (confPasswordBaru !== passwordBaru) {
                setErrorConfPassBaru(true);
            } else {
                setErrorConfPassBaru(false);
                const userData = {
                    new_password: passwordBaru,
                    page_token: params.token,
                };

                await axios
                    .post("/update-password", userData)
                    .then((response) => {
                        navigate("/");
                    });
            }
        }
    };

    return (
        <div className="flex h-screen w-screen ">
            {ispermitted ? (
                <img src={backgroundimg} className="h-full w-full" />
            ) : null}
            {ispermitted ? (
                <div className="absolute backdrop-blur-md bg-grey/70 h-full w-full"></div>
            ) : null}
            {ispermitted ? (
                <img src={logo} className="absolute  top-8 left-8" />
            ) : null}
            {ispermitted ? (
                <form>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div class="flex flex-col items-center border-2 rounded-[15px] bg-white h-[500px] w-[1000px]">
                            <p className=" mt-[40px] flex justify-center font-raleway text-[24px] text-[#333333] font-[700]">
                                Masukkan Kata Sandi Baru
                            </p>
                            <div className="flex flex-col mt-[30px] font-raleway text-[12px] space-y-3">
                                <label className="font-raleway text-[14px] font-[500]">
                                    Kata Sandi Baru
                                </label>
                                <div className="flex justify-between items-center w-[500px] rounded-[15px] border border-gray-300 appearance-none ">
                                    <input
                                        placeholder="Kata Sandi Baru"
                                        className="w-[500px] rounded-[15px] text-[14px] font-raleway text-[12px] w-full py-4 px-5 leading-tight border-none focus:outline-[#2563eb] focus:outline-none focus:outline-offset-0 focus:outline-[1px]"
                                        value={passwordBaru}
                                        // type="password"
                                        onChange={(event) =>
                                            setPasswordBaru(event.target.value)
                                        }
                                    />
                                    <BsLock className="text-[20px] ml-5 mr-5 text-gray-500" />
                                </div>
                                {errorPassBaru ? (
                                    <div>
                                        <p className="text-sm text-danger w-[500px]">
                                            Password harus minimal 8 karakter
                                            serta kombinasi simbol, angka, huruf
                                            kecil, dan kapital
                                        </p>
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col mt-[20px] font-raleway text-[12px] space-y-3">
                                <label className="font-raleway text-[14px] font-[500]">
                                    Konfirmasi Kata Sandi Baru
                                </label>
                                <div className="flex justify-between items-center w-[500px] rounded-[15px] border border-gray-300 appearance-none ">
                                    <input
                                        placeholder="Konfirmasi Kata Sandi Baru"
                                        className="w-[500px] rounded-[15px] text-[14px] font-raleway text-[12px] w-full py-4 px-5 leading-tight border-none focus:outline-[#2563eb] focus:outline-none focus:outline-offset-0 focus:outline-[1px]"
                                        value={confPasswordBaru}
                                        // type="password"
                                        onChange={(event) =>
                                            setConfPasswordBaru(
                                                event.target.value
                                            )
                                        }
                                    />
                                    <BsLock className="text-[20px] ml-5 mr-5 text-gray-500" />
                                </div>
                                {errorConfPassBaru ? (
                                    <div>
                                        <p className="text-sm text-danger w-[500px]">
                                            {" "}
                                            Password tidak sesuai dengan yang
                                            baru
                                        </p>
                                    </div>
                                ) : null}
                            </div>

                            <div className="flex flex-col justify-center items-center mt-[20px]">
                                <button
                                    onClick={handleNewPass}
                                    className="bg-[#5DAFEF] w-[300px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 drop-shadow-md text-[14px] font-bold text-white"
                                >
                                    Simpan
                                </button>
                                <div className="flex flex-row justify-center items-center mt-[20px]">
                                    <a
                                        className="ml-2 text-blue cursor-pointer"
                                        onClick={() => navigate("/login")}
                                    >
                                        Batal
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <p className="font-[700] flex justify-center text-[20px] mt-[20px] w-full">
                    Token untuk membuka page tidak valid
                </p>
            )}
        </div>
    );
};

export default FormNewPass;
