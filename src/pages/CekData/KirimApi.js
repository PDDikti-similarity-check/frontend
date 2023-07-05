import React, { useState, useEffect } from "react";
import { TextInput, Button, DisTextInput } from "../../component";
import axios from "axios";

const KirimApi = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        let userId = localStorage.getItem("userId");
        axios.get("/api/user/" + userId).then((response) => {
            setUser(response.data);
        });
    }, []);
    console.log(user);

    const generateNewApiKey = async () => {
        axios
            .get("/api/user/generate-api/" + user.id)
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
            <div className=" mt-[20px] flex w-full justify-center">
                <div class="flex w-full flex-col items-center justify-center">
                    <p className="font-[400] mb-4">
                        http://localhost:9091/api/cek-kesesuaian
                    </p>
                    <DisTextInput
                        value={user.api_key}
                        label=""
                        className="w-[500px] bg-[#FAFAFA]"
                    ></DisTextInput>
                    <Button
                        className="bg-[#5DAFEF] w-[200px]"
                        onClick={generateNewApiKey}
                    >
                        Buat Kunci
                    </Button>
                    <div class="border-2 rounded-[15px] mt-[40px] pl-[40px] drop-shadow-md bg-lightblue h-[250px] w-[750px] flex flex-col items-start justify-center gap-y-5">
                        <p className="text-[20px] mb-[10px] font-[700]">
                            Tutorial Pengiriman API
                        </p>
                        <p className="text-[16px]">
                            1. Gunakan API di atas dengan method POST pada sistem anda
                        </p>
                        <p className="text-[16px]">
                            2. Buat Key dengan nama "API-KEY" pada header
                        </p>
                        <p className="text-[16px]">
                            3. Gunakan token di atas sebagai value untuk Key "API-KEY"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KirimApi;
