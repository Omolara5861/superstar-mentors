import React from "react";
import Wrapper from "../../../components/mentor-dashboard/wrapper/Wrapper";
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
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Banner Section */}
            <div className="bg-green-800 text-white rounded-lg p-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold max-w-lg">
                    Preserving the past for a brighter future.
                </h1>
                <img
                    src="https://via.placeholder.com/150" // Replace with actual illustration URL
                    alt="Books Illustration"
                    className="h-20"
                />
            </div>

            {/* Archive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
                {folders.map((folder, index) => (
                    <div
                        key={index}
                        className="flex items-center p-4 bg-white shadow-md rounded-lg cursor-pointer hover:bg-gray-100 transition"
                    >
                        FOlder IMAGE
                        <div>
                            <h2 className="font-bold text-lg">{folder.name}</h2>
                            <p className="text-gray-500 text-sm">{folder.category}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wrapper(Archive);
