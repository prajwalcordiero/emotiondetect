import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('student');

  function submit(e) {
    e.preventDefault();
    if (!name.trim()) return alert('Please enter your name');
    onLogin({ name: name.trim(), role });
  }

  return (
    <div className="flex flex-col items-center">
      <i data-lucide="brain-circuit" className="w-16 h-16 text-sky-500 mb-4"></i>
      <h1 className="text-3xl font-bold text-slate-800">Welcome to IntelliClass</h1>
      <p className="text-slate-500 mt-2">The future of interactive learning.</p>

      <form onSubmit={submit} className="mt-8 space-y-6 w-full">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">Your Name</label>
          <input id="name" value={name} onChange={e=>setName(e.target.value)} name="name" required
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            placeholder="e.g., Alex Doe" />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-700">Role</label>
          <select id="role" value={role} onChange={e=>setRole(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
          Enter Classroom
        </button>
      </form>
    </div>
  );
}
