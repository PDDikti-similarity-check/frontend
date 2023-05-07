import React from "react";
import { FileInput, Button } from "../../component";
import { useState } from "react";
import * as XLSX from "xlsx";

const UnggahFile = () => {
    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);
    const [excelData, setExcelData] = useState(null);
    const downloadTemplate = () => {
        // using Java Script method to get PDF file
        fetch("Similarity Check - PDDikti.xlsx").then((response) => {
            response.blob().then((blob) => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "Similarity Check - PDDikti.xlsx";
                alink.click();
            });
        });
    };

    const handleFile = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            let reader = new FileReader();
            reader.readAsArrayBuffer(selectedFile);
            reader.onload = (e) => {
                setExcelFileError(null);
                setExcelFile(e.target.result);
            };
        } else {
            console.log("plz select your file");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: "buffer" });
            // console.log(workbook.Sheets.CekKesesuaianData["A" + "1"].w);
            workbook.Sheets.CekKesesuaianData["A" + "1"].w =
                workbook.Sheets.CekKesesuaianData["A" + "1"].w.replaceAll(
                    " ",
                    "_"
                );
            workbook.Sheets.CekKesesuaianData["B" + "1"].w =
                workbook.Sheets.CekKesesuaianData["B" + "1"].w.replaceAll(
                    " ",
                    "_"
                );
            workbook.Sheets.CekKesesuaianData["C" + "1"].w =
                workbook.Sheets.CekKesesuaianData["C" + "1"].w.replaceAll(
                    " ",
                    "_"
                );
            workbook.Sheets.CekKesesuaianData["D" + "1"].w =
                workbook.Sheets.CekKesesuaianData["D" + "1"].w.replaceAll(
                    " ",
                    "_"
                );
            workbook.Sheets.CekKesesuaianData["E" + "1"].w =
                workbook.Sheets.CekKesesuaianData["E" + "1"].w.replaceAll(
                    " ",
                    "_"
                );

            const worksheetName = workbook.SheetNames[0]; // Sheet
            const worksheet = workbook.Sheets[worksheetName];
            // console.log(worksheet); // pentingnya disini
            const data = XLSX.utils.sheet_to_json(worksheet);
            // console.log(data); 
            setExcelData(data);
        } else {
            setExcelData(null);
        }
    };
    console.log(excelFile)

    return (
        <div>
            <p class="font-[700] flex justify-center text-[20px] mt-[20px]">
                Cek Kesesuaian Datamu dengan Data Kami
            </p>
            <div className="mr-[200px] ml-[200px] mt-[40px] flex justify-center">
                <div class="border-2 rounded-[15px] drop-shadow-md bg-lightblue h-[300px] w-[750px] flex flex-col items-center justify-center">
                    <p className="text-[20px]">
                        Unggah datamu dalam bentuk csv/xls
                    </p>
                    <FileInput
                    onChange={handleFile}
                    ></FileInput>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4 mt-4">
                <p
                    class="font-[500]  text-blue text-[20px] mt-[20px] underline cursor-pointer"
                    onClick={downloadTemplate}
                >
                    Sesuaikan datamu dengan template ini!
                </p>
                <Button className="bg-[#5DAFEF]" onClick={handleSubmit}>Cek</Button>
            </div>
        </div>
    );
};

export default UnggahFile;
