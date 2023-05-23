import React, { useEffect, useState } from "react";
import Table, { ActionButtons } from "./TabelHasilCekData";
import pdf from "../../others/pdf.png";
import word from "../../others/word.png";
import excel from "../../others/excel.png";
import axios from "axios";
// import { Loader } from "../../../components";
// import { useJwt } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { Button } from "../../component";
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import CanvasJSReact from '@canvasjs/react-charts';

const getData = () => {
    const data = [
        {
            NamaMahasiswa: "Magnolia Fayza",
            NamaLembaga: "Universitas Indonesia",
            Hasil: "Terdapat 7 data serupa",
        },
        {
            NamaMahasiswa: "Fransisco William", 
            NamaLembaga: "Universitas Indonesia",
            Hasil: "Terdapat 10 data serupa",
        },
        {
            NamaMahasiswa: "Aurora Putri",
            NamaLembaga: "Universitas Indonesia",
            Hasil: "Terdapat 5 data serupa",
        },
        {
            NamaMahasiswa: "Muhammad Rafi Atha",
            NamaLembaga: "Universitas Indonesia",
            Hasil: "Terdapat 20 data serupa",
        },
    ];
    return [...data, ...data];
};

function HasilCekData() {
    const [listKategori, setListKategori] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const [opsiExport, setOpsiExport] = useState(false);
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
                Header: "Nama Mahasiswa",
                accessor: "NamaMahasiswa",
            },
            {
                Header: "Nama Lembaga",
                accessor: "NamaLembaga",
            },
            {
                Header: "Hasil",
                accessor:"Hasil",
            },
            {
                Header: "Detail",
                // accessor: "id",
                Cell: ActionButtons,
            },
        ],
        []
    );

    const data = React.useMemo(() => getData(), []);
    var CanvasJS = CanvasJSReact.CanvasJS;
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;
    const options = {
      height:200,
			animationEnabled: true,
			// title: {
			// 	text: "Customer Satisfaction"
			// },
			subtitles: [{
				text: "78%",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				// showInLegend: true,
				// indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Mirip", y: 78 },
					{ name: "Tidak Mirip", y: 22 },
				]
			}]
		}

    return (
        <>
            {/* {showLoading ? <Loader /> : null} */}
            <div className="h-screen motion-safe:animate-fade-in-up px-4 sm:px-6 lg:px-10 pt-4">
              <div className="flex justify-between">
                <p className='text-xl font-bold'>Hasil Kemiripan Data</p>
                <div>
                  <button
                      onClick={() => setOpsiExport(!opsiExport)}
                      type="button"
                      class="inline-flex w-[120px] ml-[20px] h-[35px] mb-0.5 items-center justify-center gap-x-3 rounded-[8px] bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5DAFEF]"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                  >
                    <BsFileEarmarkArrowDown />
                      Export
                      <svg
                          class="-mr-1 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="white"
                          aria-hidden="true"
                      >
                          <path
                              fill-rule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clip-rule="evenodd"
                          />
                      </svg>
                  </button>
                  {opsiExport?(
                    <div class="absolute z-10 mt-3 w-[160px] origin-top-right rounded-[8px] bg-white shadow drop-shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">                      
                      <div className="flex flex-row space-x-2 items-center px-4 text-gray-700 block px-2 py-2 text-sm hover:bg-gray-200 hover:rounded-t-default cursor-pointer">
                        <img src={pdf} className="w-[15px] h-[17px]" />
                        <p>Export to PDF</p>
                      </div>
                      <div className="flex flex-row space-x-2 px-4 items-center text-gray-700 block px-2 py-2 text-sm hover:bg-gray-200 hover:rounded-t-default cursor-pointer">
                        <img src={word} className="w-[15px] h-[17px]" />
                        <p>Export to word</p>
                      </div>
                      <div className="flex flex-row space-x-2 px-4 items-center text-gray-700 block px-2 py-2 text-sm hover:bg-gray-200 hover:rounded-t-default cursor-pointer">
                        <img src={excel} className="w-[15px] h-[17px]" />
                        <p>Export to excel</p>
                      </div>
                    </div>
                  ):null}
                </div>
                
              </div>
              <div className="flex justify-center items-center">
                <div className="w-[150px] h-[200px]">
                  <CanvasJSChart options = {options} />
                </div>
              </div>
              <div className="mx-12">
                  <Table columns={columns} data={data} />
              </div>
            </div>
        </>
    );
}

export default HasilCekData;
