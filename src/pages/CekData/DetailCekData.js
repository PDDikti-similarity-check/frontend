import React, { useEffect, useState } from "react";
import Table, { ActionButtons } from "./TabelDetailCekData";
import axios from "axios";
// import { Loader } from "../../../components";
// import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { Button } from "../../component";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import CanvasJSReact from "@canvasjs/react-charts";

const getData = () => {
    const data = [
        {
            NamaMahasiswa: "Magnolia Fayza",
            Nim_Npm: "2006470608",
            NamaLembaga: "Universitas Indonesia",
            Prodi: "Pendidikan Kedokteran",
            Alamat: "Jalan Margonda Raya Nomor 100, Depok, Jawa Barat, 16431",
            Presentase_Similaritas: "91%",
        },
        {
            NamaMahasiswa: "Magnolia Fayza Magnolia Fayza",
            Nim_Npm: "2006470608",
            NamaLembaga: "Universitas Indonesia",
            Prodi: "Sistem Informasi",
            Alamat: "Jalan Margonda Raya Nomor 100, Depok, Jawa Barat, 16431",
            Presentase_Similaritas: "100%",
        },
        {
            NamaMahasiswa: "Magnolia Fayza",
            Nim_Npm: "2006470608",
            NamaLembaga: "Universitas Indonesia",
            Prodi: "Pendidikan Kedokteran",
            Alamat: "Jalan Margonda Raya Nomor 100, Depok, Jawa Barat, 16431",
            Presentase_Similaritas: "91%",
        },
        {
            NamaMahasiswa: "Magnolia Fayza",
            Nim_Npm: "2006470608",
            NamaLembaga: "Universitas Indonesia",
            Prodi: "Pendidikan Kedokteran",
            Alamat: "Jalan Margonda Raya Nomor 100, Depok, Jawa Barat, 16431",
            Presentase_Similaritas: "91%",
        },
    ];
    return [...data, ...data];
};

function DetailCekData() {
    const [listKategori, setListKategori] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const token = localStorage.getItem("token");
    // const { decodedToken, isExpired } = useJwt(token);
    let navigate = useNavigate();

    // useEffect(() => {
    //     let jwtToken = localStorage.getItem("token");
    //     let config = {
    //         headers: {
    //             Authorization: "Bearer " + jwtToken,
    //         },
    //     };
    //     axios
    //         .get("/category/retrieve-categories", config)
    //         .then((response) => {
    //             setListKategori(response.data);
    //             setShowLoading(false);
    //         })
    //         .catch(function (error) {
    //             console.error(error);
    //         });
    // }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "Nama",
                accessor: "nama",
            },
            {
                Header: "Tanggal Lahir",
                accessor: "tanggal_lahir",
            },
            {
                Header: "Ibu Kandung",
                accessor: "ibu_kandung",
            },
        ],
        []
    );

    const data = React.useMemo(() => getData(), []);
    const [namaLengkap, setNamaLengkap] = useState("Magnolia Fayza");
    const [tanggal_lahir, setTanggalLahir] = useState("20/09/2001");
    const [ibu_kandung, setIbuKandung] = useState("Ayu");

    return (
        <>
            {/* {showLoading ? <Loader /> : null} */}
            <div className="h-screen motion-safe:animate-fade-in-up px-4 sm:px-6 lg:px-10 pt-4">
                <a
                    className="cursor-pointer text-xl font-bold text-[#5DAFEF]"
                    onClick={() => navigate(-1)}
                >
                    {" "}
                    {"< Kembali "}
                </a>
                <div className="mx-12 mt-8 space-y-3">
                    <p className="text-l font-bold">Data Target</p>
                    <div className="space-y-3">
                        <div className="flex flex-row">
                            <p>Nama</p>
                            <p className="pl-4 pr-2">:</p>
                            <p>{namaLengkap}</p>
                        </div>
                        <div className="flex flex-row">
                            <p>Tanggal Lahir</p>
                            <p className="pl-[52px] pr-2">:</p>
                            <p>{tanggal_lahir}</p>
                        </div>
                        <div className="flex flex-row">
                            <p>Ibu Kandung</p>
                            <p className="pl-[10px] pr-2">:</p>
                            <p>{ibu_kandung}</p>
                        </div>
                    </div>
                </div>

                <div className="mx-12 mt-8 space-y-3">
                    <p className="text-l font-bold">Data Serupa</p>
                    <Table columns={columns} data={data} />
                </div>
            </div>
        </>
    );
}

export default DetailCekData;
