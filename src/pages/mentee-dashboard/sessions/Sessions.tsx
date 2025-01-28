"use client"
import Image from 'next/image';
import Wrapper from '../../../components/mentee-dashboard/wrapper/Wrapper';
import Link from 'next/link';
import { useState } from 'react';
import SessionDetails from './Session2';
import UpcomingSessions from '../../../components/dashboard/UpcomingSessions';
import PreviousClassRecords from '../../../components/dashboard/PreviousClassRecords';

function SessionsPage() {
    const [sessionActive, setSessionActive] = useState(false);
    // Titles for the "Previous Class Records"
    const previousTitles = [
        "Steps in Videography",
        "How to Videograph your work",
        "How to handle your camera",
    ];

    // Titles for the "Upcoming Sessions"
    const upcomingSessionsList = [
        "Mentorship session with Omowunmi Dada",
        "Practical session in videography",
        "Practical session in videography",
        "Practical session in videography",
    ];
    return (
        <main className="flex-1 mt-3">

            {/* Conditional rendering based on sessionActive state */}
            {sessionActive ? (
                <SessionDetails />
            ) : (
                    <>

            {/* Current Session Header */}
            <div className="bg-white shadow-[0px_2px_4px_0px_#00000014] rounded-lg p-4 flex lg:flex-row flex-col items-center justify-between mb-6 border-[0.5px] border-primary">
                <div className="flex gap-2">
                    <Image src='/dashboard/img.svg' alt="Course" width={50} height={50} />
                    <div>
                        <p className="text-subtext">Introduction to Videography</p>
                        <p className="text-sm font-medium text-text">
                            Eze Babatunde (Lecturer in Charge)
                        </p>
                    </div>
                </div>
                <button className="px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-green-700" onClick={() => setSessionActive(true)}>
                    Join Session
                </button>
            </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Sessions Grid */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {Array(6)
                            .fill(0)
                            .map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-white border-[0.5px] border-[#6D6D6D38] rounded-[10px] p-4 shadow-[0px_2px_4px_0px_#0000000D]"
                                >
                                    <div className="h-40 bg-[#808182] rounded mb-4"></div>
                                    <p className="text-sm font-bold mb-2 text-text">
                                        Course name-Headline for a course
                                    </p>
                                    <div className="flex gap-2 my-2">
                                        <Image src='/dashboard/img.svg' alt="Course" width={50} height={50} />
                                        <div className='text-subtext '>
                                            <p className="text-sm">Rose Effiong</p>
                                            <p className="text-xs">
                                                Roseeffi@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <Link href='/' className="text-subtext font-medium underline">View Now</Link>
                                </div>
                            ))}
                    </div>

                    {/* Sidebar: Previous Records and Upcoming Sessions */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Previous Class Records */}
                                <PreviousClassRecords titles={previousTitles} />

                        {/* Upcoming Sessions */}
                                <UpcomingSessions sessions={upcomingSessionsList} />
                        
                    </div>
                        </div>
                    </>
            )}
        </main>
    );
}

export default Wrapper(SessionsPage);