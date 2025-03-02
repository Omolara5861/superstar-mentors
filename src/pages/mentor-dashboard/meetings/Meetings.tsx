"use client"
import React, { useState } from "react";
import Wrapper from "../../../components/mentor-dashboard/wrapper/Wrapper";
import Image from "next/image";

const Meeting = () => {
    const [messages, setMessages] = useState([
        { sender: "Mentee 1", text: "Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor.", role: "mentee" },
        { sender: "Mentor", text: "Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor.", role: "mentor" },
        { sender: "Mentee 1", text: "Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor.", role: "mentee" },
        { sender: "Mentor", text: "Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor.", role: "mentor" },
    ]);

    const [newMessage, setNewMessage] = useState("");

    const sendMessage = () => {
        if (newMessage.trim() !== "") {
            setMessages([...messages, { sender: "You", text: newMessage, role: "mentee" }]);
            setNewMessage("");
        }
    };

    return (
        <div>
            {/* Video Call Section */}
            <div className="flex gap-5">
                <div className="w-9/12" >
                    <div className="flex border-[0.5px] text-xs text-subtext border-gray-300 justify-between items-center bg-white p-3 rounded-md mt-5 h-[50px] mb-4">
                        <span>
                            Invited to the call <span className="font-semibold text-primary bg-[#f5f5f5] w-5 h-5 inline-block text-center rounded-[2px]">11</span>
                        </span>
                        <p>
                            Recording<br />
                            <span className="text-[#FB1515]">● </span> 01:00:56
                        </p>
                    </div>

                {/* Main Video */}
                <div className="md:col-span-2 bg-white border-[0.5px] border-gray-300 p-6 rounded-lg">
                    <div className="flex gap-5">
                        <div className="w-[70%] h-[480px] border-2 bg-subtext rounded-lg mb-4" style={{
                            borderImageSource: 'linear-gradient(90deg, #205924 0%, #FFC145 100%)',
                            borderImageSlice: 1,
                        }}></div>

                        
                        <div className="w-[30%]">
                        {/* Participants */}
                        <div>
                            {[1, 2, 3].map((_, index) => (
                                <div key={index} className="relative w-full h-[150px] bg-subtext rounded-lg mb-[15px]" >
                                    {/* <FaMicrophoneSlash className="absolute top-2 right-2 text-gray-600" /> */}
                                </div>
                            ))}
                        </div>
                        </div>
                  </div>

                    {/* Call Controls */}
                    <div className="flex justify-center space-x-6 mt-4 mb-11">
                        <Image src='/dashboard/audio.svg' alt="Audio" width={40} height={40} />
                        <Image src='/dashboard/video.svg' alt="Audio" width={40} height={40} />
                        <Image src='/dashboard/mute.svg' alt="Audio" width={40} height={40} />
                        <Image src='/dashboard/end.svg' alt="Audio" width={40} height={40} />
                        <Image src='/dashboard/download.svg' alt="Audio" width={40} height={40} />
                        <Image src='/dashboard/members.svg' alt="Audio" width={40} height={40} />
                    </div>
                </div>
                </div>

                {/* Chat Panel */}
                <div className="w-3/12">
                    {/* Chat Info Bar */}
                    <div className="flex border-[0.5px] text-xs text-subtext border-gray-300 justify-between items-center bg-white p-3 rounded-md mt-5 h-[50px] mb-4">
                        <span>
                            Chat <span className="font-semibold text-primary bg-[#f5f5f5] w-5 h-5 inline-block text-center rounded-[2px]">0</span>
                        </span>
                        <span>
                            Attendee <span className="font-semibold text-primary bg-[#f5f5f5] w-5 h-5 inline-block text-center rounded-[2px]">0</span>
                        </span>
                    </div>
                <div className="bg-white border-[0.5px] border-gray-300 p-6 rounded-lg flex flex-col justify-between">
                    <div className="flex-1 space-y-3 overflow-y-auto max-h-[570px]">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === "mentor" ? "justify-end" : ""}`}>
                                <div className={`p-5 mb-[50px] rounded-lg max-w-xs relative ${msg.role === "mentor" ? "bg-primary text-[#F5F5F5]" : "bg-background text-subtext"}`}>
                                    <ProfileImage role={msg.role} />
                                    <h6 className="font- medium text-xs mt-2">{msg.sender}</h6>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <div className="flex items-center space-x-3 mt-2">
                        <input
                            type="text"
                            placeholder="Type a message..."
                                className="flex-1 px-3 py-2 focus:outline-none focus:ring-0"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                        />
                            <div className="flex justify-center space-x-2">
                                <Image src='/dashboard/add.svg' alt="Add" width={40} height={40} />
                                <Image src='/dashboard/send.svg' alt="Send" width={40} height={40} />
                                <Image src='/dashboard/mute.svg' alt="Mute" width={40} height={40} />
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Wrapper(Meeting);

interface ProfileImgProps {
    role: string;
}

const ProfileImage: React.FC<ProfileImgProps> = ({ role }) => {
    const imagePath = role === "mentor" ? "dashboard/msgprofile1.png" : "dashboard/msgprofile2.png";
    const positionClass = role === "mentor" ? "left-5" : "right-5"; // Adjust positioning dynamically

    return (
        <Image
            src={`/${imagePath}`}
            alt="Profile"
            width={50}
            height={50}
            className={`absolute z-20 -top-6 ${positionClass}`}
        />
    );
};
