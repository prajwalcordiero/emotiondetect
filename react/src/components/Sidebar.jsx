import React from 'react';

export default function Sidebar({ user }) {
  const avatarChar = user.name ? user.name.charAt(0).toUpperCase() : 'A';
  return (
    <aside className="w-64 bg-white shadow-md flex-shrink-0 flex flex-col">
      <div className="h-16 flex items-center justify-center border-b">
        <i data-lucide="brain-circuit" className="w-8 h-8 text-sky-500 mr-2"></i>
        <span className="text-xl font-bold">IntelliClass</span>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <a href="#" className="flex items-center px-4 py-2 text-slate-700 bg-sky-100 rounded-lg">
          <i data-lucide="layout-dashboard" className="w-5 h-5 mr-3"></i> Dashboard
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg">
          <i data-lucide="book-open" className="w-5 h-5 mr-3"></i> Courses
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg">
          <i data-lucide="calendar" className="w-5 h-5 mr-3"></i> Schedule
        </a>
      </nav>
      <div className="p-4 border-t">
        <div id="user-profile" className="flex items-center">
          <img id="user-avatar" src={`https://placehold.co/40x40/E2E8F0/475569?text=${avatarChar}`} className="rounded-full" alt="avatar" />
          <div className="ml-3">
            <p id="user-name" className="font-semibold text-sm">{user.name}</p>
            <p id="user-role" className="text-xs text-slate-500 capitalize">{user.role}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
