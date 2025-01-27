"use client"
import { useState } from 'react';
import Image from 'next/image';
import Wrapper from '../../../components/mentee-dashboard/wrapper/Wrapper';

interface Profile {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bio: string;
    country: string;
    cityState: string;
    houseAddress: string;
}

function ProfilePage() {
    const [editMode, setEditMode] = useState<{ personal: boolean; address: boolean; profile: boolean }>({
        personal: false,
        address: false,
        profile: false
    });
    const [profile, setProfile] = useState<Profile>({
        firstName: 'Jack',
        lastName: 'Adams',
        email: 'jackadams@gmail.com',
        phone: '+2348065845686',
        bio: 'Videographer',
        country: 'Nigeria',
        cityState: 'Sokoto',
        houseAddress: 'No 3, Adu Street'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = (section: keyof typeof editMode) => {
        console.log('Save', section);
        setEditMode(prev => ({ ...prev, [section]: false }));
    };

    const handleEdit = (section: keyof typeof editMode) => {
        setEditMode(prev => ({ ...prev, [section]: true }));
    };

    return (
        <main className="flex-1 p-6">
            <div>
                <section className="border-gray-300 border-[0.5px] p-5 rounded-lg bg-white flex items-center space-x-4 mb-6">
                    <Image src='/dashboard/profile.png' alt='Profile pic' width={80} height={80} />
                    <div className="flex-grow">
                        <h3 className="text-xl font-medium">{profile.firstName} {profile.lastName}</h3>
                        <p className="text-subtext">{profile.bio}</p>
                        <p className="text-subtext">{profile.cityState}, {profile.country}</p>
                    </div>
                    <div className="flex space-x-2">
                        <button onClick={() => handleEdit('profile')} className="px-2 flex gap-2 w-[82px] py-2 bg-transparent border-[0.3px] border-gray-300 text-subtext rounded">
                            <Image
                                                    src="/dashboard/edit.svg"
                                                    alt="Sort Icon"
                                                    width={24}
                                                    height={24}
                                                    className="self-center"
                                                /> Edit</button>
                        <button onClick={() => handleSave('profile')} className="px-2 w-[82px] py-2 bg-primary text-white rounded">Save</button>
                    </div>
                </section>
                <section className="border-gray-300 border-[0.5px]  flex justify-between items-start p-5 rounded-lg bg-white mb-6">
                    <div>
                        <h3 className="text-lg font-medium mb-4">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField label="First Name" name="firstName" value={profile.firstName} onChange={handleChange} editMode={editMode.personal} />
                            <InputField label="Last Name" name="lastName" value={profile.lastName} onChange={handleChange} editMode={editMode.personal} />
                            <InputField label="Email Address" name="email" value={profile.email} onChange={handleChange} editMode={editMode.personal} />
                            <InputField label="Phone Number" name="phone" value={profile.phone} onChange={handleChange} editMode={editMode.personal} />
                            <InputField label="Bio" name="bio" value={profile.bio} onChange={handleChange} editMode={editMode.personal} isTextArea={true} />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                        <button onClick={() => handleEdit('personal')} className="px-2 flex gap-2 w-[82px] py-2 bg-transparent border-[0.3px] border-gray-300 text-subtext rounded">
                            <Image
                                                    src="/dashboard/edit.svg"
                                                    alt="Sort Icon"
                                                    width={24}
                                                    height={24}
                                                    className="self-center"
                                                /> Edit</button>
                        <button onClick={() => handleSave('personal')} className="px-2 w-[82px] py-2 bg-primary text-white rounded">Save</button>
                    </div>
                </section>
                <section className="border-gray-300 border-[0.5px] bg-white flex justify-between items-start p-5 rounded-lg">
                    <div>
                        <h3 className="text-lg font-medium mb-4">Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField label="Country" name="country" value={profile.country} onChange={handleChange} editMode={editMode.address} />
                            <InputField label="City/State" name="cityState" value={profile.cityState} onChange={handleChange} editMode={editMode.address} />
                            <InputField label="House Address" name="houseAddress" value={profile.houseAddress} onChange={handleChange} editMode={editMode.address} isTextArea={true} />
                        </div>
                   </div>
                    <div className="flex justify-end space-x-2 mt-4">
                        <button onClick={() => handleEdit('address')} className="px-2 flex gap-2 w-[82px] py-2 bg-transparent border-[0.3px] border-gray-300 text-subtext rounded">
                            <Image
                                                    src="/dashboard/edit.svg"
                                                    alt="Sort Icon"
                                                    width={24}
                                                    height={24}
                                                    className="self-center"
                                                /> Edit</button>
                        <button onClick={() => handleSave('address')} className="px-2 w-[82px] py-2 bg-primary text-white rounded">Save</button>
                    </div>
                </section>
            </div>
        </main>
    );
}

interface InputFieldProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    editMode: boolean;
    isTextArea?: boolean;
}

function InputField({ label, name, value, onChange, editMode, isTextArea = false }: InputFieldProps) {
    return (
        <div className="mb-4">
            <label className="font-medium text-text block mb-1">{label}</label>
            {isTextArea ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={!editMode}
                    className="mt-1 block w-full text-subtext px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    rows={3}
                />
            ) : (
                <input
                    type={name === 'email' ? 'email' : 'text'}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={!editMode}
                    className="mt-1 block w-full text-subtext px-3 py-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
            )}
        </div>
    );
}

export default Wrapper(ProfilePage);