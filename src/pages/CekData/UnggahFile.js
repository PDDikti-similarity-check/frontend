import React from "react";
import { FileInput, Button } from "../../component";
import { useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
// import SimilarityFile from "../../../public"

const UnggahFile = () => {
    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);
    const [excelData, setExcelData] = useState(null);

    const handleFile = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            let reader = new FileReader();
            reader.readAsArrayBuffer(selectedFile);
            reader.onload = (e) => {
                // console.log(e.target.result)
                setExcelFileError(null);
                setExcelFile(e.target.result);
            };
        } else {
            console.log("plz select your file");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: "buffer" });

            const worksheetName = workbook.SheetNames[0]; // Sheet
            const worksheet = workbook.Sheets[worksheetName];
            console.log(worksheet); // pentingnya disini
            //
            worksheet["A1"].w = worksheet["A1"].w
                .replaceAll(" ", "_")
                .toLowerCase();
            worksheet["B1"].w = worksheet["B1"].w
                .replaceAll(" ", "_")
                .toLowerCase();
            worksheet["C1"].w = worksheet["C1"].w
                .replaceAll(" ", "_")
                .toLowerCase();

            const data = XLSX.utils.sheet_to_json(worksheet);
            // data.map((item, index))

            for (let index = 0; index < data.length; index++) {
                data[index].tanggal_lahir = worksheet["B" + (index + 2).toString()].w;
            }
            // console.log(data);
            await axios
                .post("/api/feature/cek-kesesuaian", data)
                .then((response) => {
                
                    console.log(response.data);
                });

            // setExcelData(data);
        } else {
            setExcelData(null);
        }
    };

    return (
        <div>
            <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
                Cek Kesesuaian Datamu dengan Data Kami
            </p>
            <div className="mr-[200px] ml-[200px] mt-[40px] flex justify-center">
                <div class="border-2 rounded-[15px] drop-shadow-md bg-lightblue h-[300px] w-[750px] flex flex-col items-center justify-center">
                    <p className="text-[20px]">
                        Unggah datamu dalam bentuk .xls
                    </p>
                    <FileInput onChange={handleFile}></FileInput>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4 mt-4">
                <a
                    class="font-[500]  text-blue text-[20px] mt-[20px] underline cursor-pointer"
                    href="/Similarity Check - PDDikti.xlsx"
                    download
                >
                    Sesuaikan datamu dengan template ini!
                </a>
                <Button className="bg-[#5DAFEF]" onClick={handleSubmit}>
                    Cek
                </Button>
            </div>
        </div>
    );
};

export default UnggahFile;
