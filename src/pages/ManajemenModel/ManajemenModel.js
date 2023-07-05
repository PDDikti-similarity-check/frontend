// import React from 'react'
// import Table, { SelectColumnFilter, StatusPill, ActionButtons } from './Table'  // new

// const getData = () => {
//   const data = [
//     {
//       namaModel : 'Model 1',
//       waktuDibuat: '29-02-2023 08:30',
//       status : true,
//     },
//     {
//       namaModel : 'Model 2',
//       waktuDibuat: '29-02-2023 12:30',
//       status : false,
//     },
//     {
//       namaModel : 'Model 3',
//       waktuDibuat: '29-02-2023 13:30',
//       status : true,
//     },
//   ]
//   return [...data, ...data, ...data]
// }

// function ManajemenModel() {
//   // const [listModel, setListModel] = useState([]);
  
//   // useEffect(() => {
//   //   axios.get("/user/retrieve-users").then((response) => {
//   //       // console.log(response.data);
//   //       setListModel(response.data);
//   //       console.log(listModel);
//   //   });
//   // }, []);

//   const columns = React.useMemo(() => [
//     {
//         Header: "Nama Model",
//         accessor: 'namaModel',
//         Cell: props => {
//             const { original } = props.cell.row;
//             return ( <>
//               <div
//                   style={{
//                     textAlign:"left",
//                   }}
//                 >{props.value}</div> </>
//             )
//           },
//     },
//     {
//       Header: "Waktu Dibuat",
//       accessor: 'waktuDibuat',
//     },
//     {
//       Header: "Status",
//       accessor: 'status',
//       Cell: StatusPill,
//     },
//     {
//       Header: "",
//       accessor: "Id",
//       Cell: ActionButtons
//     },
//   ], [])

//   const data = React.useMemo(() => getData(), [])

//   return (
//     <div className="min-h-screen">
//       <main className="w-full px-4 sm:px-6 lg:px-10 pt-4">
//         <p className='text-xl font-bold'>Manajemen Model</p>
//         <div className="mt-6">
//           <Table columns={columns} data={data} />
//           {/* <Table columns={columns} data={listModel} /> */}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default ManajemenModel;