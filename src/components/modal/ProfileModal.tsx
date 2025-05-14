'use client';

import { useState, FormEvent } from 'react';
import { toast } from 'react-toastify';
import apiClient from '../../lib/apiClient';

export interface ProfileData {
  user: {
    username: string;
    email: string;
    role: string;
  };
  bio: string;
  career_goals: string;
  profile_complete: boolean;
}

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profileId?: string;              // present if editing
  initialData?: ProfileData;       // undefined if creating
  onSaved: (saved: ProfileData) => void;
  endpoint: '/mentee-profiles/' | '/mentor-profiles/';
}

export default function ProfileModal({
  isOpen,
  onClose,
  profileId,
  initialData,
  onSaved,
  endpoint,
}: ProfileModalProps) {
  const [form, setForm] = useState<ProfileData>(
    initialData || {
      user: { username: '', email: '', role: '' },
      bio: '',
      career_goals: '',
      profile_complete: false,
    }
  );
  const [saving, setSaving] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith('user.')) {
      const key = name.split('.')[1] as keyof ProfileData['user'];
      setForm((f) => ({ ...f, user: { ...f.user, [key]: value } }));
    } else {
      setForm((f) => ({ ...f, [name as keyof ProfileData]: value }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      let res;
      if (profileId) {
        res = await apiClient.patch<ProfileData>(
          `${endpoint}${profileId}/`,
          form
        );
      } else {
        res = await apiClient.post<ProfileData>(endpoint, form);
      }
      toast.success('Profile saved successfully');
      onSaved(res.data);
      onClose();
    } catch (err: any) {
      toast.error(err.response?.data?.detail || 'Failed to save profile');
    } finally {
      setSaving(false);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg max-w-lg w-full space-y-4"
      >
        <h2 className="text-xl font-bold">
          {profileId ? 'Edit Profile' : 'Create Profile'}
        </h2>

        {/* Username */}
        <div>
          <label className="block mb-1">Username</label>
          <input
            name="user.username"
            value={form.user.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            name="user.email"
            type="email"
            value={form.user.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block mb-1">Role</label>
          <select
            name="user.role"
            value={form.user.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select Role</option>
            <option value="Mentee">Mentee</option>
            <option value="Mentor">Mentor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        {/* Bio */}
        <div>
          <label className="block mb-1">Bio</label>
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            rows={3}
          />
        </div>

        {/* Career goals */}
        <div>
          <label className="block mb-1">Career goals</label>
          <textarea
            name="career_goals"
            value={form.career_goals}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            rows={2}
          />
        </div>

        {/* Profile complete */}
        <div className="flex items-center">
          <input
            id="profile_complete"
            name="profile_complete"
            type="checkbox"
            checked={form.profile_complete}
            onChange={(e) =>
              setForm((f) => ({ ...f, profile_complete: e.target.checked }))
            }
            className="mr-2"
          />
          <label htmlFor="profile_complete">Profile complete</label>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-primary text-white rounded disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
}
