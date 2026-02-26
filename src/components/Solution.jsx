import React from 'react'
import { Rocket, Database, RefreshCw, Smartphone, WifiOff } from 'lucide-react'

const Solution = () => {
    const cards = [
        { title: 'CORE ENGINE', subtitle: 'React Native Offline-First Template', icon: <Rocket size={24} />, pos: 'top-left' },
        { title: 'DATABASE', subtitle: 'WatermelonDB / Dexie.js for local storage', icon: <Database size={24} />, pos: 'bottom-left' },
        { title: 'SYNC', subtitle: 'Background syncing to Supabase', icon: <RefreshCw size={24} />, pos: 'top-right' },
        { title: 'PLATFORM', subtitle: 'iOS & Android via Capacitor 6', icon: <Smartphone size={24} />, pos: 'bottom-right' }
    ]

    return (
        <section className="solution" id="solution" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        THE SOLUTION: <span className="gradient-text">TRAVEL RAVERS APP</span>
                    </h2>
                    <p style={{ opacity: 0.8, fontSize: '1.2rem' }}>Offline-First Architecture for a Disconnected World.</p>
                </div>

                <div className="architecture-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 300px 1fr',
                    alignItems: 'center',
                    gap: '20px',
                    position: 'relative'
                }}>
                    {/* Left Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        {cards.slice(0, 2).map((card, i) => (
                            <div key={i} className="glass neon-border-purple" style={{ padding: '24px', position: 'relative' }}>
                                <div className="neon-text-purple" style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    {card.icon}
                                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{card.title}</h3>
                                </div>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{card.subtitle}</p>
                            </div>
                        ))}
                    </div>

                    {/* Central Phone */}
                    <div className="mockup-container" style={{ position: 'relative' }}>
                        <div className="phone-outer glass neon-border-purple" style={{
                            width: '280px',
                            height: '560px',
                            borderRadius: '40px',
                            margin: '0 auto',
                            padding: '12px',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            <div className="phone-inner" style={{
                                background: '#050505',
                                width: '100%',
                                height: '100%',
                                borderRadius: '30px',
                                overflow: 'hidden',
                                position: 'relative',
                                border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                {/* Offline Banner */}
                                <div style={{
                                    background: 'rgba(0, 210, 255, 0.2)',
                                    border: '1px solid var(--electric-blue)',
                                    padding: '10px',
                                    textAlign: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    marginTop: '20px'
                                }}>
                                    <WifiOff size={16} className="neon-text-blue" />
                                    <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }} className="neon-text-blue">
                                        OFFLINE MODE ACTIVE - ALL SYSTEMS READY
                                    </span>
                                </div>

                                {/* App Placeholder Content */}
                                <div style={{ padding: '20px', opacity: 0.5 }}>
                                    <div style={{ height: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', marginBottom: '10px' }}></div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                        <div style={{ height: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}></div>
                                        <div style={{ height: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Halo lines (Visual only decorative) */}
                        <div className="halos" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '100%', zIndex: 1 }}>
                            <div style={{ position: 'absolute', border: '1px dashed rgba(188, 19, 254, 0.2)', width: '150%', height: '150%', top: '-25%', left: '-25%', borderRadius: '50%' }}></div>
                        </div>
                    </div>

                    {/* Right Cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        {cards.slice(2, 4).map((card, i) => (
                            <div key={i} className="glass neon-border-purple" style={{ padding: '24px' }}>
                                <div className="neon-text-purple" style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    {card.icon}
                                    <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{card.title}</h3>
                                </div>
                                <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>{card.subtitle}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                    <p className="neon-text-pink" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>
                        Pack, Plan, and Party Like a Pro. No Signal Required.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Solution
