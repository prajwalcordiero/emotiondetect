import React, { useState, useRef, useEffect } from 'react';
import LoginView from './components/Login';
import Sidebar from './components/Sidebar';
import Classroom from './components/Classroom';
import Meet from './components/Meet';

export default function App() {
  const [view, setView] = useState('login'); // 'login' | 'main' 
  const [currentUser, setCurrentUser] = useState({ name: 'Guest', role: 'student' });
  const [inMeet, setInMeet] = useState(false);
  const [students] = useState([
    { name: 'Ben', avatar: 'B' },
    { name: 'Charlie', avatar: 'C' },
    { name: 'Dana', avatar: 'D' },
    { name: 'Eve', avatar: 'E' },
    { name: 'Frank', avatar: 'F' },
  ]);

  // keep lucide icons rendered when DOM updates
  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, [view, inMeet, currentUser]);

  function handleLogin(user) {
    setCurrentUser(user);
    setView('main');
  }

  function handleJoinMeet() {
    setInMeet(true);
  }

  function handleLeaveMeet() {
    setInMeet(false);
  }

  return (
    <div id="app" className="h-screen w-screen flex items-center justify-center transition-all duration-500">
      {view === 'login' && (
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
          <LoginView onLogin={handleLogin} />
        </div>
      )}

      {view === 'main' && (
        <div className="hidden md:flex w-full h-full flex">
          <Sidebar user={currentUser} />
          <main className="flex-1 bg-slate-50 overflow-y-auto">
            {!inMeet ? (
              <Classroom user={currentUser} onJoin={handleJoinMeet} />
            ) : (
              <Meet user={currentUser} students={students} onLeave={handleLeaveMeet} />
            )}
          </main>
        </div>
      )}

      {/* Mobile/layout fallback: show both views stacked when in main */}
      {view === 'main' && (
        <div className={`w-full h-full ${inMeet ? 'hidden' : 'block'} md:hidden p-4`}>
          {!inMeet ? (
            <Classroom user={currentUser} onJoin={handleJoinMeet} />
          ) : (
            <Meet user={currentUser} students={students} onLeave={handleLeaveMeet} />
          )}
        </div>
      )}
    </div>
  );
}
