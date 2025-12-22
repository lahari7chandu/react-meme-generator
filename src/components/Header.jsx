import React from 'react';

const Header = () => {
    return (
        <header style={{
            textAlign: 'center',
            marginBottom: '3rem',
            animation: 'fadeIn 0.8s ease-out'
        }}>
            <h1 style={{
                fontSize: '3.5rem',
                fontWeight: '800',
                marginBottom: '0.5rem',
                letterSpacing: '-2px'
            }} className="text-gradient">
                MemeGen
            </h1>
            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1.2rem',
                fontWeight: '500'
            }}>
                Daily dose of internet culture
            </p>
        </header>
    );
};

export default Header;
