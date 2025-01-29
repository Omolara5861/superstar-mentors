"use client"
import React, { useEffect, useState } from "react";
import UploadModal from "../../../components/modal/Upload";
import Table from "../../../components/table/Table";
import Wrapper from "../../../components/mentor-dashboard/wrapper/Wrapper";
import Image from "next/image";


type Mentee = {
   name: string;
    courseEnrolled: string;
    modeOfTeaching: string;
    startDate: string;
    endDate: string;
    gender?: string;
};

const mentees: Mentee[] = [
    {
       courseEnrolled: "Choreography",
        name: "David John",
        modeOfTeaching: "Video/Online",
        startDate: "26-Sep-2025",
        endDate: "26-Sep-2025",
        gender: "Male",
    },
    {
       courseEnrolled: "Videography",
        name: "Deborah John",
        modeOfTeaching: "Video/Online",
        startDate: "26-Sep-2024",
        endDate: "26-Sep-2025",
        gender: "Female",
    },
    {
       courseEnrolled: "Comedy",
        name: "Evans Jude",
        modeOfTeaching: "Video/Online",
        startDate: "26-Sep-2024",
        endDate: "26-Sep-2025",
        gender: "Male",
    },
    {
       courseEnrolled: "Music",
        name: "Sarah Sav",
        modeOfTeaching: "Video/Online",
        startDate: "26-Sep-2024",
        endDate: "26-Sep-2025",
        gender: "Female",
    },
    {
       courseEnrolled: "Skit-Makers",
        name: "John Micheal",
        modeOfTeaching: "Video/Online",
        startDate: "26-Sep-2024",
        endDate: "26-Sep-2025",
        gender: "Male",
    },
    {
       courseEnrolled: "Producers",
        name: "Grace Son",
        modeOfTeaching: "Video/Online",
        startDate: "26-Sep-2025",
        endDate: "26-Sep-2025",
        gender: "Female",
    },
    {
       courseEnrolled: "Cinematography",
        name: "John Doe",
        modeOfTeaching: "Video/Online",
        startDate: "26-Sep-2025",
        endDate: "26-Sep-2025",
        gender: "Male",
    },
    {
       courseEnrolled: "Directors",
        name: "Revival Sound",
        modeOfTeaching: "Video/Online",
        startDate: "26-Sep-2025",
        endDate: "26-Sep-2025",
        gender: "Female",
    },
];

// Pagination helper function
const paginate = (data: any, currentPage: any, itemsPerPage: any) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
};

const AssignmentsPage = () => {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, []);

        const paginatedData = paginate(mentees, currentPage, itemsPerPage);

    // Navigation for pagination
    const nextPage = () => {
        setCurrentPage((prev) => (prev < Math.ceil(mentees.length / itemsPerPage) ? prev + 1 : prev));
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    const columns = [
        { header: "NAMES", accessor: "name" },
        { header: "COURSE ENROLLED", accessor: "courseEnrolled" },
        { header: "MODE OF TEACHING", accessor: "startDate" },
        { header: "GENDER", accessor: "startDate" },
        { header: "Start Date", accessor: "startDate" },
        { header: "End Date", accessor: "endDate" },
        {
            render: (value: any, row: any) => {
                let textColor, icon;
                switch (value) {
                    case "Completed":
                        textColor = "text-green-500";
                        icon = "/dashboard/online.svg";
                        break;
                    case "Pending":
                        textColor = "text-yellow-500";
                        icon = "/dashboard/pending.svg";
                        break;
                    case "Grading":
                        textColor = "text-blue-500";
                        icon = "/dashboard/online.svg";
                        break;
                }
            }
        }
    ];


    return (
        <div className="h-[90vh] relative">
            <div className="mt-6 flex gap-5 justify-end">
                <div className="relative">
                    <Image
                        src="/dashboard/search.svg"
                        alt="Search Icon"
                        width={24}
                        height={24}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                    />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[505px] h-[57px] pl-10 pr-4 py-2 border border-gray-300 bg-transparent rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                    />
                </div>
                <button
                    className=" bg-[#fff] bg-transparent border border-primary py-2 px-3 w-[190px] h-[57px] flex items-center justify-between rounded"
                    onClick={() => alert("Filter logic not implemented yet.")}
                >
                    Filter <Image
                        src="/dashboard/filter.svg"
                        alt="Sort Icon"
                        width={16}
                        height={16}
                        className="self-center"
                    />
                </button>
            </div>

            {/* Active Tab Content */}
            <Table data={paginatedData} columns={columns} />

            {/* Pagination */}
            <div className="flex justify-between absolute -bottom-5 right-0 left-0">
                <p className="mt-4 text-sm text-[#555555] font-bold">
                    Showing {Math.min((currentPage - 1) * itemsPerPage + 1, mentees.length)} to {Math.min(currentPage * itemsPerPage, mentees.length)} of {mentees.length} results
                </p>
                <div className="flex gap-2">
                    <button onClick={prevPage} disabled={currentPage === 1}><Image
                        src="/dashboard/angle-left.svg"
                        alt="Previous Page"
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    /></button>
                    <button onClick={nextPage} disabled={currentPage === Math.ceil(mentees.length / itemsPerPage)}><Image
                        src="/dashboard/angle-right.svg"
                        alt="Next Page"
                        width={16}
                        height={16}
                        className="cursor-pointer"
                    /></button>
                </div>
            </div>
        </div>
    );
};

export default Wrapper(AssignmentsPage);
