import React from 'react'

const Navbar = () => {
    return (
        <nav className="glass" style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'max-content',
            padding: '12px 40px',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            borderRadius: '40px'
        }}>
            <div style={{ fontWeight: '900', fontSize: '1.2rem', fontFamily: 'Orbitron' }} className="gradient-text">
                TRAVEL RAVERS
            </div>
            <div style={{ display: 'flex', gap: '20px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                <a href="#solution" style={{ color: 'white', textDecoration: 'none' }}>SOLUTION</a>
                <a href="#features" style={{ color: 'white', textDecoration: 'none' }}>FEATURES</a>
                <a href="#offline" style={{ color: 'white', textDecoration: 'none' }}>OFFLINE</a>
            </div>
            <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.7rem' }}>GET THE APP</button>
        </nav>
    )
}

export default Navbar
