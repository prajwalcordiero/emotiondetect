import React, { useEffect } from 'react';

export default function ParticipantCard({ name, avatar, isUser=false, inactive=false }) {
  useEffect(() => {
    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  }, [inactive]);

  const classes = [
    'participant-card',
    'relative',
    'aspect-video',
    'bg-slate-700',
    'rounded-lg',
    'overflow-hidden',
    'shadow-lg',
    'flex',
    'items-center',
    'justify-center'
  ];
  if (inactive) classes.push('inactive');

  return (
    <div id={`participant-${name.toLowerCase()}`} className={classes.join(' ')}>
      <img src={`https://placehold.co/400x300/1E293B/94A3B8?text=${name}`} className="w-full h-full object-cover" alt={name} />
      <div className="absolute bottom-2 left-2 bg-slate-900/50 text-white text-sm px-2 py-1 rounded-md">{name} {isUser ? '(You)' : ''}</div>
      <div className="inactive-overlay">
        <i data-lucide="alert-circle" className="w-8 h-8"></i>
        <p className="mt-2 font-semibold">Inactive</p>
      </div>
    </div>
  );
}
