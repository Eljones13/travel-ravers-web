import React from 'react';
import {
    WifiOff,
    Database,
    RefreshCw,
    Smartphone,
    Cpu,
    CheckCircle,
    Zap,
    Wallet,
    Map as MapIcon,
    Navigation,
    Users,
    QrCode,
    Droplets,
    Activity,
    ShieldAlert,
    ArrowRight,
    Globe,
    ShoppingCart,
    TrendingUp,
    Heart
} from 'lucide-react';

// --- Shared Components ---

const Pill = ({ children, icon: Icon }) => (
    <div className="tr-pill">
        {Icon && <Icon size={12} />}
        {children}
    </div>
);

const GlassCard = ({ children, className = "", style = {} }) => (
    <div className={`tr-glass-card ${className}`} style={style}>
        <div className="tr-glass-inner">
            {children}
        </div>
    </div>
);

const SectionHeader = ({ id, label, title, subtitle }) => (
    <div style={{ marginBottom: '60px' }}>
        <div className="mono-label" style={{ color: 'var(--tr-cyan)', marginBottom: '8px' }}>{`// ${id}`}</div>
        <div className="tagline" style={{ fontSize: '0.8rem', opacity: 0.5, marginBottom: '8px' }}>{label}</div>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: '16px' }}>
            {title}
        </h2>
        {subtitle && <p style={{ opacity: 0.7, fontSize: '1.2rem', maxWidth: '800px' }}>{subtitle}</p>}
    </div>
);

const HeroPhone = ({ variant }) => {
    return (
        <div
            style={{
                width: 260,
                height: 520,
                background: '#000',
                borderRadius: 40,
                padding: 10,
                border: '1px solid var(--tr-border)',
                boxShadow: '0 0 50px rgba(0,229,255,0.18)',
            }}
        >
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 32,
                    overflow: 'hidden',
                    background:
                        variant === 'checklist'
                            ? 'linear-gradient(180deg, #24120f, #050508)'
                            : 'linear-gradient(180deg, #02121f, #050508)',
                    padding: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    boxShadow:
                        'inset 0 0 18px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.8)',
                }}
            >
                <div
                    className="mono-label"
                    style={{ fontSize: '0.65rem', opacity: 0.85 }}
                >
                    {variant === 'timeline'
                        ? 'TIMELINE'
                        : variant === 'map'
                            ? 'MAP'
                            : 'CHECKLIST'}
                </div>

                {variant === 'timeline' && <TimelineMini />}
                {variant === 'map' && <MapMini />}
                {variant === 'checklist' && <ChecklistMini />}
            </div>
        </div>
    );
};

const TimelineMini = () => (
    <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {['Main Stage • 23:45', 'Warehouse • 02:10', 'Sunrise Set • 05:30'].map(
            (label, i) => (
                <div
                    key={label}
                    style={{
                        padding: '10px 14px',
                        borderRadius: 999,
                        background:
                            i === 0
                                ? 'linear-gradient(90deg, rgba(0,229,255,0.65), rgba(255,43,214,0.7))'
                                : 'rgba(0,0,0,0.7)',
                        border:
                            i === 0
                                ? '1px solid rgba(255,255,255,0.6)'
                                : '1px solid rgba(255,255,255,0.08)',
                        fontSize: '0.8rem',
                        boxShadow:
                            i === 0
                                ? '0 0 22px rgba(0,229,255,0.6)'
                                : '0 10px 20px rgba(0,0,0,0.7)',
                    }}
                >
                    {label}
                </div>
            )
        )}
    </div>
);

const MapMini = () => (
    <div
        style={{
            flex: 1,
            marginTop: 6,
            borderRadius: 18,
            background:
                'radial-gradient(circle at top, rgba(0,229,255,0.35), rgba(5,8,28,0.95))',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(0,229,255,0.15)',
        }}
    >
        {[40, 70, 95].map((r, i) => (
            <div
                key={r}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: `${r * 2}px`,
                    height: `${r * 2}px`,
                    borderRadius: '50%',
                    border: `1px solid rgba(0,229,255,${0.25 + i * 0.15})`,
                    transform: 'translate(-50%, -50%)',
                }}
            />
        ))}
        <div
            style={{
                position: 'absolute',
                top: '30%',
                right: '30%',
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: 'var(--safety-orange)',
                boxShadow: '0 0 18px var(--safety-orange)',
                border: '2px solid white',
            }}
        />
        <div
            style={{
                position: 'absolute',
                bottom: '28%',
                left: '35%',
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: 'var(--tr-magenta)',
                boxShadow: '0 0 18px var(--tr-magenta)',
                border: '2px solid white',
            }}
        />
    </div>
);

