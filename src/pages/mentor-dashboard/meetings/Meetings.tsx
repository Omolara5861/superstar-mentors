"use client"
import React, { useState } from "react";
import Wrapper from "../../../components/mentor-dashboard/wrapper/Wrapper";

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
        <div className="p-4 bg-gray-100 min-h-screen">
            {/* Call Info Bar */}
            <div className="flex justify-between items-center bg-white p-3 rounded-md shadow-md mb-4 text-sm">
                <span>
                    Invited to the call <span className="font-bold text-green-600">11</span>
                </span>
                <span className="text-red-600">● Recording <span className="text-gray-600">01:00:56</span></span>
                <span>
                    Chat <span className="font-bold">0</span>
                </span>
                <span>
                    Attendee <span className="font-bold">0</span>
                </span>
            </div>

            {/* Video Call Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Main Video */}
                <div className="md:col-span-2 bg-white p-4 rounded-md shadow-md">
                    <div className="w-full h-72 bg-gray-300 rounded-md mb-4"></div>

                    {/* Participants */}
                    <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((_, index) => (
                            <div key={index} className="relative w-full h-24 bg-gray-300 rounded-md">
                                {/* <FaMicrophoneSlash className="absolute top-2 right-2 text-gray-600" /> */}
                            </div>
                        ))}
                    </div>

                    {/* Call Controls */}
                    <div className="flex justify-center space-x-4 mt-4">
                        <button className="p-3 bg-gray-300 rounded-full hover:bg-gray-400">
                            {/* <FaMicrophone className="text-gray-700" /> */}
                        </button>
                        <button className="p-3 bg-gray-300 rounded-full hover:bg-gray-400">
                            {/* <FaVideo className="text-gray-700" /> */}
                        </button>
                        <button className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700">
                            {/* <FaPhoneSlash /> */}
                        </button>
                        <button className="p-3 bg-gray-300 rounded-full hover:bg-gray-400">
                            {/* <FaDownload className="text-gray-700" /> */}
                        </button>
                        <button className="p-3 bg-gray-300 rounded-full hover:bg-gray-400">
                            {/* <FaUsers className="text-gray-700" /> */}
                        </button>
                    </div>
                </div>

                {/* Chat Panel */}
                <div className="bg-white p-4 rounded-md shadow-md flex flex-col justify-between">
                    <h3 className="text-lg font-bold mb-4">Chat</h3>
                    <div className="flex-1 space-y-3 overflow-y-auto max-h-72">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === "mentor" ? "justify-end" : ""}`}>
                                <div className={`p-3 rounded-lg max-w-xs ${msg.role === "mentor" ? "bg-green-700 text-white" : "bg-green-100 text-gray-800"}`}>
                                    <h4 className="font-bold text-sm">{msg.sender}</h4>
                                    <p className="text-sm">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <div className="flex items-center space-x-3 mt-4">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button onClick={sendMessage} className="p-3 bg-green-600 text-white rounded-full hover:bg-green-700">
                            {/* <FaPaperPlane /> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wrapper(Meeting);