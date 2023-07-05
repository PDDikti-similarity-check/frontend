import React, { useState, useEffect } from "react";
import Table, {
    AvatarCell,
    ActionButtons,
} from "./Table"; // new
import axios from "axios";
import {  CheckIcon, XIcon } from '@heroicons/react/solid';


const getData = () => {
    const data = [
        {
            organization_name: "Organisasi 1",
            pic_name: "Jane Cooper",
            username: "organisasi1",
            email: "organisasi1@example.com",
            is_verified: 1,
            is_api_activated: 1,
            imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        },
        {
            organization_name: "Organisasi 2",
            pic_name: "Jane Cooper",
            username: "organisasi2",
            email: "organisasi2@example.com",
            is_verified: 1,
            is_api_activated: 0,
            imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        },
        {
            organization_name: "Organisasi 3",
            pic_name: "Aurora Cooper",
            username: "organisasi3",
            email: "organisasi3@example.com",
            is_verified: 1,
            is_api_activated: 0,
            imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        },
        {
            organization_name: "Organisasi 4",
            pic_name: "Jane Cooper",
            username: "organisasi4",
            email: "organisasi4@example.com",
            is_verified: 0,
            is_api_activated: 1,
            imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        },
        {
            organization_name: "Organisasi 5",
            pic_name: "Jane Cooper",
            username: "organisasi5",
            email: "organisasi5@example.com",
            is_verified: 0,
            is_api_activated: 0,
            imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        },
    ];
    return [...data, ...data, ...data];
};

function ManajemenPengguna() {
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        axios.get("/api/user/list-user").then((response) => {
            setListUser(response.data);
        });
    }, []);

    const columns = React.useMemo(
        () => [
            {
                Header: "Nama Organisasi",
                accessor: "organization_name",
                Cell: AvatarCell,
            },
            {
                Header: "Nama Pengguna",
                accessor: "pic_name",
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
                Cell: (props) => {
                    return (
                        <span className='flex justify-center'>
                            {props.value == 1 ? 
                             <CheckIcon className="h-5 w-5 text-blue" aria-hidden="true" /> : 
                             <XIcon className="h-5 w-5 text-danger " aria-hidden="true" />}
                        </span>
                    );
                },
                
            },
            {
                Header: "Izin Request API",
                accessor: "is_api_activated",
                Cell: (props) => {
                    return (
                        <span className='flex justify-center'>
                            {props.value == 1 ? 
                             <CheckIcon className="h-5 w-5 text-blue" aria-hidden="true" /> : 
                             <XIcon className="h-5 w-5 text-danger " aria-hidden="true" />}
                        </span>
                    );
                },
            },
            {
                Header: " ",
                // accessor: "id",
                accessor: (row) => [
                    row.id,
                    row.pic_name
                ],
                Cell: ActionButtons,
            },
        ],
        []
    );

    const data = React.useMemo(() => getData(), []);

    return (
        <div className="min-h-screen">
            <main className="w-full pt-4">
                <p className="text-xl font-bold px-4 sm:px-6 lg:px-10 ">Manajemen Pengguna</p>
                <div className="mt-6">
                    <Table columns={columns} data={data} />
                    {/* <Table columns={columns} data={listUser} /> */}
                </div>
            </main>
        </div>
    );
}

export default ManajemenPengguna;
