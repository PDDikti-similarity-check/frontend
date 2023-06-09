import React, { useEffect, useState } from 'react';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination, useRowSelect } from 'react-table';
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon, CheckIcon, XIcon, SearchIcon } from '@heroicons/react/solid';
import { Button, PageButton } from '../shared/Button';
import { useRowSelectColumn } from "@lineup-lite/hooks";
import { classNames } from '../shared/Utils';
import { SortIcon, SortUpIcon, SortDownIcon } from '../shared/Icons';
import axios from "axios";
import { BsTrash,BsPerson } from "react-icons/bs";
import { ConfirmModalAktifkan, DangerModalHapus, DangerModalNonaktifkan, SuccessModalConfirmAktifkan, SuccessModalDangerHapus, SuccessModalDangerNonaktifkan } from '../../component/Modal';
import { Loader } from '../../component/Loader';


function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
//   const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <form className='px-4 sm:px-6 lg:px-10'>   
        <div class="relative z-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="text" 
                class="block w-full p-2 pl-10 text-sm text-mineshaft-300 border border-mineshaft-200 rounded-[15px] focus:border-none focus:ring-none" 
                value={value || ""}
                onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
                }}
                placeholder={
                    `Cari...`}/>
        </div>
    </form>

  )
}

export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">{render("Header")}: </span>
      <select
        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        name={id}
        id={id}
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}


