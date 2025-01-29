import React from "react";
import Wrapper from "../../components/mentor-dashboard/wrapper/Wrapper";
import Card from '../../components/dashboard/SessionCard';
import Image from "next/image";
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
            { id: 1, src: "/dashboard/avatar1.png" },
            { id: 2, src: "/dashboard/avatar2.png" },
            { id: 3, src: "/dashboard/avatar3.png" },
        ],
        [
            { id: 1, src: "/dashboard/avatar1.png" },
            { id: 2, src: "/dashboard/avatar2.png" },
            { id: 3, src: "/dashboard/avatar3.png" },
        ],
        [
            { id: 1, src: "/dashboard/avatar1.png" },
            { id: 2, src: "/dashboard/avatar2.png" },
            { id: 3, src: "/dashboard/avatar3.png" },
        ],
        [
            { id: 1, src: "/dashboard/avatar1.png" },
            { id: 2, src: "/dashboard/avatar2.png" },
            { id: 3, src: "/dashboard/avatar3.png" },
        ],
    ];

    return (
        <div className="flex gap-5">
            <div className="w-9/12" >
            {/* Header */}
            <div className="flex justify-between items-center mt-3 mb-6">
                <h5 className="text-base font-semibold text-text">Today&apos;s Session</h5>
                <button
                                    className=" rounded-lg bg-[#fff] bg-transparent border border-primary py-2 px-3 w-[168px] h-[54px] text-primary font-medium"
                                >
                                    Invite Mentees
                                </button>
            </div>

            {/* Today's Session Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
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
                            mentorImage={`/dashboard/mentor.png`}
                            avatars={avatarSets[index]}
                        />
                    );
                })}
            </div>
                {/* Assignment Submitted */}
                <div className="bg-transparent p-4 border rounded-lg mt-8 mb-4">
                    <h5 className="text-base font-semibold text-text mb-5">Assignment Submitted</h5>
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b">
                                {["STUDENT ID", "DATE OF SUBMISSION", "STATUS", "SCORES", "DOWNLOAD"].map((head, index) => (
                                    <th key={index} className="text-left text-primary font-bold pb-4 pt-3 uppercase text-sm">{head}</th>
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
                                <tr key={index} className="border-b text-xs text-subtext font-medium">
                                    <td className="py-4">{row.name}</td>
                                    <td>{row.date}</td>
                                    <td className={row.status === "Completed" ? "text-green-600" : row.status === "Incomplete" ? "text-[#FB1515]" : "text-[#FFC145]"}>
                                        {row.status}
                                    </td>
                                    <td>{row.score}</td>
                                    <td>
                                        <Image width={24} height={24} src='/dashboard/download1.svg' alt="Dounload" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                    {/* My E-books & My Documents */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                        <div>
                            <h5 className="text-base font-semibold text-text mb-5">My E-books</h5>
                            {[
                                { title: "Get inspired with doing things", author: "FordWells" },
                                { title: "Big Hands", author: "JerrySmith" },
                            ].map((ebook, index) => (
                                <div key={index} className="bg-white rounded flex justify-between items-center border-b p-[5px] mb-2">
                                    <div className="flex gap-2">
                                        <Image width={40} height={40} src='/dashboard/author.png' alt="Author" />
                                        <div>
                                            <h4 className=" font-medium text-text">{ebook.title}</h4>
                                            <p className="text-subtext">By {ebook.author}</p>
                                        </div>
                                    </div>
                                    <Image width={24} height={24} src='/dashboard/dots.svg' alt="More Icon" />
                                </div>
                            ))}
                        </div>

                        <div>
                        <h5 className="text-base font-semibold text-text mb-5">My Documents</h5>
                            {[
                                { name: "Cohort 1", desc: "Music Students" },
                                { name: "Fees Payment List", desc: "Music Students" },
                            ].map((doc, index) => (
                                <div key={index} className="bg-white rounded flex justify-between items-center border-b p-[5px] mb-2">
                                    <div className="flex gap-2">
                                        <Image width={40} height={40} src='/dashboard/author.png' alt="Author" />
                                    <div>
                                        <h4 className=" font-medium text-text flex items-center">
                                            Folder {doc.name}
                                        </h4>
                                        <p className="text-subtext">{doc.desc}</p>
                                    </div>
                                    </div>
                                    <Image width={24} height={24} src='/dashboard/dots.svg' alt="More Icon" />
                                </div>
                            ))}
                        </div>
                    </div>

           </div>
           <div className=" w-1/4">
                    {/* Messages */}
                    <div className="bg-white p-3 rounded-lg mb-4">
                        <h5 className="text-base font-semibold text-text mb-5">Messages</h5>
                        {[
                            { mentee: "Mentee 1", message: "Hi, submit your assignment on Monday", author: '/dashboard/author.png' },
                            { mentee: "Mentee 2", message: "Hi, submit your assignment on Monday", author: '/dashboard/author.png' },
                            { mentee: "Mentee 5", message: "Hi, submit your assignment on Monday", author: '/dashboard/author.png' },
                        ].map((msg, index) => (
                            <div key={index} className="bg-[#f5f5f5] rounded border-b p-[5px] mb-2">
                                <div className="flex gap-2 items-center">
                                    <Image width={40} height={40} src={msg.author} alt="Author" className="h-fit" />
                                    <div>
                                        <h4 className=" font-medium text-text flex items-center">
                                            {msg.mentee}
                                        </h4>
                                        <p className="text-subtext">{msg.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Attendance */}
                    <div className="bg-white border p-3 rounded-lg">
                    <h5 className="text-base font-semibold text-text">Attendance</h5>
                        <div className="flex justify-between text-sm mb-2 text-text font-medium my-6">
                        <p> On Time(0)</p> <p>Late(0)</p> <p>Absent(0)</p>
                        </div>
                    <a href="#" className="text-[#FFC145] text-xs mb-4 block underline">View All Students</a>
                        {[
                            { author: '/dashboard/author.png', mentee: "Mentee 3", course: "Videography", status: "On time", color: "text-[#FFC145]" },
                            { author: '/dashboard/author.png', mentee: "Mentee 2", course: "Skit-makers", status: "On time", color: "text-[#FFC145]" },
                            { author: '/dashboard/author.png', mentee: "Mentee 5", course: "Choreograph", status: "On time", color: "text-[#FFC145]" },
                            { author: '/dashboard/author.png', mentee: "Mentee 1", course: "Dancer", status: "Absent", color: "text-[#FB1515]" },
                            { author: '/dashboard/author.png', mentee: "Mentee 4", course: "Producer", status: "Absent", color: "text-[#FB1515]" },
                        ].map((att, index) => (
                            <div key={index} className=" rounded flex justify-between items-center border-b last:border-none p-[5px] mb-2">
                                <div className="flex gap-2 items-center">
                                    <Image width={40} height={40} src={att.author} alt="Author" className="h-fit" />
                                    <div>
                                        <h4 className=" font-medium text-text flex items-center">
                                            Folder {att.mentee}
                                        </h4>
                                        <p className="text-subtext">{att.course}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <span className={`mr-1 ${att.color}`}>●</span> {att.status}
                                </div>
                            </div>
                        ))}
                    </div>
           </div>
        </div>
    );
};

export default Wrapper(Dashboard);
