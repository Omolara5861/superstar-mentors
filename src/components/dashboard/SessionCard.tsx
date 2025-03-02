import Image from "next/image";
import React from "react";

interface Avatar {
    id: number | string;
    src: string;
    alt?: string;
}

interface CardProps {
    title: string;
    subtitle?: string;
    isLive?: boolean;
    time?: string;           // NEW
    avatars?: Avatar[];
    filesCount?: number;
    mentorName?: string;
    mentorImage?: string;
}

const Card: React.FC<CardProps> = ({
    title,
    subtitle = "",
    isLive = false,
    time,
    avatars = [],
    filesCount = 0,
    mentorName,
    mentorImage,
}) => {
    return (
        <div className="relative flex flex-col rounded-lg bg-primary p-3 text-[#f5f5f5] text-sm font-semibold">
            {/* Top: Title & Live/Time Indicator */}
            <div className="flex justify-between items-center">
                <div>
                    {title}
                    <span className="ml-1">{subtitle}</span>
                </div>
                {isLive ? (
                    <div className="flex items-center">
                        <span className="mr-1 text-[#FB1515]">●</span> Live
                    </div>
                ) : time ? (
                    <span>{time}</span>
                ) : null}
            </div>

            {/* Avatars */}
            {avatars.length > 0 && (
                <div className="mt-2 flex">
                    {avatars.map((avatar) => (
                        <Image key={avatar.id} width={28.52} height={30} src={avatar.src}
                            alt={avatar.alt ?? "User Avatar"}
                            className="rounded-full borde border-[#f5f5f5] -ml-2 first:ml-0" />
                    ))}
                </div>
            )}

            {/* Files */}
            <div className="mt-2 flex items-center space-x-1">
                {/* Folder Icon */}
                <Image width={24} height={24} src='/dashboard/files.svg'
                    alt="Files" />
                <span>{filesCount} Files</span>
            </div>

            {/* Mentor */}
            {mentorName && (
                <div className="mt-2 flex gap-2 items-center">
                    {mentorImage && (
                        <Image width={24} height={24} src={mentorImage}
                            alt="Mentor" />
                    )}
                    <span>Mentor: {mentorName}</span>
                </div>
            )}
        </div>
    );
};

export default Card;
