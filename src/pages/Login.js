import React, { useState, useEffect } from "react";
import backgroundimg from "../others/bg-login.png";
import logo from "../others/logo.png";
import { TextInput } from "../component";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsAt, BsLock } from "react-icons/bs";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();
    let navigate = useNavigate();

    const BASE_URL = "http://localhost:9091/";

    const postLogin = async (e) => {
        e.preventDefault(); 
        const userData = {
            username: username,
            password: password,
        };
        // const response = await axios.post(
        //     BASE_URL + "api/login",
        //     userData
        // );
        // console.log(response.data);
        // navigate("/");
        try {
            const response = await axios.post(BASE_URL + "api/login", userData);
            const user = response.data
            localStorage.setItem("userRole", user.role);
            localStorage.setItem("token", "ada");
            localStorage.setItem("userId", user.id);
            localStorage.setItem("username", user.username);
            navigate('/');
        } catch (error) {
            if (error.response.status == 401) {
                setError("Invalid Username or Password!");
            }
            console.error(error);
        }
    };

    return (
        <div className="flex h-screen w-screen ">
            <img src={backgroundimg} className="h-full w-full" />
            <div className="absolute backdrop-blur-md bg-grey/70 h-full w-full"></div>
            <img src={logo} className="absolute  top-8 left-8" />
            <form onSubmit={postLogin}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div class="border-2 rounded-[15px] bg-white h-[500px] w-[1000px]">
                        <p className=" mt-[40px] flex justify-center font-raleway text-[24px] text-primaryblack font-[700]">
                            PANGKALAN DATA PENDIDIKAN TINGGI
                        </p>
                        <p className="flex justify-center font-raleway text-[20px] text-primaryblack font-[500]">
                            KEMENTERIAN PENDIDIKAN DAN KEBUDAYAAN
                        </p>
                        <div className="flex flex-col mt-[40px] justify-center items-center font-raleway text-[12px] space-y-6">
                            <div className="flex justify-between items-center w-[450px] rounded-[15px] border border-gray-300 appearance-none ">
                                <input
                                    placeholder="Username"
                                    className="w-[500px] rounded-[15px] text-[14px] font-raleway text-[12px] w-full py-4 px-5 leading-tight focus:outline-[#2563eb] focus:outline-none focus:outline-offset-0 focus:outline-[1px]"
                                    value={username}
                                    onChange={(event) =>
                                        setUsername(event.target.value)
                                    }
                                />
                                <BsAt className="text-[20px] ml-5 mr-5 text-gray-500"></BsAt>
                            </div>                            
                            <div className="flex flex-col space-y-2">
                                <div className="flex justify-between items-center w-[450px] rounded-[15px] border border-gray-300 appearance-none ">
                                    <input
                                        placeholder="Password"
                                        className="w-[500px] rounded-[15px] text-[14px] font-raleway text-[12px] w-full py-4 px-5 leading-tight outline-none border-none focus:border-none focus:outline-none"
                                        value={password}
                                        type="password"
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                    />
                                    <BsLock className="text-[18px] ml-5 mr-5 text-gray-500"></BsLock>
                                </div>
                                <a className="text-[14px] text-blue cursor-pointer" onClick={() => navigate("/login/lupa-katasandi")}>
                                    Forgot Password
                                </a>
                            </div>
                            {error ? (
                            <div className="flex item-center justify-center">
                                <p className="text-sm text-danger">{error}</p>
                            </div>
                            ) : null}
                        </div>
                        <div className="flex flex-col justify-center items-center mt-[40px]">
                            <button
                                type={"submit"}
                                className="bg-[#5DAFEF] w-[300px] inline-flex justify-center rounded-[8px] py-2 hover:brightness-90 drop-shadow-md text-[14px] font-bold text-white"
                            >
                                Sign In
                            </button>
                            <div className="flex flex-row justify-center items-center mt-[20px]">
                                <p>Belum punya akun?</p>
                                <a href="/register" className="ml-2 text-blue">
                                    Register di sini
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
