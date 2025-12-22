import React, { useState } from 'react';

const MemeCard = ({ meme }) => {
    const [loading, setLoading] = useState(true);

    if (!meme) return null;

    return (
        <div style={{
            backgroundColor: 'var(--bg-card)',
            padding: '1rem',
            borderRadius: 'var(--border-radius)',
            boxShadow: 'var(--shadow-lg)',
            width: '100%',
            maxWidth: '600px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease'
        }}>
            <div style={{
                marginBottom: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{meme.name}</h3>
            </div>

            <div style={{
                width: '100%',
                minHeight: '300px',
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderRadius: 'calc(var(--border-radius) - 8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                {loading && (
                    <div style={{ position: 'absolute', color: 'var(--accent-primary)' }}>Loading Image...</div>
                )}
                <img
                    src={meme.url}
                    alt={meme.name}
                    onLoad={() => setLoading(false)}
                    style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        opacity: loading ? 0 : 1,
                        transition: 'opacity 0.5s ease'
                    }}
                />
            </div>
        </div>
    );
};

export default MemeCard;
