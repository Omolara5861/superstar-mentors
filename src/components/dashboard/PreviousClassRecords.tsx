import React from "react";
import Image from "next/image";

interface PreviousClassRecordsProps {
    titles: string[];
    bg: string;
}

const PreviousClassRecords: React.FC<PreviousClassRecordsProps> = ({ titles, bg }) => {
    return (
        <div className={` p-[10px] rounded-lg ${bg}`}>
            <p className="font-medium text-center text-subtext mb-2">Previous Class Records</p>
            <div className="space-y-3">
                {titles.map((title, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between p-[10px] rounded-[10px] border-[0.5px] border-[#FFC145]"
                    >
                        <div>
                            <p className="text-sm text-text font-medium">{title}</p>
                            <p className="text-subtext text-sm my-2">Theory</p>
                            <div className="flex gap-2 items-center text-xs text-subtext">
                                <Image src="/dashboard/calendar.svg" width={24} height={24} alt="Calendar" />
                                <span>22/08/2024</span>
                            </div>
                        </div>
                        <button>
                            <Image src="/dashboard/play.svg" width={24} height={24} alt="Play" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PreviousClassRecords;