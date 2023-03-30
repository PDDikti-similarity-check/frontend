import React from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill, ActionButtons } from './Table'  // new

const getData = () => {
  const data = [
    {
      namaOrganisasi : 'Organisasi 1',
      name: 'Jane Cooper',
      username : 'organisasi1',
      email: 'organisasi1@example.com',
      izinUnggahFile: true,
      izinKirimApi : true,
      imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        namaOrganisasi : 'Organisasi 2',
        name: 'Jane Cooper',
        username : 'organisasi2',
        email: 'organisasi2@example.com',
        izinUnggahFile: true,
        izinKirimApi : false,
        imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        namaOrganisasi : 'Organisasi 3',
        name: 'Aurora Cooper',
        username : 'organisasi3',
        email: 'organisasi3@example.com',
        izinUnggahFile: true,
        izinKirimApi : false,
        imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        namaOrganisasi : 'Organisasi 4',
        name: 'Jane Cooper',
        username : 'organisasi4',
        email: 'organisasi4@example.com',
        izinUnggahFile: false,
        izinKirimApi : true,
        imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
        namaOrganisasi : 'Organisasi 5',
        name: 'Jane Cooper',
        username : 'organisasi5',
        email: 'organisasi5@example.com',
        izinUnggahFile: false,
        izinKirimApi : false,
        imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ]
  return [...data, ...data, ...data]
}

function ManajemenPengguna() {

  const columns = React.useMemo(() => [
    {
        Header: "Nama Organisasi",
        accessor: 'namaOrganisasi',
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
    },
    {
      Header: "Nama Pengguna",
      accessor: 'name',
      
    },
    {
      Header: "Username",
      accessor: 'username',
    },
    {
        Header: "Email",
        accessor: 'email',
    },
    {
      Header: "Izin Unggah CSV/XLS",
      accessor: 'izinUnggahFile',
      Cell: StatusPill,
    },
    {
        Header: "Izin Request API",
        accessor: 'izinKirimApi',
        Cell: StatusPill,
    },
    {
      Header: "",
      accessor: "Id",
      Cell: ActionButtons
    },
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen">
      <main className="w-full px-4 sm:px-6 lg:px-10 pt-4">
        <p className='text-xl font-bold'>Manajemen Pengguna</p>
        <div className="mt-6">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default ManajemenPengguna;