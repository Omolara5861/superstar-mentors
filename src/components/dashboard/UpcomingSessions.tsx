import React from "react";

interface UpcomingSessionsProps {
    sessions: string[];
    bg: string;
}

const UpcomingSessions: React.FC<UpcomingSessionsProps> = ({ sessions, bg }) => {
    return (
        <div className={`p-[10px] rounded-lg ${bg}`}>
            <p className="font-medium text-center text-subtext mb-2">Upcoming Sessions</p>
            <div className="space-y-3">
                {sessions.map((title, index) => (
                    <div
                    key={index}
                        style={{
                            borderImageSource: 'linear-gradient(90deg, #205924 0%, #FFC145 100%)',
                            borderImageSlice: 1,
                        }}
                        className={`rounded flex justify-between p-[13px] text-sm
              shadow-[0px_4px_4px_0px_#00000014] border border-transparent ${index === 0
                                ? "bg-gradient-to-r from-[#006A50] to-[#FFC145] text-[#F1FFFB]"
                                : " text-text"
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