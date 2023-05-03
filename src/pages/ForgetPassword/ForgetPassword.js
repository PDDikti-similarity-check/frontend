import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const LupaPassword = () => {
    const params = useParams();
    const BASE_URL = "http://localhost:9091/";
    const [ispermitted, setPerimitted] = useState(false)
    const [user, setUser] = useState([])
    console.log(params.token);

    useEffect(() => {
        axios.get(BASE_URL + "validate-token-page/" + params.token).then((response) => {
            console.log(response.data);
            if(response.data.id != 0){
                setPerimitted(true)
                setUser(response.data)
            }
        });
    }, []);

    return (
        <div>
            {ispermitted ? (
                <p className="font-[700] flex justify-center text-[20px] mt-[20px]">
                    Page Ganti Password 
                </p>
            ) : (
                <p className="font-[700] flex justify-center text-[20px] mt-[20px]">
                    Token untuk membuka page tidak valid/habis
                </p>
            )}
        </div>
    );
};

export default LupaPassword;
