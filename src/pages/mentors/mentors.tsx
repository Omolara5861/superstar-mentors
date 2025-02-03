"use client"

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
    const [dropdownOpen, setDropdownOpen] = useState(false);
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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Mentors</h1>

            {/* Controls: Search, Sort, Filter */}
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8 gap-4">
                {/* Search Input */}
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search mentors..."
                    className="border border-gray-300 rounded-md p-2 w-full sm:w-1/3"
                />

                {/* Sort Dropdown */}
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as 'nameAsc' | 'nameDesc')}
                    className="border border-gray-300 rounded-md p-2"
                >
                    <option value="nameAsc">Sort by Name (A-Z)</option>
                    <option value="nameDesc">Sort by Name (Z-A)</option>
                </select>

                {/* Categories Filter Button */}
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="border border-gray-300 rounded-md p-2"
                    >
                        Categories
                    </button>
                    {dropdownOpen && (
                        <div className="absolute left-0 w-[537px] mt-2 bg-white rounded-xl shadow-lg z-10">
                            <div className="grid grid-cols-3 gap-4 pt-4 pb-6 px-6 text-sm">
                                {categories.map((cat, index) => (
                                    <Link key={index} href={`/mentors?category=${encodeURIComponent(cat)}`} className="hover:text-blue-500" >
                                    {cat}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mentor Grid */}
            {filteredMentors.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMentors.map((mentor, index) => (
                        <div key={index} className="rounded-[25px] overflow-hidden mentee">
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
                            <div className="py-[31px] text-center text-[#01100AB2] font-medium">
                                <p>{mentor.name}</p>
                                <p className="text-sm cont">{mentor.title}</p>
                                <Button href={`/book-session?mentor=${encodeURIComponent(mentor.name)}`} btnText='Book a Session' classnames='!py-2 mt-3 text-sm !px-3' />
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">No mentors found.</p>
            )}
        </div>
    );
};

export default MentorsPage;