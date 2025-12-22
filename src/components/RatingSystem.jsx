import React from 'react';

const ratings = [
    { id: 'funny', label: '😂 Funny', value: 3, color: 'var(--success)' },
    { id: 'meh', label: '😐 Meh', value: 2, color: 'var(--warning)' },
    { id: 'bad', label: '🤮 Bad', value: 1, color: 'var(--danger)' },
];

const RatingSystem = ({ currentRating, onRate }) => {
    return (
        <div style={{
            display: 'flex',
            gap: '1rem',
            marginTop: '1.5rem',
            justifyContent: 'center'
        }}>
            {ratings.map((rate) => {
                const isSelected = currentRating === rate.value;
                return (
                    <button
                        key={rate.id}
                        onClick={() => onRate(rate.value)}
                        style={{
                            padding: '0.75rem 1.5rem',
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            backgroundColor: isSelected ? rate.color : 'var(--bg-card)',
                            color: isSelected ? '#fff' : 'var(--text-secondary)',
                            borderRadius: '50px',
                            border: `2px solid ${isSelected ? rate.color : 'transparent'}`,
                            transition: 'all 0.2s ease',
                            transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                            boxShadow: isSelected ? `0 0 15px ${rate.color}66` : 'none'
                        }}
                    >
                        {rate.label}
                    </button>
                );
            })}
        </div>
    );
};

export default RatingSystem;
