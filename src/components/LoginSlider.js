import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { login } from '../store/slices/userSlice';

const LoginSlider = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({ identifier: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!form.identifier || !form.password) {
      setError('All fields are required');
      return;
    }
    // Simulate login success
    dispatch(login({ identifier: form.identifier }));
    onClose();
  };

  return (
    <div className="fixed inset-x-0 inset-y-0 bottom-0 z-50 flex justify-center items-center pointer-events-none">
      {/* Blurred background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm pointer-events-auto" onClick={onClose}></div>
      
      <div className="bg-white w-full max-w-md mx-auto rounded-2xl shadow-2xl p-8 pb-6 animate-slide-in-up pointer-events-auto relative" style={{ minHeight: '340px' }}>
        <button className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="identifier"
            placeholder="Username / Email / Phone"
            value={form.identifier}
            onChange={handleChange}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            autoFocus
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded px-4 py-2 mt-2 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-500">Forgot password? | Sign up</div>
      </div>
      <style>{`
        @keyframes slide-in-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.35s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
};

export default LoginSlider; 