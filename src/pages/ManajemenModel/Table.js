import React, { useState, useEffect } from 'react';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination, useRowSelect } from 'react-table';
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon, CheckIcon, XIcon, PlusCircleIcon } from '@heroicons/react/solid';
import { Button, PageButton } from '../shared/Button';
import { useRowSelectColumn } from "@lineup-lite/hooks";
import { classNames } from '../shared/Utils';
import { SortIcon, SortUpIcon, SortDownIcon } from '../shared/Icons';
import { ConfirmModal, WarningModal } from '../../component';
import { BsTrash } from "react-icons/bs";
import axios from "axios";


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
    <form>   
        <div class="relative z-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="text" 
                class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[15px] focus:ring-blue focus:border-blue" 
                value={value || ""}
                onChange={e => {
                setValue(e.target.value);
                onChange(e.target.value);
                }}
                placeholder={
                    `Search...`}/>
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

export function StatusPill({ value }) {

    return (
        <span className='flex justify-center'>
            {value == true ? 
            <div className='flex justify-center items-center bg-lightblue border-4 border-lightblue rounded-[10px] px-1'>
                <CheckIcon className="h-3 w-3 text-blue mr-[5px]" aria-hidden="true" /> 
                <p className='text-[12px] font-bold text-blue'>Aktif</p>
            </div>
            : 
            <div className='flex justify-center items-center bg-[#EFEEEE] border-4 border-[#EFEEEE] rounded-[10px] px-1'>
                <XIcon className="h-3 w-3 text-grey mr-[5px]" aria-hidden="true" /> 
                <p className='text-[12px] font-bold text-grey'>Nonaktif</p>
            </div>
            }
        </span>
    );
};

export function AvatarCell({ value, column, row }) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 h-10 w-10">
        <img className="h-10 w-10 rounded-full" src={row.original[column.imgAccessor]} alt="" />
      </div>
      <div className="ml-4">
        <div className="text-sm font-medium text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">{row.original[column.emailAccessor]}</div>
      </div>
    </div>
  )
}

export function ActionButtons({ value }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showActivateModal, setShowActivateModal] = useState(false);
  const [statusActive, setStatusActive] = useState(false);

    // const deleteModel = async (e) => {
    //     e.preventDefault();
    //     console.log(value);
    //     await axios.delete("/user/delete-user/" + value).then((response) => {
    //         window.location.reload(false);
    //         console.log(response);
    //     });
    // };
    

    // useEffect(() => {
    //   axios.get("/api minta status /" + value).then((response) => {
    //     console.log(response);
    //     setStatusActive(response.data);
    //   });
    // }, []);


    //yang ini maunya apinya bisa buat modal di row itu jd aktif sisanya non aktif
    // const activateModel = async (e) => {
    //     e.preventDefault();
    //     console.log(value);
    //     await axios.delete("/user/delete-user/" + value).then((response) => {
    //         window.location.reload(false);
    //         console.log(response);
    //     });
    // };

    return (
        <>
            <div className="flex space-x-[2px] items-center justify-center">                
                <div className="relative inline-flex items-center px-2 py-2 rounded-[5px]">
                    <BsTrash className='text-danger text-[16px] outline outline-offset-4 outline-1 rounded-[2px] outline-states-danger' onClick={() => [setShowActivateModal(false), setShowDeleteModal(true)]}></BsTrash>
                </div>
                {statusActive !== true? 
                <button className='inline-flex justify-center rounded-[8px] hover:brightness-90 text-[12px] font-bold text-white w-fit p-2 bg-[#5DAFEF]' onClick={() => [setShowActivateModal(true), setShowDeleteModal(false)]}>Aktifkan</button>
                : 
                null
                }
              
            </div>
            {showDeleteModal ? (
                    <WarningModal
                        label="Warning"
                        description="Apakah Anda yakin untuk menghapus model?"
                        rightbutton="Hapus"
                        leftbutton="Batal"
                        // onClickRight={deleteModel}
                        onClickLeft={() => setShowDeleteModal(false)}
                    />
                ) : null}
            {showActivateModal ? (
                    <ConfirmModal
                        label="Confirmation"
                        description="Apakah Anda yakin untuk mengaktifkan model?"
                        rightbutton="Aktifkan"
                        leftbutton="Batal"
                        // onClickRight={activateModel}
                        onClickLeft={() => setShowActivateModal(false)}
                    />
                ) : null}
        </>
    );
}

function Table({ columns, data }) {
  const [showOptions, setShowOptions] = useState(false);
  const [showModalAktif, setShowModalAktif] = useState(false);



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

    function selectedModels() {
        const list = Object.entries(state.selectedRowIds);
        let listSelectedModel = [];
        for (let i = 0; i < list.length; i++) {
            for (let j = 0; j < page.length; j++) {
                if (list[i][0] === page[j].id) {
                    listSelectedModel.push({ Id: page[j].original.Id });
                }
            }
        }
        return listSelectedModel;
    }



    let totalSelectedModel = Object.entries(state.selectedRowIds).length;
    let confTotalSelectedModel = '';
    if (totalSelectedModel === 0){
        confTotalSelectedModel = '*Tidak ada model terpilih';
    } else if (totalSelectedModel === 1) {
        confTotalSelectedModel = '*1 model terpilih';
    } 
    else{
        confTotalSelectedModel = '*'+totalSelectedModel +' model terpilih';
    }

    const clickHandler = () => {
        setShowOptions(!showOptions);
    };

  return (
    <>
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
              <button
                  onClick
                  type="button"
                  class="inline-flex w-[170px] ml-[20px] h-[35px] mb-0.5 items-center justify-center gap-x-1 rounded-[8px] bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#5DAFEF]"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
              >
                  <div className="relative inline-flex items-center px-2 py-2 rounded-[5px]">
                      <PlusCircleIcon className="w-5 h-5 text-bgprimary"/>
                  </div>
                  Tambah Model
              </button>
          </div>
        </div>
    </div>
      <div className="mt-5 w-full flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                <thead className="bg-lightblue">
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th
                          scope="col"
                          className=" py-4 text-center text-sm font-[800] text-black tracking-wider"
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                        >
                          <div className="flex items-center justify-center">
                            {column.render(
                                "Header"
                            )}
                            {column.id ===
                                "selection" &&
                                column.render(
                                    "Summary"
                                )}
                            <span>
                              {column.isSorted
                                ? column.isSortedDesc
                                  ? <SortDownIcon className="w-4 h-4 text-gray-400" />
                                  : <SortUpIcon className="w-4 h-4 text-gray-400" />
                                : (
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
                  className="bg-white divide-y divide-gray-200 text-center "
                >
                  {page.map((row, i) => {  // new
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="px-6 py-4 whitespace-nowrap"
                              role="cell"
                            >
                              {cell.column.Cell.name === "defaultRenderer"
                                ? <div className="text-sm text-gray-500">{cell.render('Cell')}</div>
                                : cell.render('Cell')
                              }
                            </td>
                          )
                        })}
                      </tr>
                    )
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
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2 items-baseline">
            <span className="text-sm text-gray-700">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of <span className="font-medium">{pageOptions.length}</span>
            </span>
            <label>
              <span className="sr-only">Items Per Page</span>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={state.pageSize}
                onChange={e => {
                  setPageSize(Number(e.target.value))
                }}
              >
                {[5, 10, 20].map(pageSize => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <PageButton
                className="rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <ChevronDoubleLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => nextPage()}
                disabled={!canNextPage
                }>
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </PageButton>
              <PageButton
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <ChevronDoubleRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </PageButton>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table;