import React, { useState, useEffect } from "react";
import { TextInput, Button, DisTextInput } from "../../component";
import axios from "axios";

const KirimApi = () => {
    const [user, setUser] = useState("");
    const BASE_URL = "http://localhost:9091/";

    useEffect(() => {
        let userId = localStorage.getItem("userId");
        axios.get(BASE_URL + "api/user/" + userId).then((response) => {
            setUser(response.data);
        });
    }, []);
    console.log(user);

    const generateNewApiKey = async () => {
        axios
            .get(BASE_URL + "api/user/generate-api/" + user.id)
            .then((response) => {
                console.log(response);
                window.location.reload(false);
            });
    };
    return (
        <div>
            <p className="font-[700] flex justify-center text-[20px] mt-[20px]">
                Cek Kesesuaian Datamu dengan Data Kami
            </p>
            <div className="mr-[200px] ml-[200px] mt-[20px] flex justify-center">
                <div class="flex flex-col items-center justify-center">
                    <p className="font-[400] mb-4">
                        http://localhost:9091/api/cek-kesesuaian
                    </p>
                    <DisTextInput
                        value={user.api_key}
                        label=""
                        className="w-[600px] bg-[#FAFAFA]"
                    ></DisTextInput>
                    <Button
                        className="bg-[#5DAFEF] w-[200px]"
                        onClick={generateNewApiKey}
                    >
                        Generate Key
                    </Button>
                    <div class="border-2 rounded-[15px] mt-[40px] pl-[40px] drop-shadow-md bg-lightblue h-[250px] w-[750px] flex flex-col items-start justify-center">
                        <p className="text-[20px] mb-[10px] font-[700]">
                            Tutorial Pengiriman API
                        </p>
                        <p className="text-[16px]">
                            1. Lorem ipsum dolor sit amet
                        </p>
                        <p className="text-[16px]">
                            2. Lorem ipsum dolor sit amet
                        </p>
                        <p className="text-[16px]">
                            3. Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KirimApi;
