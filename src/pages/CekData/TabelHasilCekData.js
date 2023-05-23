import React, { useState, useEffect } from "react";
import {
    useTable,
    useGlobalFilter,
    useAsyncDebounce,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
} from "react-table";
import { Buttonn, PageButton } from "../shared/Button";
import { classNames } from "../shared/Utils";
import { useRowSelectColumn } from "@lineup-lite/hooks";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "../../component";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";

export function ActionButtons({ value }) {
    let navigate = useNavigate();
    return (
        <>
            <div>
              <button
                  onClick={() => navigate('/cekdata/hasil-pengecekan/detail')}
                  type="button"
                  class="inline-flex w-[120px] ml-[20px] h-[35px] mb-0.5 items-center justify-center gap-x-3 rounded-[8px] bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm bg-[#5DAFEF]"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
              >
                <HiMagnifyingGlassPlus />
                Detail
              </button>
            </div>
        </>
    );
}

export function TabelHasilCekData({ columns, data }) {
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
    } = useTable(
        { columns, data },
        useGlobalFilter,
        useFilters,
        useSortBy,
        usePagination,
        useRowSelect,
        // useRowSelectColumn
    );

    let navigate = useNavigate();
    const [showLoading, setShowLoading] = useState(false);

    return (
        <>
        {/* {showLoading ? <Loader /> : null} */}

            <div className="mt-[20px] flex flex-col">
                <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden border-b border-gray-200 rounded-sm">
                            <table {...getTableProps()} className="min-w-full">
                                <thead className="bg-primary-main">
                                    {headerGroups.map((headerGroup) => (
                                        <tr
                                            {...headerGroup.getHeaderGroupProps()}
                                        >
                                          <th>
                                            No
                                          </th>
                                            {headerGroup.headers.map(
                                                (column) => (
                                                    <th
                                                        scope="col"
                                                        className="px-4 py-[9px] text-left text-neutral-10 text-m font-[600] tracking-wider"
                                                        {...column.getHeaderProps(
                                                            column.getSortByToggleProps()
                                                        )}
                                                    >
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
                                                                    ? " ▾"
                                                                    : " ▴"
                                                                : ""}
                                                        </span>
                                                    </th>
                                                )
                                            )}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody
                                    {...getTableBodyProps()}
                                    className="bg-neutral-10 divide-y divide-gray-200 "
                                >
                                    {page.map((row, i) => {
                                        prepareRow(row);
                                        // onClick(row);
                                        return (
                                          <>
                                            <tr {...row.getRowProps()} className={`${i%2 === 0 ? "bg-[#E3E3E3]" :"bg-[#F7F7F7]"}`} >
                                              <td className="px-4 text-center">
                                                {i+1}
                                              </td>
                                                {row.cells.map((cell) => {
                                                    return (
                                                      <>
                                                        <td
                                                            {...cell.getCellProps()}
                                                            className="px-4 py-2 text-neutral-90 max-w-[100px] text-left text-m break-all"
                                                        >
                                                            {cell.render(
                                                                "Cell"
                                                            )}
                                                        </td>
                                                        </>
                                                    );
                                                })}
                                            </tr>
                                            </>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-3 flex items-center justify-between">
                <div className="flex-1 flex justify-between sm:hidden">
                    <Buttonn
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                    >
                        Previous
                    </Buttonn>
                    <Buttonn onClick={() => nextPage()} disabled={!canNextPage}>
                        Next
                    </Buttonn>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="flex space-x-2 ml-2 mb-3 mt-2 sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-700">
                            Halaman
                            <span className="font-medium">
                                {" "}
                                {state.pageIndex + 1}
                            </span>{" "}
                            dari
                            <span className="font-medium">
                                {" "}
                                {pageOptions.length}
                            </span>{" "}
                            | {" total "} {preGlobalFilteredRows.length} |
                            Tampilkan
                        </span>
                        <label>
                            <select
                                className="py-2 block w-full bg-neutral-20 rounded-[8px] border border-primary-main focus:ring-1 focus:ring-primary-main focus:ring-opacity-50 text-primary-main font-[600]"
                                value={state.pageSize}
                                onChange={(e) => {
                                    setPageSize(Number(e.target.value));
                                }}
                            >
                                {[5, 10, 30].map((pageSize) => (
                                    <option key={pageSize} value={pageSize}>
                                        {pageSize}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <nav
                            className="relative mr-1 z-0 inline-flex -space-x-px"
                            aria-label="Pagination"
                        >
                            <PageButton
                                className="rounded-[5px]"
                                onClick={() => gotoPage(0)}
                                disabled={!canPreviousPage}
                            >
                                <span className="sr-only">First</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </PageButton>
                            <PageButton
                                className="rounded-[5px]"
                                onClick={() => previousPage()}
                                disabled={!canPreviousPage}
                            >
                                <span className="sr-only">Previous</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </PageButton>
                            <PageButton
                                className="rounded-[5px]"
                                onClick={() => nextPage()}
                                disabled={!canNextPage}
                            >
                                <span className="sr-only">Next</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </PageButton>
                            <PageButton
                                className="rounded-[5px]"
                                onClick={() => gotoPage(pageCount - 1)}
                                disabled={!canNextPage}
                            >
                                <span className="sr-only">Last</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </PageButton>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TabelHasilCekData;
