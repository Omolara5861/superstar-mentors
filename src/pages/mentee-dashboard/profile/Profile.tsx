"use client"
import { useState } from 'react';
import Image from 'next/image';
import Wrapper from '../../../components/mentee-dashboard/wrapper/Wrapper';

function ProfilePage() {
    const [editMode, setEditMode] = useState(false);
    const [profile, setProfile] = useState({
        firstName: 'Jack',
        lastName: 'Adams',
        email: 'jackadams@gmail.com',
        phone: '+2348065845686',
        bio: 'Videographer',
        country: 'Nigeria',
        cityState: 'Sokoto',
        houseAddress: 'No 3, Adu Street'
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const toggleEdit = () => {
        setEditMode(!editMode);
    };

    return (
        <main className="flex-1 p-6">
            <div className="text-sm text-gray-500 mb-4">
                Dashboard → <span className="text-gray-800 font-medium">Profile</span>
            </div>
            <h1 className="text-2xl font-bold mb-6">Profile</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center space-x-4 mb-6">
                    <Image src='/dashboard/profile.png' alt='Profile pic' width={80} height={80} />
                    <div>
                        <h2 className="text-xl font-semibold">{profile.firstName} {profile.lastName}</h2>
                        <p className="text-gray-500">{profile.bio}, {profile.cityState}, {profile.country}</p>
                    </div>
                    <button onClick={toggleEdit} className="ml-auto px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                        {editMode ? 'Save' : 'Edit'}
                    </button>
                </div>
                <section className="mb-6">
                    <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField label="First Name" name="firstName" value={profile.firstName} onChange={handleChange} editMode={editMode} />
                        <InputField label="Last Name" name="lastName" value={profile.lastName} onChange={handleChange} editMode={editMode} />
                        <InputField label="Email Address" name="email" type="email" value={profile.email} onChange={handleChange} editMode={editMode} />
                        <InputField label="Phone Number" name="phone" value={profile.phone} onChange={handleChange} editMode={editMode} />
                        <InputField label="Bio" name="bio" value={profile.bio} onChange={handleChange} editMode={editMode} isTextArea={true} />
                    </div>
                </section>
                <section>
                    <h3 className="text-lg font-semibold mb-4">Address</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <InputField label="Country" name="country" value={profile.country} onChange={handleChange} editMode={editMode} />
                        <InputField label="City/State" name="cityState" value={profile.cityState} onChange={handleChange} editMode={editMode} />
                        <InputField label="House Address" name="houseAddress" value={profile.houseAddress} onChange={handleChange} editMode={editMode} isTextArea={true} />
                    </div>
                </section>
            </div>
        </main>
    );
}

function InputField({ label, name, value, onChange, editMode, isTextArea = false }): any {
    return (
        <div>
            <label className="text-sm font-medium text-gray-600">{label}</label>
            {isTextArea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={!editMode}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    rows={isTextArea ? 3 : 1}
                />
            ) : (
                <input
                    type={name === 'email' ? 'email' : 'text'}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={!editMode}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                />
            )}
        </div>
    );
}

export default Wrapper(ProfilePage);
