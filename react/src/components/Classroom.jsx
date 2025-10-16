import React from 'react';

export default function Classroom({ user, onJoin }) {
  const joinText = user.role === 'teacher' ? 'Start Live Class' : 'Join Live Class';
  return (
    <div id="classroom-view">
      <header className="bg-white shadow-sm p-6">
        <h1 className="text-3xl font-bold">Introduction to Modern Physics</h1>
        <p className="text-slate-500 mt-1">Welcome! Here are the materials for our upcoming class.</p>
      </header>
      <div className="p-8">
        <button onClick={onJoin} className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-4 mb-8 text-lg font-semibold text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
          <i data-lucide="video" className="w-6 h-6"></i>
          <span id="join-meet-text">{joinText}</span>
        </button>

        <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <i data-lucide="file-text" className="w-8 h-8 text-sky-500 mb-3"></i>
            <h3 className="font-semibold text-lg">Lecture 1: Relativity</h3>
            <p className="text-slate-600 text-sm mt-1">Notes and slides from our first lecture.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <i data-lucide="file-video" className="w-8 h-8 text-indigo-500 mb-3"></i>
            <h3 className="font-semibold text-lg">Lab Recording: E=mc²</h3>
            <p className="text-slate-600 text-sm mt-1">Recording of the virtual lab session.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <i data-lucide="clipboard-list" className="w-8 h-8 text-amber-500 mb-3"></i>
            <h3 className="font-semibold text-lg">Assignment 1</h3>
            <p className="text-slate-600 text-sm mt-1">Due next Friday. Submit your work here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
