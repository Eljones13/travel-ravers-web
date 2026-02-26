import React from 'react'
import { CheckCircle, Settings, Wallet } from 'lucide-react'

const Features = () => {
    return (
        <section className="features" id="features" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center' }}>
                    FEATURE: <span className="neon-text-purple">SMART CHECKLISTS</span> & <span className="neon-text-blue">BUDGETING</span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }}>
                    {/* App Screen Mockup */}
                    <div className="glass neon-border-purple" style={{ padding: '20px', borderRadius: '30px', maxWidth: '400px', margin: '0 auto' }}>
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '15px', marginBottom: '20px' }}>
                            <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>SMART CHECKLIST</span>
                            <div style={{ marginTop: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '5px' }}>
                                    <span>OVERALL PROGRESS</span>
                                    <span>35% PACKED</span>
                                </div>
                                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                                    <div style={{ width: '35%', height: '100%', background: 'var(--electric-blue)', borderRadius: '4px', boxShadow: '0 0 10px var(--electric-blue)' }}></div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {['SHELTER', 'COMFORT', 'TECH'].map((cat, i) => (
                                <div key={i}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '8px' }}>
                                        <span className="neon-text-blue">{cat}</span>
                                        <span style={{ opacity: 0.5 }}>{i + 2}/10</span>
                                    </div>
                                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
                                        <div style={{ width: i === 0 ? '30%' : '20%', height: '100%', background: 'var(--cyber-purple)', borderRadius: '2px' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '30px', padding: '15px', background: 'rgba(0, 210, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                            <p style={{ fontSize: '0.8rem' }}>
                                <span className="neon-text-blue">Pro Tip:</span> Anker Portable Charger - Amazon Link Integrated
                            </p>
                        </div>
                    </div>

                    {/* Feature List */}
                    <div className="feature-info">
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>FEATURES OVERVIEW</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                            <li style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                                <div className="glass" style={{ padding: '12px', borderRadius: '12px', color: 'var(--cyber-purple)' }}><CheckCircle /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>CURATED TEMPLATES</h4>
                                    <p style={{ opacity: 0.7 }}>Camping Festival (3-5 Days), Day Rave, Desert Survival.</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                                <div className="glass" style={{ padding: '12px', borderRadius: '12px', color: 'var(--electric-blue)' }}><Settings /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>SMART CATEGORIES</h4>
                                    <p style={{ opacity: 0.7 }}>Integrated gear data from REI & Outdoll (Tents, Mallets, Earplugs).</p>
                                </div>
                            </li>
                            <li style={{ display: 'flex', gap: '20px', alignItems: 'start' }}>
                                <div className="glass" style={{ padding: '12px', borderRadius: '12px', color: 'var(--neon-pink)' }}><Wallet /></div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>FINANCIAL TRACKING</h4>
                                    <p style={{ opacity: 0.7 }}>Real-time 'Per Cap' spending vs. Ticket Cost analysis.</p>
                                </div>
                            </li>
                        </ul>

                        <div style={{ marginTop: '4rem' }}>
                            <p className="heading-tech" style={{ fontSize: '1.2rem' }}>Pack Smarter, Spend Wiser, Party Harder.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
