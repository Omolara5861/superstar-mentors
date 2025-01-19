"use client"
import Image from 'next/image';
import Wrapper from '../../../components/mentee-dashboard/wrapper/Wrapper';
import Link from 'next/link';
import { useState } from 'react';
import SessionDetails from './Session2';

function SessionsPage() {
    const [sessionActive, setSessionActive] = useState(false);

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
                        <div className='bg-white p-[10px] rounded-lg'>
                            <p className="font-medium text-center text-subtext mb-2">Previous Class Records</p>
                            <div className="space-y-3">
                                {["Steps in Videography", "How to Videograph your work", "How to handle your camera"].map(
                                    (title, index) => (
                                        <div key={index} className="flex items-center justify-between p-[10px] rounded-[10px] bg-white border-[0.5px] border-[#FFC145]">
                                            <div>
                                                <p className="text-sm text-text font-medium">
                                                    {title}
                                                </p>
                                                <p className='text-subtext text-sm my-2'>Theory</p>
                                                <div className="flex gap-2 items-center text-xs text-subtext">
                                                    <Image src="/dashboard/calendar.svg" width={24} height={24} alt="Calendar" />
                                                    <span>22/08/2024</span>
                                                </div>
                                            </div>
                                            <button >
                                                <Image src="/dashboard/play.svg" width={24} height={24} alt="Play" />
                                            </button>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        {/* Upcoming Sessions */}
                        <div className="bg-white p-[18px] rounded-lg">
                            <p className="font-medium text-center text-subtext mb-2">Upcoming Sessions</p>
                            <div className="space-y-3">
                                {["Mentorship session with Omowunmi Dada", "Practical session in videography", "Practical session in videography", "Practical session in videography"].map(
                                    (title, index) => (
                                        <div
                                            key={index}
                                            className={`flex justify-between rounded-[4px] p-[13px] text-sm rounded-s
                                            shadow-[0px_4px_4px_0px_#00000014] ${index === 0 ? 'bg-gradient-to-r from-[#006A50] to-[#FFC145] text-[#F1FFFB]' : 'bg-white text-text'}`}
                                        >
                                            <p className="font-medium max-w-[50%]">{title}</p>
                                            <p>9AM - 10AM <br /> 22/08/2024</p>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                        </div>
                    </>
            )}
        </main>
    );
}

export default Wrapper(SessionsPage);