import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { logout } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const user = useAppSelector(state => state.user.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="mb-4">
        <span className="font-semibold">Identifier:</span> {user?.identifier || 'N/A'}
      </div>
      <button
        onClick={handleLogout}
        className="bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded px-4 py-2 mt-2 transition-colors"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage; 