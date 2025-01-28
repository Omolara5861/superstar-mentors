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
        <div className="relative flex flex-col w-72 rounded-lg bg-green-600 p-4 text-white">
            {/* Top: Title & Live/Time Indicator */}
            <div className="flex justify-between items-center">
                <div className="text-lg font-semibold">
                    {title}
                    <span className="ml-1 text-sm font-normal">{subtitle}</span>
                </div>
                {isLive ? (
                    <div className="flex items-center text-red-500 text-sm font-semibold">
                        <span className="mr-1">●</span> Live
                    </div>
                ) : time ? (
                    <span className="text-sm text-gray-100">{time}</span>
                ) : null}
            </div>

            {/* Avatars */}
            {avatars.length > 0 && (
                <div className="mt-2 flex">
                    {avatars.map((avatar) => (
                        <Image key={avatar.id} width={30} height={30} src={avatar.src}
                            alt={avatar.alt ?? "User Avatar"}
                            className="h-8 w-8 rounded-full border-2 border-white -ml-2 first:ml-0" />
                    ))}
                </div>
            )}

            {/* Files */}
            <div className="mt-4 flex items-center space-x-2 text-sm">
                {/* Folder Icon */}
                <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v6.5a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                    />
                </svg>
                <span>{filesCount} Files</span>
            </div>

            {/* Mentor */}
            {mentorName && (
                <div className="mt-4 flex items-center text-sm">
                    {mentorImage && (
                        <Image width={24} height={24} src={mentorImage}
                            alt="Mentor"
                            className="h-8 w-8 rounded-full border-2 border-white mr-2" />
                    )}
                    <span>Mentor: {mentorName}</span>
                </div>
            )}
        </div>
    );
};

export default Card;
