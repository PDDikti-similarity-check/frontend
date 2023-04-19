import React, { useState, useEffect } from "react";
import Table, {
    AvatarCell,
    SelectColumnFilter,
    StatusPill,
    ActionButtons,
} from "./Table"; // new
import axios from "axios";

// const getData = () => {
//     const data = [
//         {
//             namaOrganisasi: "Organisasi 1",
//             name: "Jane Cooper",
//             username: "organisasi1",
//             email: "organisasi1@example.com",
//             izinUnggahFile: true,
//             izinKirimApi: true,
//             imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//         },
//         {
//             namaOrganisasi: "Organisasi 2",
//             name: "Jane Cooper",
//             username: "organisasi2",
//             email: "organisasi2@example.com",
//             izinUnggahFile: true,
//             izinKirimApi: false,
//             imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//         },
//         {
//             namaOrganisasi: "Organisasi 3",
//             name: "Aurora Cooper",
//             username: "organisasi3",
//             email: "organisasi3@example.com",
//             izinUnggahFile: true,
//             izinKirimApi: false,
//             imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//         },
//         {
//             namaOrganisasi: "Organisasi 4",
//             name: "Jane Cooper",
//             username: "organisasi4",
//             email: "organisasi4@example.com",
//             izinUnggahFile: false,
//             izinKirimApi: true,
//             imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//         },
//         {
//             namaOrganisasi: "Organisasi 5",
//             name: "Jane Cooper",
//             username: "organisasi5",
//             email: "organisasi5@example.com",
//             izinUnggahFile: false,
//             izinKirimApi: false,
//             imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//         },
//     ];
//     return [...data, ...data, ...data];
// };

function ManajemenPengguna() {
    const [listUser, setListUser] = useState([]);
    const BASE_URL = "http://localhost:9091/";

    useEffect(() => {
        axios.get(BASE_URL + "api/user/list-user").then((response) => {
            console.log(response.data);
            setListUser(response.data);
            console.log(listUser);
        });
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "Nama Organisasi",
                accessor: "organization_name",
                // Cell: AvatarCell,
                // imgAccessor: "imgUrl",
            },
            {
                Header: "Nama Pengguna",
                accessor: "pic_name",
                Cell: (props) => {
                    const { original } = props.cell.row;
                    return (
                        <>
                            <div className="truncate w-[150px] text-sm text-gray-500">
                                {props.value}
                            </div>{" "}
                        </>
                    );
                },
            },
            {
                Header: "Username",
                accessor: "username",
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "Izin Unggah CSV/XLS",
                accessor: "is_verified",
                Cell: StatusPill,
            },
            {
                Header: "Izin Request API",
                accessor: "is_api_activated",
                Cell: StatusPill,
            },
            {
                Header: " ",
                accessor: "id",
                Cell: ActionButtons,
            },
        ],
        []
    );

    // const data = React.useMemo(() => getData(), []);

    return (
        <div className="min-h-screen">
            <main className="w-full px-4 sm:px-6 lg:px-10 pt-4">
                <p className="text-xl font-bold">Manajemen Pengguna</p>
                <div className="mt-6">
                    {/* <Table columns={columns} data={data} /> */}
                    <Table columns={columns} data={listUser} />
                </div>
            </main>
        </div>
    );
}

export default ManajemenPengguna;
