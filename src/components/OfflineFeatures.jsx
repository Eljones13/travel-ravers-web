import React from 'react'
import { Map, Calendar, HeartPulse, ShieldAlert } from 'lucide-react'

const OfflineFeatures = () => {
    const items = [
        { title: 'GPS Offline Maps', icon: <Map className="neon-text-purple" />, desc: 'Navigate the festival grounds without a data connection.' },
        { title: 'Cached Personal Schedule', icon: <Calendar className="neon-text-blue" />, desc: 'Never miss a set. Your lineup is always available offline.' },
        { title: 'Medical & First Aid', icon: <HeartPulse className="neon-text-pink" />, desc: 'Instant access to emergency contacts and medical locations.' }
    ]

    return (
        <section className="offline-features" id="offline">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>ESSENTIAL <span className="gradient-text">OFFLINE FEATURES</span></h2>
                    <p style={{ opacity: 0.6 }}>The device is the source of truth. Reliability builds trust.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {items.map((item, i) => (
                        <div key={i} className="glass" style={{ padding: '40px', textAlign: 'center', transition: 'transform 0.3s' }}>
                            <div style={{ marginBottom: '20px', display: 'inline-block', padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '50%' }}>
                                {React.cloneElement(item.icon, { size: 48 })}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{item.title}</h3>
                            <p style={{ opacity: 0.7, fontSize: '1rem' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="glass neon-border-purple" style={{ marginTop: '60px', padding: '40px', display: 'flex', alignItems: 'center', gap: '30px', background: 'linear-gradient(90deg, rgba(188, 19, 254, 0.05), transparent)' }}>
                    <ShieldAlert size={60} className="neon-text-purple" />
                    <div>
                        <h3 className="neon-text-purple">MEDICAL & FIRST AID GUIDES</h3>
                        <p style={{ opacity: 0.8, marginTop: '5px' }}>Offline-accessible emergency protocols tailored for the rave environment.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OfflineFeatures