export function AvatarCell({ value }) {
  return (
    <div className="flex items-center">
      <div className="flex items-center justify-center h-10 w-10 bg-[#D9D9D9] rounded-full">
        <BsPerson className=""></BsPerson>
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-[#26282B]">{value}</div>
      </div>
    </div>
  )
}

export function ActionButtons({ value }) {
    const [showDeleteModal, setShowModalDelete] = useState(false);
    const [showSuksesDeleteModal, setShowSuksesModalDelete] = useState(false);

    const [showLoading, setShowLoading] = useState(false);

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    useEffect(() => {
        setId(value[0]);
        setName(value[1]);
    }, []);

    const deletePengguna = async (e) => {
        e.preventDefault();
        setShowModalDelete(false);
        setShowLoading(true);
        await axios.delete("/api/user/delete-user/" + id).then((response) => {
            setShowLoading(false);
            setShowSuksesModalDelete(true);
        });
    };

    return (
        <>
            {showLoading ? <Loader /> : null}
    
            <div className="flex space-x-[2px] items-center justify-center">                
                <div className="relative inline-flex items-center px-2 py-2 rounded-[5px] cursor-pointer">
                  <div className="relative inline-flex items-center px-2 py-2 rounded-[5px]">
                      <BsTrash className='text-danger text-[16px] outline outline-offset-4 outline-1 rounded-[2px] outline-states-danger' onClick={() => setShowModalDelete(true)}></BsTrash>
                  </div>
                </div>
            </div>

            {showDeleteModal ? (
                    <DangerModalHapus
                        tittle="Hapus Akun"
                        description1='Apakah Anda yakin untuk menghapus akun "'
                        object={name}
                        description2='" ?'
                        rightbutton="Yakin"
                        leftbutton="Batal"
                        onClickRight={deletePengguna}
                        onClickLeft={() => setShowModalDelete(false)}
                    />
                ) : null}

            {showSuksesDeleteModal? (
                <SuccessModalDangerHapus
                    description1='Akun "'
                    object={name}
                    description2='" telah dihapus'
                    rightbutton="Selesai"
                    onClick={() => window.location.reload(false)}
                />
            ) : null}
        </>
    );
}

function Table({ columns, data }) {
  const [showOptions, setShowOptions] = useState(false);

  const [showModalIzinUnggah, setShowModalIzinUnggah] = useState(false);
  const [showModalSuksesIzinUnggah, setShowModalSuksesIzinUnggah] = useState(false);

  const [showModalLarangUnggah, setShowModalLarangUnggah] = useState(false);
  const [showModalSuksesLarangUnggah, setShowModalSuksesLarangUnggah] = useState(false);

  const [showModalIzinApi, setShowModalIzinApi] = useState(false);
  const [showModalSuksesIzinApi, setShowModalSuksesIzinApi] = useState(false);

  const [showModalLarangApi, setShowModalLarangApi] = useState(false);
  const [showModalSuksesLarangApi, setShowModalSuksesLarangApi] = useState(false);

  const [showLoading, setShowLoading] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({
    columns,
    data,
  },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    useRowSelectColumn
  )
  // console.log(state)
  // console.log(data)

    function selectedUsers() {
        const list = Object.entries(state.selectedRowIds);
        console.log(list)
        let listSelectedUser = [];
        for (let i = 0; i < list.length; i++) {
            listSelectedUser.push({ id: data[parseInt(list[i][0])].id });
        }
        return listSelectedUser;
    }

    const izinUnggah = async (e) => {
        e.preventDefault();
        setShowModalIzinUnggah(false);
        setShowLoading(true);
        await axios
            .put(
                "http://localhost:9091/api/user/activate-account",
                selectedUsers()
            )
            .then((response) => {
                // window.location.reload(false);
                setShowLoading(false);
                setShowModalSuksesIzinUnggah(true);
            });
    };

    const larangUnggah = async (e) => {
        e.preventDefault();
        setShowModalLarangUnggah(false);
        setShowLoading(true);
        await axios
            .put(
                "http://localhost:9091/api/user/deactivate-account",
                selectedUsers()
            )
            .then((response) => {
                // window.location.reload(false);
                setShowLoading(false);
                setShowModalSuksesLarangUnggah(true);
            });
    };

    const izinkanAPI = async (e) => {
        e.preventDefault();
        setShowModalIzinApi(false);
        setShowLoading(true);
        await axios
            .put("http://localhost:9091/api/user/activate-api", selectedUsers())
            .then((response) => {
                // window.location.reload(false);
                setShowLoading(false);
                setShowModalSuksesIzinApi(true);
            });
    };

    const larangAPI = async (e) => {
        e.preventDefault();
        setShowModalLarangApi(false);
        setShowLoading(true);
        await axios
            .put("http://localhost:9091/api/user/deactivate-api", selectedUsers())
            .then((response) => {
                // window.location.reload(false);
                setShowLoading(false);
                setShowModalSuksesLarangApi(true);
            });
    };

    


    let totalSelectedUser = Object.entries(state.selectedRowIds).length;
    let confTotalSelectedUser = '';
    if (totalSelectedUser === 0){
        confTotalSelectedUser = '*Tidak ada organisasi terpilih';
    } else if (totalSelectedUser === 1) {
        confTotalSelectedUser = '*1 organisasi terpilih';
    } 
    else{
        confTotalSelectedUser = '*'+totalSelectedUser +' organisasi terpilih';
    }

    const clickHandler = () => {
        setShowOptions(!showOptions);
    };

  return (
      <>
            {showLoading ? <Loader /> : null}
            {showModalIzinUnggah ? (
                <ConfirmModalAktifkan
                    tittle="Konfirmasi"
                    description1="Apakah Anda yakin untuk mengizinkan organisasi unggah fail?"
                    rightbutton="Yakin"
                    leftbutton="Batal"
                    onClickRight={izinUnggah}
                    onClickLeft={() => setShowModalIzinUnggah(false)}
                />
            ) : null}
            {showModalSuksesIzinUnggah? (
                <SuccessModalConfirmAktifkan
                    description1="Berhasil mengizinkan organisasi unggah fail"
                    rightbutton="Selesai"
                    onClick={() => window.location.reload(false)}
                />
            ) : null}

            {showModalLarangUnggah ? (
                <DangerModalNonaktifkan
                    tittle="Konfirmasi"
                    description1="Apakah Anda yakin untuk melarang organisasi unggah fail?"
                    rightbutton="Yakin"
                    leftbutton="Batal"
                    onClickRight={larangUnggah}
                    onClickLeft={() => setShowModalLarangUnggah(false)}
                />
            ) : null}
            {showModalSuksesLarangUnggah? (
                <SuccessModalDangerNonaktifkan
                    description1="Berhasil melarang organisasi unggah fail"
                    rightbutton="Selesai"
                    onClick={() => window.location.reload(false)}
                />
            ) : null}

            {showModalIzinApi ? (
                <ConfirmModalAktifkan
                    tittle="Konfirmasi"
                    description1="Apakah Anda yakin untuk mengizinkan organisasi kirim API?"
                    rightbutton="Yakin"
                    leftbutton="Batal"
                    onClickRight={izinkanAPI}
                    onClickLeft={() => setShowModalIzinApi(false)}
                />
            ) : null}
            {showModalSuksesIzinApi? (
                <SuccessModalConfirmAktifkan
                    description1="Berhasil mengizinkan organisasi kirim API"
                    rightbutton="Selesai"
                    onClick={() => window.location.reload(false)}
                />
            ) : null}

            {showModalLarangApi ? (
                <DangerModalNonaktifkan
                    tittle="Konfirmasi"
                    description1="Apakah Anda yakin untuk melarang organisasi kirim API?"
                    rightbutton="Yakin"
                    leftbutton="Batal"
                    onClickRight={larangAPI}
                    onClickLeft={() => setShowModalLarangApi(false)}
                />
            ) : null}
            {showModalSuksesLarangApi? (
                <SuccessModalDangerNonaktifkan
                    description1="Berhasil melarang organisasi kirim API"
                    rightbutton="Selesai"
                    onClick={() => window.location.reload(false)}
                />
            ) : null}
          <div className="flex items-center justify-between">
              <div className="flex gap-x-2">
                  <GlobalFilter
                      preGlobalFilteredRows={preGlobalFilteredRows}
                      globalFilter={state.globalFilter}
                      setGlobalFilter={setGlobalFilter}
                  />

                  {headerGroups.map((headerGroup) =>
                      headerGroup.headers.map((column) =>
                          column.Filter ? (
                              <div key={column.id}>
                                  {column.render("Filter")}
                              </div>
                          ) : null
                      )
                  )}
              </div>
              <div class="flex justify-center items-start">
                  <div class="relative inline-block text-left pr-[20px] text-grey">
                      <div>
                          {/* {confTotalSelectedUser} */}
                          <button
                              onClick={clickHandler}
                              type="button"
                              class="inline-flex w-[100px] ml-[20px] h-[35px] mb-0.5 items-center justify-center gap-x-3 rounded-[8px] bg-cfblue-400 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5DAFEF]"
                              id="menu-button"
                              aria-expanded="true"
                              aria-haspopup="true"
                          >
                              Aksi
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
                      </div>

                      {showOptions && (
                          <div class="">
                              <div
                                  class="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-[8px] bg-white shadow drop-shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                  role="menu"
                                  aria-orientation="vertical"
                                  aria-labelledby="menu-button"
                                  tabindex="-1"
                              >
                                  <div role="none">
                                      <div
                                          onClick={() => [
                                              setShowModalIzinUnggah(true),
                                              setShowModalLarangUnggah(false),
                                              setShowModalIzinApi(false),
                                              setShowModalLarangApi(false),
                                          ]}
                                          key="setActive"
                                          class="text-gray-700 block px-2 py-2 text-sm hover:bg-gray-200 hover:rounded-t-default cursor-pointer	"
                                          role="menuitem"
                                          tabindex="-1"
                                          id="menu-item-0"
                                      >
                                          <div className="flex space-x-[2px] items-center justify-start">
                                              <div className="relative inline-flex items-center px-2 py-2 rounded-[5px]">
                                                  <svg
                                                      width="18"
                                                      height="18"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 512 512"
                                                      fill="#1B87DC"
                                                  >
                                                      <path
                                                          fillRule="evenodd"
                                                          d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                                                      />
                                                  </svg>
                                              </div>
                                              Izinkan Mengunggah Fail
                                          </div>
                                      </div>
                                      <div
                                          onClick={() => [
                                              setShowModalIzinUnggah(false),
                                              setShowModalLarangUnggah(true),
                                              setShowModalIzinApi(false),
                                              setShowModalLarangApi(false),
                                          ]}
                                          key="setInactive"
                                          class="text-gray-700 block px-2 py-2 text-sm hover:bg-gray-200 cursor-pointer	"
                                          role="menuitem"
                                          tabindex="-1"
                                          id="menu-item-0"
                                      >
                                          <div className="flex space-x-[2px] items-center justify-start">
                                              <div className="relative inline-flex items-center px-2 py-2 rounded-[5px]">
                                                  <svg
                                                      width="18"
                                                      height="18"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 512 512"
                                                      fill="#D0021B"
                                                  >
                                                      <path
                                                          fillRule="evenodd"
                                                          d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                                                      />
                                                  </svg>
                                              </div>
                                              Larang Mengunggah Fail
                                          </div>
                                      </div>
                                      <div
                                          onClick={() => [
                                              setShowModalIzinUnggah(false),
                                              setShowModalLarangUnggah(false),
                                              setShowModalIzinApi(true),
                                              setShowModalLarangApi(false),
                                          ]}
                                          key="setActive"
                                          class="text-gray-700 block px-2 py-2 text-sm hover:bg-gray-200 hover:rounded-t-default cursor-pointer	"
                                          role="menuitem"
                                          tabindex="-1"
                                          id="menu-item-0"
                                      >
                                          <div className="flex space-x-[2px] items-center justify-start">
                                              <div className="relative inline-flex items-center px-2 py-2 rounded-[5px]">
                                                  <svg
                                                      width="18"
                                                      height="18"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 512 512"
                                                      fill="#1B87DC"
                                                  >
                                                      <path
                                                          fillRule="evenodd"
                                                          d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                                                      />
                                                  </svg>
                                              </div>
                                              Izinkan Kirim API
                                          </div>
                                      </div>
                                      <div
                                          onClick={() => [
                                              setShowModalIzinUnggah(false),
                                              setShowModalLarangUnggah(false),
                                              setShowModalIzinApi(false),
                                              setShowModalLarangApi(true),
                                          ]}
                                          key="setInactive"
                                          class="text-gray-700 block px-2 py-2 text-sm hover:bg-gray-200 cursor-pointer	"
                                          role="menuitem"
                                          tabindex="-1"
                                          id="menu-item-0"
                                      >
                                          <div className="flex space-x-[2px] items-center justify-start">
                                              <div className="relative inline-flex items-center px-2 py-2 rounded-[5px]">
                                                  <svg
                                                      width="18"
                                                      height="18"
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      viewBox="0 0 512 512"
                                                      fill="#D0021B"
                                                  >
                                                      <path
                                                          fillRule="evenodd"
                                                          d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                                                      />
                                                  </svg>
                                              </div>
                                              Larang Kirim API
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      )}
                  </div>
              </div>
          </div>
          <div className="mt-5 w-full flex flex-col">
              <div className="">
                  <div className="py-2 align-middle inline-block min-w-full">
                      <div className="overflow-hidden ">
                          <table
                              {...getTableProps()}
                              className="min-w-full divide-y divide-black"
                          >
                              <thead className="">
                                  {headerGroups.map((headerGroup) => (
                                      <tr
                                          {...headerGroup.getHeaderGroupProps()}
                                      >
                                          {headerGroup.headers.map((column) => (
                                              // Add the sorting props to control sorting. For this example
                                              // we can add them into the header props
                                              <th
                                                  scope="col"
                                                  className="group px-6 py-3 text-center text-[14px] font-bold text-[#26282B]"
                                                  {...column.getHeaderProps(
                                                      column.getSortByToggleProps()
                                                  )}
                                              >
                                                  <div className="flex items-center justify-between">
                                                      {column.render("Header")}
                                                      {/* Add a sort direction indicator */}
                                                      <span>
                                                          {column.isSorted ? (
                                                              column.isSortedDesc ? (
                                                                  <SortDownIcon className="w-4 h-4 text-gray-400" />
                                                              ) : (
                                                                  <SortUpIcon className="w-4 h-4 text-gray-400" />
                                                              )
                                                          ) : (
                                                              <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                                                          )}
                                                      </span>
                                                  </div>
                                              </th>
                                          ))}
                                      </tr>
                                  ))}
                              </thead>
                              <tbody
                                  {...getTableBodyProps()}
                                  className="bg-white"
                              >
                                  {page.map((row, i) => {
                                      // new
                                      prepareRow(row);
                                      return (
                                          <tr {...row.getRowProps()}>
                                              {row.cells.map((cell) => {
                                                  return (
                                                      <td
                                                          {...cell.getCellProps()}
                                                          className="px-6 py-4 whitespace-nowrap"
                                                          role="cell"
                                                      >
                                                          {cell.column.Cell
                                                              .name ===
                                                          "defaultRenderer" ? (
                                                              <div className="text-sm text-[#26282B]">
                                                                  {cell.render(
                                                                      "Cell"
                                                                  )}
                                                              </div>
                                                          ) : (
                                                              cell.render(
                                                                  "Cell"
                                                              )
                                                          )}
                                                      </td>
                                                  );
                                              })}
                                          </tr>
                                      );
                                  })}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
          {/* Pagination */}
          <div className="py-3 flex items-center justify-between">
              <div className="flex-1 flex justify-between sm:hidden">
                  <Button
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                  >
                      Previous
                  </Button>
                  <Button onClick={() => nextPage()} disabled={!canNextPage}>
                      Next
                  </Button>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="flex gap-x-2 items-baseline">
                      <span className="text-sm text-gray-700">
                          Page{" "}
                          <span className="font-medium">
                              {state.pageIndex + 1}
                          </span>{" "}
                          of{" "}
                          <span className="font-medium">
                              {pageOptions.length}
                          </span>
                      </span>
                      <label>
                          <span className="sr-only">Items Per Page</span>
                          <select
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              value={state.pageSize}
                              onChange={(e) => {
                                  setPageSize(Number(e.target.value));
                              }}
                          >
                              {[5, 10, 20].map((pageSize) => (
                                  <option key={pageSize} value={pageSize}>
                                      Show {pageSize}
                                  </option>
                              ))}
                          </select>
                      </label>
                  </div>
                  <div>
                      <nav
                          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                          aria-label="Pagination"
                      >
                          <PageButton
                              className="rounded-l-md"
                              onClick={() => gotoPage(0)}
                              disabled={!canPreviousPage}
                          >
                              <span className="sr-only">First</span>
                              <ChevronDoubleLeftIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                              />
                          </PageButton>
                          <PageButton
                              onClick={() => previousPage()}
                              disabled={!canPreviousPage}
                          >
                              <span className="sr-only">Previous</span>
                              <ChevronLeftIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                              />
                          </PageButton>
                          <PageButton
                              onClick={() => nextPage()}
                              disabled={!canNextPage}
                          >
                              <span className="sr-only">Next</span>
                              <ChevronRightIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                              />
                          </PageButton>
                          <PageButton
                              className="rounded-r-md"
                              onClick={() => gotoPage(pageCount - 1)}
                              disabled={!canNextPage}
                          >
                              <span className="sr-only">Last</span>
                              <ChevronDoubleRightIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                              />
                          </PageButton>
                      </nav>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Table;