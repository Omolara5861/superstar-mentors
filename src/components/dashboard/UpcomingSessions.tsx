import React from "react";

interface UpcomingSessionsProps {
    sessions: string[];
}

const UpcomingSessions: React.FC<UpcomingSessionsProps> = ({ sessions }) => {
    return (
        <div className="bg-white p-[18px] rounded-lg">
            <p className="font-medium text-center text-subtext mb-2">Upcoming Sessions</p>
            <div className="space-y-3">
                {sessions.map((title, index) => (
                    <div
                        key={index}
                        className={`flex justify-between rounded-[4px] p-[13px] text-sm rounded-s
              shadow-[0px_4px_4px_0px_#00000014] ${index === 0
                                ? "bg-gradient-to-r from-[#006A50] to-[#FFC145] text-[#F1FFFB]"
                                : "bg-white text-text"
                            }`}
                    >
                        <p className="font-medium max-w-[50%]">{title}</p>
                        <p>
                            9AM - 10AM <br /> 22/08/2024
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingSessions;