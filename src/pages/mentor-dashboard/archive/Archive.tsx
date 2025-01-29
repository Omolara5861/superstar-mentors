import React from "react";
import Wrapper from "../../../components/mentor-dashboard/wrapper/Wrapper";
import Image from "next/image";
const Archive = () => {
    const folders = [
        { name: "Cohort 1", category: "Music Students" },
        { name: "Fees payment", category: "Music Students" },
        { name: "Assignment (Cohort 1)", category: "Music Students" },
        { name: "Result Sheet", category: "Music Students" },
        { name: "Certificate", category: "Music Students" },
        { name: "Attendance", category: "Music Students" },
    ];

    return (
        <div>
            {/* Banner Section */}
            <div className="mt-5 p-6 bg-tertiary rounded-lg shadow-sm flex justify-between items-center mb-5 flex-col md:flex-row">
                <div className="text-[#F5F5F5]">
                    <p className="text-xl font-medium">
                        Preserving the past for a brighter <br /> future.
                    </p>
                </div>
                <Image src="/dashboard/archive-img.png" width={337.58} height={109.78} alt="Rolls" />
            </div>

            {/* Archive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-[92px] max-w-6xl m-auto">
                {folders.map((folder, index) => (
                    <div key={index} className="bg-[#f5f5f5] rounded border-b p-[5px] mb-2">
                        <div className="flex gap-2 items-center">
                            <Image width={30} height={30} src='/dashboard/folder.png' alt="Folder" className="h-fit" />
                            <div>
                                <h4 className=" font-medium text-text flex items-center">
                                    {folder.name}
                                </h4>
                                <p className="text-subtext">{folder.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wrapper(Archive);
