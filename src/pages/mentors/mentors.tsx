"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Button from "../../components/button/Button";

interface Mentor {
    name: string;
    title: string;
    image: string;
    category: string;
}

const mentorsData: Mentor[] = [
    {
        name: 'Alice Johnson',
        title: 'Music Mentor  with Nollywood',
        image: '/mentors/mentor1.png',
        category: 'Music',
    },
    {
        name: 'Bob Smith',
        title: 'Comedy Coach  with Nollywood',
        image: '/mentors/mentor2.png',
        category: 'Comedy',
    },
    {
        name: 'Clara Davis',
        title: 'Theatre Expert  with Nollywood',
        image: '/mentors/mentor3.png',
        category: 'Theatre',
    },
    {
        name: 'Daniel Green',
        title: 'Film Director  with Nollywood',
        image: '/mentors/mentor4.png',
        category: 'Film Director',
    },
    {
        name: 'Eva Brown',
        title: 'Photography Guru  with Nollywood',
        image: '/mentors/mentor5.png',
        category: 'Photography',
    },
    {
        name: 'Eva Brown',
        title: 'Photography Guru  with Nollywood',
        image: '/mentors/mentor5.png',
        category: 'Photography',
    },
    {
        name: 'Eva Brown',
        title: 'Photography Guru  with Nollywood',
        image: '/mentors/mentor5.png',
        category: 'Photography',
    },
    {
        name: 'Eva Brown',
        title: 'Photography Guru  with Nollywood',
        image: '/mentors/mentor5.png',
        category: 'Photography',
    },
    {
        name: 'Eva Brown',
        title: 'Photography Guru  with Nollywood',
        image: '/mentors/mentor5.png',
        category: 'Photography',
    },
];

const categories = [
    'Music',
    'Performance Art',
    'Makeup Artist',
    'Comedy',
    'Producer',
    'Theatre',
    'Skit Makers',
    'Choreographer',
    'Cinematography',
    'Actors',
    'Film Director',
    'Photography',
];

const MentorsPage = () => {
    const searchParams = useSearchParams();
    const categoryQuery = searchParams?.get("category");

    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState<'nameAsc' | 'nameDesc'>('nameAsc');
    const [filteredMentors, setFilteredMentors] = useState<Mentor[]>(mentorsData);

    useEffect(() => {
        let results = [...mentorsData];

        // Filter by search query (matches name or title)
        if (searchQuery.trim() !== '') {
            results = results.filter((mentor) =>
                mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                mentor.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by category if the query parameter exists
        if (categoryQuery && typeof categoryQuery === 'string') {
            results = results.filter((mentor) => mentor.category === categoryQuery);
        }

        // Sort mentors by name
        results.sort((a, b) => {
            if (sortOption === 'nameAsc') {
                return a.name.localeCompare(b.name);
            }
            return b.name.localeCompare(a.name);
        });

        setFilteredMentors(results);
    }, [searchQuery, sortOption, categoryQuery]);

    return (
        <div className="container mx-auto p-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar */}
                <aside className="lg:w-1/4 bg-gray-50 p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto custom-scrollbar-hidden">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Filters</h2>
                    {/* Search Input */}
                    <div className="mb-6">
                        <label className="block font-medium text-gray-600 mb-2" htmlFor="search">
                            Search Mentors
                        </label>
                        <input
                            id="search"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search mentors..."
                            className="w-full px-4 py-3 rounded-full border-2 border-transparent bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-colors duration-300 hover:bg-gray-100"
                        />
                    </div>
                    {/* Sort Dropdown */}
                    <div className="mb-6">
                        <label className="block font-medium text-gray-600 mb-2" htmlFor="sort">
                            Sort By
                        </label>
                        <select
                            id="sort"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value as 'nameAsc' | 'nameDesc')}
                            className="w-full px-4 py-3 rounded-full border-2 border-transparent bg-white text-gray-800 shadow-md focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 hover:border-indigo-300"
                        >
                            <option value="nameAsc">Name (A-Z)</option>
                            <option value="nameDesc">Name (Z-A)</option>
                        </select>
                    </div>
                    {/* Categories Filter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-700">Categories</h3>
                        <div className="flex flex-col gap-2">
                            {/* "All" Category */}
                            <Link
                                href="/mentors"
                                className={`block px-4 py-2 rounded-md transition-colors duration-300 ${!categoryQuery
                                        ? "bg-primary text-white"
                                        : "bg-white text-gray-700 hover:bg-secondary hover:text-primary"
                                    }`}
                            >
                                All
                            </Link>
                            {categories.map((cat, index) => (
                                <Link
                                    key={index}
                                    href={`/mentors?category=${encodeURIComponent(cat)}`}
                                    className={`block px-4 py-2 rounded-md transition-colors duration-300 ${categoryQuery === cat
                                            ? "bg-primary text-white"
                                            : "bg-white text-gray-700 hover:bg-secondary hover:text-primary"
                                        }`}
                                >
                                    {cat}
                                </Link>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="lg:w-3/4">
                    {/* <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center lg:text-left">
                        Mentors
                    </h1> */}
                    {/* Scrollable grid container */}
                    <div className="overflow-auto max-h-[80vh] custom-scrollbar-hidden">
                        {filteredMentors.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                                {filteredMentors.map((mentor, index) => (
                                    <div
                                        key={index}
                                        className="rounded-[25px] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
                                    >
                                        {/* Mentor Image */}
                                        <div className="relative w-full">
                                            <Image
                                                src={mentor.image}
                                                alt={mentor.name}
                                                width={295}
                                                height={180}
                                                objectFit="cover"
                                                className="w-full"
                                            />
                                        </div>
                                        {/* Mentor Info */}
                                        <div className="py-[20px] text-center text-[#01100AB2] font-medium px-4">
                                            <p className="text-lg text-gray-800">{mentor.name}</p>
                                            <p className="text-sm text-gray-600">{mentor.title}</p>
                                            <Button
                                                href={`/book-session?mentor=${encodeURIComponent(mentor.name)}`}
                                                btnText="Book a Session"
                                                classnames="!py-2 mt-3 text-sm !px-3"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-500">No mentors found.</p>
                        )}
                    </div>
                </main>
            </div>

            {/* Global Styled JSX to Hide Scrollbars */}
            <style jsx global>{`
        .custom-scrollbar-hidden {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .custom-scrollbar-hidden::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
        </div>
    );
};

export default MentorsPage;