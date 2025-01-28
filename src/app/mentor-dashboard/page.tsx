import React from "react";
import Wrapper from "../../components/mentor-dashboard/wrapper/Wrapper";
import Card from '../../components/dashboard/SessionCard';
const Dashboard = () => {
    // Example session data
    const sessions = [
        { part: "Music(Part 1)", time: "Live", mentor: "David" },
        { part: "Music(Part 2)", time: "10:00AM", mentor: "Sheik" },
        { part: "Music(Part 3)", time: "02:00PM", mentor: "Petra" },
        { part: "Music(Part 3)", time: "02:00PM", mentor: "Petra" },
    ];

    // Example avatar sets (adjust as needed)
    const avatarSets = [
        [
            { id: 1, src: "/images/person1.jpg" },
            { id: 2, src: "/images/person2.jpg" },
            { id: 3, src: "/images/person3.jpg" },
        ],
        [
            { id: 1, src: "/images/user1.jpg" },
            { id: 2, src: "/images/user2.jpg" },
            { id: 3, src: "/images/user3.jpg" },
        ],
        [
            { id: 1, src: "/images/user4.jpg" },
            { id: 2, src: "/images/user5.jpg" },
            { id: 3, src: "/images/user6.jpg" },
        ],
        [
            { id: 1, src: "/images/user4.jpg" },
            { id: 2, src: "/images/user5.jpg" },
            { id: 3, src: "/images/user6.jpg" },
        ],
    ];

    return (
        <div>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Today&apos;s Session</h1>
                <button className="px-6 py-2 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white">
                    Invite Mentees
                </button>
            </div>

            {/* Today's Session Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
                {sessions.map((session, index) => {
                    const isLive = session.time === "Live";
                    return (
                        <Card
                            key={index}
                            // Extract "Music" from "Music(Part x)" if you want separate title/subtitle
                            title="Music"
                            subtitle={session.part.replace("Music", "")}
                            isLive={isLive}
                            time={!isLive ? session.time : undefined}
                            filesCount={0}
                            mentorName={session.mentor}
                            mentorImage={`/images/${session.mentor.toLowerCase()}.jpg`}
                            avatars={avatarSets[index]} // optional
                        />
                    );
                })}
            </div>

            {/* Assignment Submitted */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-lg font-bold mb-4">Assignment Submitted</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                            {["STUDENT ID", "DATE OF SUBMISSION", "STATUS", "SCORES", "DOWNLOAD"].map((head, index) => (
                                <th key={index} className="text-left text-gray-600 font-semibold py-2">{head}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { name: "Damilola Joseph", date: "22/10/2024", status: "Completed", score: "70/100" },
                            { name: "Damilola Joseph", date: "22/10/2024", status: "Incomplete", score: "0" },
                            { name: "Damilola Joseph", date: "22/10/2024", status: "Pending", score: "-" },
                            { name: "Damilola Joseph", date: "22/10/2024", status: "Completed", score: "70/100" },
                        ].map((row, index) => (
                            <tr key={index} className="border-b">
                                <td className="py-3">{row.name}</td>
                                <td>{row.date}</td>
                                <td className={row.status === "Completed" ? "text-green-600" : row.status === "Incomplete" ? "text-red-600" : "text-yellow-500"}>
                                    {row.status}
                                </td>
                                <td>{row.score}</td>
                                <td>
                                    Download
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Messages */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Messages</h2>
                    {[
                        { mentee: "Mentee 1", message: "Hi, submit your assignment on Monday" },
                        { mentee: "Mentee 2", message: "Hi, submit your assignment on Monday" },
                        { mentee: "Mentee 5", message: "Hi, submit your assignment on Monday" },
                    ].map((msg, index) => (
                        <div key={index} className="mb-4 border-b pb-2">
                            <h4 className="font-bold">{msg.mentee}</h4>
                            <p className="text-sm text-gray-600">{msg.message}</p>
                        </div>
                    ))}
                </div>

                {/* Attendance */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">Attendance</h2>
                    <p className="text-sm mb-2">
                        <strong>On Time(0)</strong> <strong>Late(0)</strong> <strong>Absent(0)</strong>
                    </p>
                    <a href="#" className="text-green-600 text-sm mb-4 block hover:underline">View All Students</a>
                    {[
                        { mentee: "Mentee 3", course: "Videography", status: "On time", color: "text-green-500" },
                        { mentee: "Mentee 2", course: "Skit-makers", status: "On time", color: "text-green-500" },
                        { mentee: "Mentee 5", course: "Choreograph", status: "On time", color: "text-green-500" },
                        { mentee: "Mentee 1", course: "Dancer", status: "Absent", color: "text-red-500" },
                        { mentee: "Mentee 4", course: "Producer", status: "Absent", color: "text-red-500" },
                    ].map((att, index) => (
                        <div key={index} className="flex items-center mb-3">
                            <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                            <div>
                                <h4 className="font-bold">{att.mentee}</h4>
                                <p className="text-sm text-gray-600">
                                    {att.course} <span className={att.color}>• {att.status}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* My E-books & My Documents */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">My E-books</h2>
                    {[
                        { title: "Get inspired with doing things", author: "FordWells" },
                        { title: "Big Hands", author: "JerrySmith" },
                    ].map((ebook, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-3 mb-3">
                            <div>
                                <h4 className="font-bold">{ebook.title}</h4>
                                <p className="text-sm text-gray-600">By {ebook.author}</p>
                            </div>
                            <button className="text-gray-600">...</button>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4">My Documents</h2>
                    {[
                        { name: "Cohort 1", desc: "Music Students" },
                        { name: "Fees Payment List", desc: "Music Students" },
                    ].map((doc, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-3 mb-3">
                            <div>
                                <h4 className="font-bold flex items-center">
                                    Folder {doc.name}
                                </h4>
                                <p className="text-sm text-gray-600">{doc.desc}</p>
                            </div>
                            <button className="text-gray-600">...</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wrapper(Dashboard);
