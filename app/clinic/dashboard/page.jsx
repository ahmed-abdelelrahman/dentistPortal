"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiUsers } from "react-icons/hi";
import Select from "react-select";
import { useTable } from "react-table";
import "../../globals.css";
import AppointmentModal from "../../../components/AppointmentModal";

export default function Home() {
  // modal functions
  const [isModalOpen, setIsModalOpen] = useState(false);

  // array for select components

  const aquaticCreatures = [
    { label: "Shark", value: "Shark" },
    { label: "Dolphin", value: "Dolphin" },
    { label: "Whale", value: "Whale" },
    { label: "Octopus", value: "Octopus" },
    { label: "Crab", value: "Crab" },
    { label: "Lobster", value: "Lobster" },
  ];
  const fakeData = [
    {
      id: "1",
      patient_name: "build",
      dentist: "nona",
      time: "sebtember",
      notes: "notes",
      action: "action",
    },
  ];

  // table function
  const data = useMemo(() => fakeData, []);
  const columns = useMemo(
    () => [
      {
        // such what you like to put in front end
        Header: "ID",
        // such dataName
        accessor: "id",
      },
      {
        Header: "Patient Name",
        accessor: "patient_name",
      },
      {
        Header: "Dentist",
        accessor: "dentist",
      },
      {
        Header: "Time",
        accessor: "time",
      },
      {
        Header: "Notes",
        accessor: "notes",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],

    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div>
      {isModalOpen ? <AppointmentModal setIsOpen={setIsModalOpen} /> : ""}
      {/* Heading */}
      <div className='flex items-center justify-between p-2  mb-6'>
        <div>
          Welcome,Dr.<span>user</span>
        </div>
        <div>7:03 PM - Sep 10, 2023</div>
      </div>
      {/* boxes for patient and appointments els */}
      <div className='dashboard-boxes1 pt-5 p-5'>
        <div className='container'>
          <div className='box relative border-2 border-solid bg-blue-200 text-gray-600 border-slate-600 '>
            <div className='flex justify-between items-center p-2'>
              <div className='flex flex-col items-center '>
                <div>1</div>
                <div>total patients</div>
              </div>
              <div className='p-2'>
                <HiUsers />
              </div>
            </div>
            <div className='absoltue bottom-0 left-0 w-full bg-green-300 px-1 text-center'>
              {" "}
              More info
            </div>
          </div>
          <div className='box relative border-2 border-solid bg-blue-200 text-gray-600 border-slate-600'>
            <div className='flex justify-between items-center p-2 '>
              <div className='flex flex-col items-center '>
                <div>1</div>
                <div>total patients</div>
              </div>
              <div className='p-2'>
                <HiUsers />
              </div>
            </div>
            <div className='absoltue bottom-0 left-0 w-full bg-green-300 px-1 text-center'>
              {" "}
              More info
            </div>
          </div>
          <div className='box relative border-2 border-solid bg-blue-200 text-gray-600 border-slate-600'>
            <div className='flex justify-between items-center p-2'>
              <div className='flex flex-col items-center'>
                <div>1</div>
                <div>total patients</div>
              </div>
              <div className='p-2'>
                <HiUsers />
              </div>
            </div>
            <div className='absoltue bottom-0 left-0 w-full bg-green-300 px-1 text-center'>
              {" "}
              More info
            </div>
          </div>
          <div className='box relative border-2 border-solid bg-blue-200 text-gray-600 border-slate-600 '>
            <div className='flex justify-between items-center p-2'>
              <div className='flex flex-col items-center'>
                <div>1</div>
                <div>total patients</div>
              </div>
              <div className='p-2'>
                <HiUsers />
              </div>
            </div>
            <div className='absoltue bottom-0 left-0 w-full bg-green-300 px-1 text-center'>
              More info
            </div>
          </div>
        </div>
      </div>
      <div className='dashboard-boxes2 pt-5 p-5'>
        <div className='container grid'>
          <div className='flex flex-col gap-2'>
            <div
              onClick={() => setIsModalOpen(true)}
              className='box flex items-center  border-2 border-solid border-slate-200 '
            >
              <div className='bg-sky-500 py-10 px-4  text-white'>
                <HiUsers />
              </div>
              <div className='bg-white text-center'>ADD APPOINTMENT</div>
            </div>

            <div className='box flex items-center  border-2 border-solid border-slate-200 '>
              <div className='bg-sky-500 py-10 px-4  text-white'>
                <HiUsers />
              </div>
              <div className='bg-white text-center'>ADD APPOINTMENT</div>
            </div>
            <div className='box flex items-center  border-2 border-solid border-slate-200 '>
              <div className='bg-sky-500 py-10 px-4  text-white'>
                <HiUsers />
              </div>
              <div className='bg-white text-center'>ADD APPOINTMENT</div>
            </div>
          </div>
          <div>
            <div className='w-full flex items-center justify-between p-2 border-b-2 border-solid border-slate-700'>
              <span>
                Appointment Today <span>Sep 11, 2023</span>
              </span>

              <Link className='text-red-700' href='#'>
                View alls
              </Link>
            </div>
            <div className='p-4'>
              <Select
                className='w-[200px] '
                options={aquaticCreatures}
                onChange={(opt) => console.log(opt.label, opt.value)}
                placeholder='-All Dentist-'
              />
            </div>
            <div className='tableContainer'>
              <table {...getTableProps()} className='table'>
                <thead className='thead'>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} className='tr'>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()} className='th'>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()} className='tbody'>
                  {rows.map((row) => {
                    // we need to prepare row first so i use {} rather than () return automatically with return word
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()} className='tr'>
                        {row.cells.map((cell) => (
                          <td {...cell.getCellProps()} className='td'>
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
