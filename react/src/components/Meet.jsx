import React, { useEffect, useRef, useState } from 'react';
import ParticipantCard from './ParticipantCard';

export default function Meet({ user, students, onLeave }) {
  const [inactiveMap, setInactiveMap] = useState({});
  const aiRef = useRef(null);

  useEffect(() => {
    // start AI simulation only for teachers
    if (user.role === 'teacher') {
      aiRef.current = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * students.length);
        const randomStudent = students[randomIndex];
        // 20% chance to toggle
        if (Math.random() < 0.2) {
          setInactiveMap(prev => {
            const key = randomStudent.name.toLowerCase();
            const next = { ...prev, [key]: !prev[key] };
            console.log('AI toggle', randomStudent.name, next[key]);
            return next;
          });
        }
      }, 3000);
    }
    return () => {
      if (aiRef.current) {
        clearInterval(aiRef.current);
        aiRef.current = null;
      }
    };
  }, [user.role, students]);

  function leave() {
    if (aiRef.current) {
      clearInterval(aiRef.current);
      aiRef.current = null;
    }
    setInactiveMap({});
    onLeave();
  }

  return (
    <div id="meet-view" className="w-full h-full flex flex-col p-4 bg-slate-800">
      <div id="participants-grid" className="flex-1 grid gap-4 video-grid">
        <ParticipantCard name={user.name} avatar={user.name.charAt(0)} isUser inactive={!!inactiveMap[user.name.toLowerCase()]} />
        {students.map(s => (
          <ParticipantCard key={s.name} name={s.name} avatar={s.avatar} inactive={!!inactiveMap[s.name.toLowerCase()]} />
        ))}
      </div>

      <div className="h-20 bg-slate-900/50 backdrop-blur-sm mt-4 rounded-xl flex items-center justify-center gap-6">
        <button className="bg-slate-700 p-3 rounded-full text-white hover:bg-slate-600"><i data-lucide="mic"></i></button>
        <button className="bg-slate-700 p-3 rounded-full text-white hover:bg-slate-600"><i data-lucide="video"></i></button>
        <button id="leave-meet-btn" onClick={leave} className="bg-red-500 p-3 rounded-full text-white hover:bg-red-600"><i data-lucide="phone-off"></i></button>
      </div>
    </div>
  );
}