const ChecklistMini = () => (
    <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[
            { label: 'Tent + sleep kit', color: '#ffb74d', width: '82%' },
            { label: 'Power & chargers', color: '#00e5ff', width: '64%' },
            { label: 'Crew essentials', color: '#ff2bd6', width: '48%' },
        ].map((row) => (
            <div
                key={row.label}
                style={{
                    padding: '10px 12px',
                    borderRadius: 12,
                    background: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    fontSize: '0.8rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                }}
            >
                <div style={{ marginBottom: 6, fontWeight: 500 }}>{row.label}</div>
                <div
                    style={{
                        height: 6,
                        borderRadius: 999,
                        background: 'rgba(255,255,255,0.08)',
                        border: '1px solid rgba(255,255,255,0.05)',
                    }}
                >
                    <div
                        style={{
                            width: row.width,
                            height: '100%',
                            borderRadius: 999,
                            background: row.color,
                            boxShadow: `0 0 12px ${row.color}`,
                        }}
                    />
                </div>
            </div>
        ))}
    </div>
);

const App = () => {
    return (
        <div className="tr-page-overlay">

            {/* --- HERO SECTION --- */}
            <section id="hero" style={{ paddingTop: '80px', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                        <div className="tr-hero-glass">
                            <Pill icon={Activity}>OFFLINE FESTIVAL OS</Pill>

                            <h1
                                style={{
                                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                                    marginTop: '20px',
                                    lineHeight: 0.9,
                                }}
                            >
                                THE SOLUTION:{' '}
                                <span className="gradient-text">TRAVEL RAVERS</span>
                            </h1>

                            <p
                                className="tagline"
                                style={{ marginTop: '18px', fontSize: '1.3rem', opacity: 0.85 }}
                            >
                                The offline festival survival app that keeps your crew hydrated, located and operational long after the network taps out.
                            </p>

                            <div
                                style={{
                                    marginTop: '24px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: '16px',
                                    flexWrap: 'wrap',
                                }}
                            >
                                <button className="btn-primary">
                                    Get the Offline Checklist App
                                </button>
                                <button className="btn-ghost">
                                    For Squad Leaders: Plan Multi‑Festival Trips
                                </button>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>

                        {/* THREE-PHONE HERO IMAGE */}
                        <section style={{ marginTop: '72px', width: '100%' }}>
                            <div className="hero-phones">
                                <img
                                    src="/images/travel-ravers-3phones.png"
                                    alt="Travel Ravers app hero – Timeline, Map and Checklist screens"
                                    className="hero-phones-img"
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            {/* --- TACTICAL NAVIGATOR --- */}
            <section id="navigator">
                <div className="container">
                    <SectionHeader
                        id="MODULE_02"
                        label="SURVIVAL_CRITICAL_NAVIGATION"
                        title="THE TACTICAL NAVIGATOR"
                        subtitle="Trade useless grey vector grids for geo‑referenced festival maps with marked water, medical and meet‑up zones that stay visible in total signal blackout."
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <GlassCard>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ padding: '16px', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '12px' }}>
                                        <Droplets className="neon-text-cyan" />
                                    </div>
                                    <div>
                                        <h3 className="heading-tech">WATER STATIONS</h3>
                                        <div className="mono-label" style={{ color: 'var(--tr-cyan)', marginTop: '4px' }}>AQ_TARGET_ID // CYBER_CYAN</div>
                                    </div>
                                </div>
                            </GlassCard>

                            <GlassCard>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <div style={{ padding: '16px', background: 'rgba(255, 107, 0, 0.1)', borderRadius: '12px' }}>
                                        <ShieldAlert style={{ color: 'var(--safety-orange)' }} />
                                    </div>
                                    <div>
                                        <h3 className="heading-tech">MEDICAL TENTS</h3>
                                        <div className="mono-label" style={{ color: 'var(--safety-orange)', marginTop: '4px' }}>HIGH_PRIORITY // ALERT_ACTIVE</div>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>

                        <GlassCard style={{ padding: 0 }}>
                            <div
                                style={{
                                    height: '400px',
                                    position: 'relative',
                                    background:
                                        'radial-gradient(circle at bottom, rgba(0,0,0,0.9), #050508)',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* subtle grid */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage:
                                            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                                        backgroundSize: '46px 46px',
                                        opacity: 0.4,
                                    }}
                                />

                                {/* concentric circles */}
                                {[90, 140, 190].map((size, i) => (
                                    <div
                                        key={size}
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            width: `${size * 2}px`,
                                            height: `${size * 2}px`,
                                            borderRadius: '50%',
                                            border: `1px solid rgba(0,229,255,${0.18 + i * 0.12})`,
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    />
                                ))}

                                {/* path line */}
                                <svg
                                    width="280"
                                    height="160"
                                    viewBox="0 0 280 160"
                                    style={{
                                        position: 'absolute',
                                        top: '32%',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                    }}
                                >
                                    <path
                                        d="M10 140 C 60 40, 140 60, 270 20"
                                        fill="none"
                                        stroke="rgba(0,229,255,0.6)"
                                        strokeWidth="2"
                                        strokeDasharray="4 6"
                                    />
                                </svg>

                                {/* POI markers */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '42%',
                                        left: '38%',
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        background: 'var(--tr-cyan)',
                                        boxShadow: '0 0 18px var(--tr-cyan)',
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '30%',
                                        right: '30%',
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        background: 'var(--safety-orange)',
                                        boxShadow: '0 0 18px var(--safety-orange)',
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        bottom: '26%',
                                        left: '52%',
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        background: 'var(--tr-magenta)',
                                        boxShadow: '0 0 18px var(--tr-magenta)',
                                    }}
                                />

                                {/* bottom pill */}
                                <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                                    <Pill icon={MapIcon}>OFFLINE FESTIVAL MAP</Pill>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* --- SQUAD RADAR --- */}
            <section id="radar" style={{ background: 'rgba(188, 19, 254, 0.03)' }}>
                <div className="container">
                    <SectionHeader
                        id="MODULE_03"
                        label="ASYNC_PEER_DISCOVERY"
                        title="SQUAD RADAR & SNEAKERNET"
                        subtitle="Turn your crew into a trackable squad, not a lost crowd. QR‑based handshakes sync mission data across the air gap so you can find each other without Wi‑Fi or data."
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 450px) 1fr', gap: '80px', alignItems: 'center' }}>
                        <GlassCard style={{ textAlign: 'center', padding: '48px' }}>
                            <div style={{ width: '260px', height: '260px', margin: '0 auto', border: '1px solid rgba(188, 19, 254, 0.3)', borderRadius: '50%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(188, 19, 254, 0.1)' }}></div>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', width: '50%', height: '1px', background: 'var(--cyber-purple)', transformOrigin: 'left', animation: 'rotateRadar 5s linear infinite' }}></div>
                                <Users size={40} className="neon-text-purple" style={{ opacity: 0.6 }} />
                                <div style={{ position: 'absolute', top: '25%', right: '35%', width: '10px', height: '10px', background: 'var(--cyber-purple)', borderRadius: '50%', boxShadow: '0 0 15px var(--cyber-purple)' }}></div>
                            </div>
                            <h4 className="heading-tech" style={{ marginTop: '32px' }}>SQUAD_RADAR_ACTIVE</h4>
                            <div className="mono-label" style={{ opacity: 0.5, marginTop: '8px' }}>ASYNC_P2P_SYNC_READY</div>
                            <div style={{ marginTop: '32px', padding: '20px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '16px', display: 'flex', gap: '16px', alignItems: 'center', textAlign: 'left' }}>
                                <QrCode size={32} className="neon-text-cyan" />
                                <div>
                                    <div className="heading-tech" style={{ fontSize: '0.7rem' }}>SNEAKERNET HANDSHAKE</div>
                                    <div className="mono-label" style={{ fontSize: '0.6rem', opacity: 0.5 }}>GENERATE_SYNC_QR</div>
                                </div>
                            </div>
                        </GlassCard>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
                            <GlassCard>
                                <div style={{ display: 'flex', gap: '24px' }}>
                                    <div style={{ padding: '12px', background: 'rgba(255, 43, 214, 0.1)', borderRadius: '12px' }}><TrendingUp className="neon-text-pink" /></div>
                                    <div>
                                        <h3 className="heading-tech">LAST SEEN</h3>
                                        <p style={{ opacity: 0.7, marginTop: '8px', fontSize: '1.1rem' }}>
                                            Precision timestamps for each friend so you can see exactly when and where the drift started.
                                        </p>
                                    </div>
                                </div>
                            </GlassCard>
                            <GlassCard>
                                <div style={{ display: 'flex', gap: '24px' }}>
                                    <div style={{ padding: '12px', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '12px' }}><Navigation className="neon-text-cyan" /></div>
                                    <div>
                                        <h3 className="heading-tech">COMPASS VECTORS</h3>
                                        <p style={{ opacity: 0.7, marginTop: '8px', fontSize: '1.1rem' }}>
                                            Directional arrows that cut through the panic and point you back towards the squad in dead zones.
                                        </p>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SMART PACKS & BUDGETING --- */}
            <section id="packs">
                <div className="container">
                    <SectionHeader
                        id="MODULE_04"
                        label="SMART_CHECKLISTS_AND_BUDGETING"
                        title={<>CONTEXT‑AWARE <span className="neon-text-pink">SMART PACKS</span></>}
                        subtitle="From Bangkok water‑festivals to UK mud fields, auto‑swap your festival packing list and budget to match the vibe, climate and chaos level."
                    />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                        <GlassCard>
                            <Pill icon={CheckCircle}>TEMPLATES</Pill>
                            <h3 className="heading-tech" style={{ marginTop: '20px' }}>CURATED PACKING TEMPLATES</h3>
                            <p style={{ opacity: 0.7, marginTop: '12px' }}>
                                One‑tap checklists for camping festivals, city raves and desert missions so first‑timers stop over‑packing the wrong gear.
                            </p>
                        </GlassCard>

                        <GlassCard>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <Pill icon={ShoppingCart}>MONETIZATION_CORE</Pill>
                                <ShoppingCart size={20} className="neon-text-cyan" />
                            </div>
                            <h3 className="heading-tech" style={{ marginTop: '20px' }}>GEAR THAT ACTUALLY SURVIVES</h3>
                            <p style={{ opacity: 0.7, marginTop: '12px' }}>
                                Highlight high‑priority items like power banks, ponchos and tents with a small cart icon – ready to plug into affiliate gear partners when you’re live.
                            </p>
                        </GlassCard>

                        <GlassCard>
                            <Pill icon={Wallet}>FINANCIAL_TRACKER</Pill>
                            <h3 className="heading-tech" style={{ marginTop: '20px' }}>SPEND SMARTER, RAVE LONGER</h3>
                            <p style={{ opacity: 0.7, marginTop: '12px' }}>
                                Track per‑person spend versus ticket cost so your squad sees where the money actually goes before stacking the next festival.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* --- VIBE MATCH --- */}
            <section id="vibe" style={{ background: 'rgba(0, 229, 255, 0.02)', borderTop: '1px solid var(--tr-border)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
                        <div>
                            <SectionHeader
                                id="MODULE_05"
                                label="PSYCHOGRAPHIC_VIBE_ENGINE"
                                title={<>VIBE MATCH & <span className="neon-text-cyan">AGGROMETER</span></>}
                                subtitle="Filter festivals by crowd intensity, music profile and first‑timer friendliness so you never accidentally drop a newbie into a 10/10 chaos pit."
                            />

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <GlassCard>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                                        <span className="heading-tech" style={{ fontSize: '0.8rem' }}>CROWD INTENSITY INDEX</span>
                                        <span className="neon-text-pink">94%</span>
                                    </div>
                                    <div style={{ height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', overflow: 'hidden' }}>
                                        <div style={{ width: '94%', height: '100%', background: 'linear-gradient(90deg, var(--tr-cyan), var(--tr-magenta))', boxShadow: '0 0 15px var(--tr-magenta)' }}></div>
                                    </div>
                                    <p style={{ opacity: 0.6, fontSize: '0.85rem', marginTop: '12px' }}>
                                        A visual Aggrometer that turns vague “vibes” into a clear 1‑10 scale for mosh‑risk and mayhem.
                                    </p>
                                </GlassCard>

                                <GlassCard>
                                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                        <Heart className="neon-text-pink" />
                                        <h3 className="heading-tech" style={{ fontSize: '0.9rem' }}>FIRST‑TIMER TRUST SCORES</h3>
                                    </div>
                                    <p style={{ opacity: 0.6, fontSize: '0.85rem', marginTop: '12px' }}>
                                        Signals which events are safe bets for rookies, with packing guardrails and safety prompts baked into the checklist.
                                    </p>
                                </GlassCard>
                            </div>
                        </div>

                        <div style={{ position: 'relative' }}>
                            <GlassCard style={{ padding: '60px', borderRadius: '40px', textAlign: 'center' }}>
                                <div style={{ width: '200px', height: '200px', margin: '0 auto', background: 'radial-gradient(circle, rgba(0, 229, 255, 0.1) 0%, transparent 70%)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0, 229, 255, 0.1)' }}>
                                    <Globe size={64} className="neon-text-cyan" />
                                </div>
                                <div className="heading-tech" style={{ marginTop: '40px', fontSize: '1.5rem' }}>GLOBAL_VIBE_LOCK</div>
                                <div className="mono-label" style={{ opacity: 0.4, marginTop: '8px' }}>MAPPING_SQUAD_COMPATIBILITY</div>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section id="cta" style={{ textAlign: 'center', padding: '160px 0' }}>
                <div className="container">
                    <GlassCard style={{ padding: '100px 40px', borderRadius: '48px' }}>
                        <Pill icon={Zap}>PROTOCOL_TERMINATION</Pill>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', fontWeight: 900, marginTop: '32px' }}>
                            INITIATE <span className="gradient-text">AIRGAP PROTOCOL</span>
                        </h2>
                        <p style={{ fontSize: '1.4rem', opacity: 0.7, margin: '32px auto', maxWidth: '800px' }}>
                            Join the early‑access list for the Travel Ravers Checklist app. Get the offline packing list, squad radar and smart budgeting tools before the 2026 festival season kicks off.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                            <input
                                type="email"
                                placeholder="you@squad-leader.club"
                                className="mono-label"
                                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--tr-border)', padding: '20px 32px', borderRadius: '12px', color: 'white', width: '350px', outline: 'none' }}
                            />
                            <button className="btn-primary" style={{ padding: '20px 48px', fontSize: '1.1rem' }}>
                                Get Early Access <ArrowRight style={{ verticalAlign: 'middle', marginLeft: '12px' }} />
                            </button>
                        </div>
                    </GlassCard>
                </div>
            </section>

            <footer style={{ padding: '80px 0', width: '100%', borderTop: '1px solid var(--tr-border)', textAlign: 'center', background: 'rgba(0,0,0,0.6)' }}>
                <div className="container">
                    <div className="gradient-text" style={{ fontSize: '2.5rem', fontWeight: 900, fontFamily: 'var(--font-tech)', marginBottom: '24px' }}>TRAVEL RAVERS</div>
                    <div className="mono-label" style={{ opacity: 0.5 }}>NO_SIGNAL_REQUIRED // EST_2026 // FESTIVAL_STACKING_READY</div>
                </div>
            </footer>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes rotateRadar {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes scanV {
           0% { top: 0; }
           100% { top: 100%; }
        }
        .halo-card { backdrop-filter: blur(24px) !important; background: rgba(5, 8, 28, 0.4) !important; }
        input::placeholder { color: rgba(255,255,255,0.2); }
      `}} />
        </div>
    );
};

export default App;
