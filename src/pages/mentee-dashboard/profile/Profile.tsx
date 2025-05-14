// app/mentee-dashboard/profile/page.tsx   (or pages/mentee-dashboard/profile.tsx)
'use client';
import { useState, useEffect } from 'react';
import apiClient from '../../../lib/apiClient';
import { getUserId } from '../../../lib/jwtUtils';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import Wrapper from '../../../components/mentee-dashboard/wrapper/Wrapper';
import ProfileModal, { ProfileData } from '../../../components/modal/ProfileModal';

function MenteeProfilePage() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const token = Cookies.get('accessToken') || '';
  const userId = getUserId(token);

  useEffect(() => {
    if (!userId) return;
    apiClient
      .get<ProfileData>(`/mentee-profiles/${userId}/`)
      .then((res) => setProfile(res.data))
      .catch((err) => toast.error('Failed to load profile'))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) {
    return <div>Loading profile…</div>;
  }

  return (
    <main className="flex-1 p-6">
      <Wrapper>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">My Profile</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 bg-primary text-white rounded"
          >
            {profile ? 'Edit Profile' : 'Create Profile'}
          </button>
        </div>

        {/* Render current profile details */}
        {profile ? (
          <div className="space-y-4">
            <p>
              <strong>Username:</strong> {profile.user.username}
            </p>
            <p>
              <strong>Email:</strong> {profile.user.email}
            </p>
            <p>
              <strong>Role:</strong> {profile.user.role}
            </p>
            <p>
              <strong>Bio:</strong> {profile.bio}
            </p>
            <p>
              <strong>Career goals:</strong> {profile.career_goals}
            </p>
            <p>
              <strong>Profile complete:</strong>{' '}
              {profile.profile_complete ? 'Yes' : 'No'}
            </p>
          </div>
        ) : (
          <p>No profile found yet.</p>
        )}

        <ProfileModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          profileId={profile ? userId! : undefined}
          initialData={profile ?? undefined}
          onSaved={(saved) => setProfile(saved)}
          endpoint="/mentee-profiles/"
        />
      </Wrapper>
    </main>
  );
}

export default MenteeProfilePage;
