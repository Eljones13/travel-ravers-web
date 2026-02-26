import React from 'react'

const Hero = () => {
    return (
        <section className="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                <h1 className="gradient-text" style={{
                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                    marginBottom: '1rem',
                    lineHeight: 1.1,
                    fontWeight: 900
                }}>
                    TRAVEL RAVERS
                </h1>
                <p className="neon-text-blue" style={{
                    fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                    marginBottom: '3rem',
                    maxWidth: '800px',
                    margin: '0 auto 3rem auto',
                    fontWeight: 300
                }}>
                    Pack, Plan, and Party Like a Pro. <span className="neon-text-pink" style={{ fontWeight: 'bold' }}>No Signal Required.</span>
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '16px 40px' }}>Join the waitlist</button>
                    <button className="glass" style={{
                        background: 'transparent',
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '16px 40px',
                        borderRadius: '30px',
                        fontFamily: 'Orbitron',
                        cursor: 'pointer'
                    }}>View Demo</button>
                </div>
            </div>

            {/* Background visual elements */}
            <div className="glow-orb" style={{ top: '20%', left: '10%' }}></div>
            <div className="glow-orb" style={{ bottom: '10%', right: '10%', background: 'radial-gradient(circle, rgba(0, 210, 255, 0.15) 0%, transparent 70%)' }}></div>
            <div style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '100%',
                height: '40%',
                background: 'linear-gradient(to top, var(--bg-dark), transparent)',
                zIndex: 2
            }}></div>
        </section>
    )
}

export default Hero
