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
            <section id="hero" style={{ paddingTop: '80px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                {/* HUD hex grid background */}
                <div style={{
                    position: 'absolute', inset: 0, opacity: 0.05, pointerEvents: 'none',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='52' viewBox='0 0 60 52' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 17.3 L60 34.6 L30 52 L0 34.6 L0 17.3Z' fill='none' stroke='%2300e5ff' stroke-width='0.6'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 52px',
                }} />

                <div className="container">
                    <div className="tr-hero-slab-wrapper" style={{ textAlign: 'center', marginBottom: '100px' }}>
                        <div className="tr-hero-glass" style={{ position: 'relative', overflow: 'hidden' }}>
                            {/* HUD corner brackets */}
                            <div style={{ position: 'absolute', top: 14, left: 14, width: 22, height: 22, borderTop: '2px solid var(--tr-cyan)', borderLeft: '2px solid var(--tr-cyan)', opacity: 0.8 }} />
                            <div style={{ position: 'absolute', top: 14, right: 14, width: 22, height: 22, borderTop: '2px solid var(--tr-cyan)', borderRight: '2px solid var(--tr-cyan)', opacity: 0.8 }} />
                            <div style={{ position: 'absolute', bottom: 14, left: 14, width: 22, height: 22, borderBottom: '2px solid var(--tr-cyan)', borderLeft: '2px solid var(--tr-cyan)', opacity: 0.8 }} />
                            <div style={{ position: 'absolute', bottom: 14, right: 14, width: 22, height: 22, borderBottom: '2px solid var(--tr-cyan)', borderRight: '2px solid var(--tr-cyan)', opacity: 0.8 }} />

                            {/* Animated scan line */}
                            <div style={{
                                position: 'absolute', left: 0, right: 0, height: '1px', top: 0,
                                background: 'linear-gradient(90deg, transparent 0%, var(--tr-cyan) 50%, transparent 100%)',
                                animation: 'heroScanLine 4s ease-in-out infinite',
                                opacity: 0.45, zIndex: 0,
                            }} />

                            {/* System status bar */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', fontSize: '0.62rem', fontFamily: 'var(--font-mono)', opacity: 0.5, position: 'relative', zIndex: 1 }}>
                                <span style={{ color: 'var(--tr-cyan)' }}>SYS_BOOT // v2.6.0</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span style={{ width: 6, height: 6, background: '#00ff88', borderRadius: '50%', display: 'inline-block', animation: 'hudBlink 1.2s ease-in-out infinite', boxShadow: '0 0 6px #00ff88' }} />
                                    SIGNAL_ACQUIRED
                                </span>
                                <span style={{ color: 'var(--tr-magenta)' }}>TR-OS // ONLINE</span>
                            </div>

                            <Pill icon={Activity}>OFFLINE FESTIVAL OS</Pill>

                            <h1
                                style={{
                                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                                    marginTop: '20px',
                                    lineHeight: 0.9,
                                    position: 'relative', zIndex: 1,
                                }}
                            >
                                THE SOLUTION:{' '}
                                <span className="gradient-text">TRAVEL RAVERS</span>
                            </h1>

                            <p
                                className="tagline"
                                style={{ marginTop: '18px', fontSize: '1.3rem', opacity: 0.85, position: 'relative', zIndex: 1 }}
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
                                    position: 'relative', zIndex: 1,
                                }}
                            >
                                <button className="btn-primary">
                                    Get the Offline Checklist App
                                </button>
                                <button className="btn-ghost">
                                    For Squad Leaders: Plan Multi‑Festival Trips
                                </button>
                            </div>

                            {/* HUD data readout strip */}
                            <div style={{
                                display: 'flex', justifyContent: 'center', gap: '28px', flexWrap: 'wrap',
                                marginTop: '28px', padding: '12px 24px',
                                borderTop: '1px solid rgba(255,255,255,0.08)',
                                fontSize: '0.6rem', fontFamily: 'var(--font-mono)',
                                position: 'relative', zIndex: 1,
                            }}>
                                {['CREW_SYNC: ACTIVE', 'OFFLINE_DB: READY', 'CHECKLISTS: 47', 'FESTIVALS: 126'].map(s => (
                                    <span key={s} style={{ color: 'var(--tr-cyan)', opacity: 0.5 }}>{s}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hero-phones">
                        <img
                            src="/images/travel-ravers-3phones.png"
                            alt="Travel Ravers app hero – Timeline, Map and Checklist screens"
                            className="hero-phones-img"
                        />
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

                    <div className="tr-grid-2col">
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

                    <div className="tr-grid-radar">

                        {/* ANIME HUD RADAR CARD */}
                        <GlassCard className="tr-radar-card" style={{
                            textAlign: 'center', padding: '32px 36px', position: 'relative',
                            backgroundImage: 'linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)',
                            backgroundSize: '40px 40px',
                        }}>
                            {/* HUD corner brackets — cyan to match reference */}
                            <div style={{ position: 'absolute', top: 14, left: 14, width: 20, height: 20, borderTop: '2px solid var(--tr-cyan)', borderLeft: '2px solid var(--tr-cyan)' }} />
                            <div style={{ position: 'absolute', top: 14, right: 14, width: 20, height: 20, borderTop: '2px solid var(--tr-cyan)', borderRight: '2px solid var(--tr-cyan)' }} />
                            <div style={{ position: 'absolute', bottom: 14, left: 14, width: 20, height: 20, borderBottom: '2px solid var(--tr-cyan)', borderLeft: '2px solid var(--tr-cyan)' }} />
                            <div style={{ position: 'absolute', bottom: 14, right: 14, width: 20, height: 20, borderBottom: '2px solid var(--tr-cyan)', borderRight: '2px solid var(--tr-cyan)' }} />

                            {/* Card title */}
                            <div className="heading-tech" style={{ fontSize: '0.95rem', letterSpacing: '0.2em', marginBottom: '24px', color: 'white' }}>
                                TACTICAL RADAR PULSE
                            </div>

                            {/* Radar dish */}
                            <div className="tr-radar-dish">

                                {/* Dark base — deep blue-black with teal radial tint */}
                                <div style={{
                                    position: 'absolute', inset: 0, borderRadius: '50%',
                                    background: 'radial-gradient(circle at center, rgba(0,229,255,0.09) 0%, rgba(1,4,14,0.99) 72%)',
                                }} />

                                {/* Teal crosshatch grid clipped to circle */}
                                <div style={{
                                    position: 'absolute', inset: 0, borderRadius: '50%', overflow: 'hidden',
                                    backgroundImage: 'linear-gradient(rgba(0,229,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.07) 1px, transparent 1px)',
                                    backgroundSize: '30px 30px',
                                }} />

                                {/* ── Unified static SVG layer ── */}
                                <svg
                                    viewBox="0 0 300 300"
                                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}
                                >
                                    {/* 5 concentric range rings — teal, decreasing opacity inward */}
                                    {[24, 50, 80, 112, 138].map((r, i) => (
                                        <circle key={r} cx="150" cy="150" r={r}
                                            fill="none"
                                            stroke={`rgba(0,229,255,${0.40 - i * 0.06})`}
                                            strokeWidth="0.85"
                                        />
                                    ))}

                                    {/* Crosshair — more visible */}
                                    <line x1="4" y1="150" x2="296" y2="150" stroke="rgba(0,229,255,0.35)" strokeWidth="0.7" />
                                    <line x1="150" y1="4" x2="150" y2="296" stroke="rgba(0,229,255,0.35)" strokeWidth="0.7" />

                                    {/* 120 tick marks every 3° — sharper 3-tier contrast */}
                                    {Array.from({ length: 120 }, (_, i) => {
                                        const deg = i * 3;
                                        const rad = (deg * Math.PI) / 180;
                                        const isMajor = deg % 30 === 0;
                                        const isMed   = deg % 15 === 0;
                                        const rOuter = 148;
                                        const rInner = isMajor ? 124 : isMed ? 133 : 141;
                                        return (
                                            <line key={i}
                                                x1={150 + rInner * Math.cos(rad)} y1={150 + rInner * Math.sin(rad)}
                                                x2={150 + rOuter * Math.cos(rad)} y2={150 + rOuter * Math.sin(rad)}
                                                stroke={`rgba(0,229,255,${isMajor ? 0.85 : isMed ? 0.55 : 0.28})`}
                                                strokeWidth={isMajor ? '1.4' : '0.65'}
                                            />
                                        );
                                    })}

                                    {/* Outer bold ring — bright, on top of ticks */}
                                    <circle cx="150" cy="150" r="149"
                                        fill="none"
                                        stroke="rgba(0,229,255,0.75)"
                                        strokeWidth="1.5"
                                    />

                                    {/* Range ring labels — right of vertical axis, more readable */}
                                    <text x="154" y="98"  fill="rgba(0,229,255,0.55)" fontFamily="'JetBrains Mono',monospace" fontSize="6.5" letterSpacing="0.4">100m</text>
                                    <text x="154" y="68"  fill="rgba(0,229,255,0.48)" fontFamily="'JetBrains Mono',monospace" fontSize="6.5" letterSpacing="0.4">250m</text>
                                    <text x="154" y="38"  fill="rgba(0,229,255,0.42)" fontFamily="'JetBrains Mono',monospace" fontSize="6.5" letterSpacing="0.4">500m</text>

                                    {/* Compass labels — inside outer ring at cardinal edges */}
                                    <text x="150" y="14"  textAnchor="middle" fill="rgba(0,229,255,0.95)" fontFamily="'JetBrains Mono',monospace" fontSize="10" fontWeight="bold" letterSpacing="1">N</text>
                                    <text x="150" y="292" textAnchor="middle" fill="rgba(0,229,255,0.95)" fontFamily="'JetBrains Mono',monospace" fontSize="10" fontWeight="bold" letterSpacing="1">S</text>
                                    <text x="292" y="154" textAnchor="middle" fill="rgba(0,229,255,0.95)" fontFamily="'JetBrains Mono',monospace" fontSize="10" fontWeight="bold" letterSpacing="1">E</text>
                                    <text x="8"   y="154" textAnchor="middle" fill="rgba(0,229,255,0.95)" fontFamily="'JetBrains Mono',monospace" fontSize="10" fontWeight="bold" letterSpacing="1">W</text>
                                </svg>

                                {/* ── Rotating sweep (conic trail + arm) — magenta ── */}
                                <div style={{
                                    position: 'absolute', inset: 0, borderRadius: '50%',
                                    overflow: 'hidden',
                                    animation: 'radarSweep 4s linear infinite',
                                }}>
                                    {/* Conic fade trail — tighter ~110° comet tail */}
                                    <div style={{
                                        position: 'absolute', inset: 0, borderRadius: '50%',
                                        background: 'conic-gradient(from 0deg, rgba(255,43,214,0) 0deg, rgba(255,43,214,0) 210deg, rgba(255,43,214,0.04) 260deg, rgba(255,43,214,0.22) 340deg, rgba(255,43,214,0) 360deg)',
                                    }} />
                                    {/* Sweep arm — 1.5px, full radius to outer ring */}
                                    <div style={{
                                        position: 'absolute', top: '50%', left: '50%',
                                        width: '50%', height: '1.5px',
                                        background: 'linear-gradient(90deg, #ff2bd6 0%, rgba(255,43,214,0.7) 55%, transparent 100%)',
                                        boxShadow: '0 0 5px #ff2bd6, 0 0 14px rgba(255,43,214,0.4)',
                                        transformOrigin: 'left center',
                                        transform: 'translateY(-50%)',
                                    }} />
                                </div>

                                {/* ── Squad dots with label chips ── */}
                                {[
                                    { top: '18%', left: '63%', color: '#00e5ff',  name: 'SANDY',     info: '-456m SE', delay: '0s'   },
                                    { top: '57%', left: '9%',  color: '#ff8c00',  name: 'BASE CAMP', info: '320m W',   delay: '0.7s' },
                                    { top: '73%', left: '53%', color: '#00ff88',  name: 'RTAG',      info: '122m S',   delay: '1.4s' },
                                    { top: '31%', left: '23%', color: '#ff2bd6',  name: 'DEX',       info: '89m NW',   delay: '2.1s' },
                                ].map((dot) => (
                                    <div key={dot.name} style={{ position: 'absolute', top: dot.top, left: dot.left }}>
                                        {/* Ping ripple */}
                                        <div style={{
                                            position: 'absolute', top: '50%', left: '50%',
                                            transform: 'translate(-50%,-50%)',
                                            width: 22, height: 22, borderRadius: '50%',
                                            border: `1px solid ${dot.color}`,
                                            animation: `pingRipple 2.6s ease-out ${dot.delay} infinite`,
                                        }} />
                                        {/* Dot */}
                                        <div style={{
                                            width: 9, height: 9, borderRadius: '50%',
                                            background: dot.color,
                                            boxShadow: `0 0 6px ${dot.color}, 0 0 16px ${dot.color}66`,
                                            border: '1.5px solid rgba(255,255,255,0.85)',
                                            position: 'relative', zIndex: 3,
                                        }} />
                                        {/* Label chip — vertically centred with dot, to the right */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '50%', left: '14px',
                                            transform: 'translateY(-55%)',
                                            background: 'rgba(1,4,18,0.90)',
                                            border: `1px solid ${dot.color}60`,
                                            borderRadius: '3px',
                                            padding: '2px 5px',
                                            whiteSpace: 'nowrap',
                                            backdropFilter: 'blur(6px)',
                                            zIndex: 4,
                                        }}>
                                            <div style={{ fontSize: '0.43rem', fontFamily: 'var(--font-mono)', color: dot.color, fontWeight: 'bold', letterSpacing: '0.05em' }}>{dot.name}</div>
                                            <div style={{ fontSize: '0.37rem', fontFamily: 'var(--font-mono)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.03em' }}>{dot.info}</div>
                                        </div>
                                    </div>
                                ))}

                                {/* Center origin dot — cyan, 6px pinpoint */}
                                <div style={{
                                    position: 'absolute', top: '50%', left: '50%',
                                    transform: 'translate(-50%,-50%)',
                                    width: 6, height: 6, borderRadius: '50%',
                                    background: '#00e5ff',
                                    boxShadow: '0 0 6px #00e5ff, 0 0 14px rgba(0,229,255,0.6)',
                                    zIndex: 5,
                                }} />
                            </div>

                            {/* Status readout strip */}
                            <div style={{
                                marginTop: '20px', display: 'flex', justifyContent: 'center',
                                gap: '20px', fontSize: '0.58rem', fontFamily: 'var(--font-mono)',
                            }}>
                                <span style={{ color: 'var(--tr-cyan)' }}>TRACKING: <span style={{ color: '#00ff88' }}>4/6</span></span>
                                <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                                <span style={{ color: 'var(--tr-magenta)', animation: 'hudBlink 1.5s ease-in-out infinite' }}>SWEEP: ACTIVE</span>
                                <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                                <span style={{ color: 'var(--tr-cyan)' }}>P2P: MESH</span>
                            </div>

                            <div className="mono-label" style={{ opacity: 0.4, marginTop: '10px' }}>ASYNC_P2P_SYNC_READY</div>

                            <div style={{
                                marginTop: '18px', padding: '14px 18px',
                                border: '1px dashed rgba(0,229,255,0.15)', borderRadius: '14px',
                                display: 'flex', gap: '14px', alignItems: 'center', textAlign: 'left',
                            }}>
                                <QrCode size={26} className="neon-text-cyan" />
                                <div>
                                    <div className="heading-tech" style={{ fontSize: '0.7rem' }}>SNEAKERNET HANDSHAKE</div>
                                    <div className="mono-label" style={{ fontSize: '0.58rem', opacity: 0.45 }}>GENERATE_SYNC_QR</div>
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
                    <div className="tr-grid-2col" style={{ gap: '80px' }}>
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
        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes heroScanLine {
          0%   { top: 0%;   opacity: 0; }
          5%   { opacity: 0.5; }
          90%  { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes hudBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.15; }
        }
        @keyframes pingRipple {
          0%   { transform: translate(-50%, -50%) scale(1); opacity: 0.85; }
          100% { transform: translate(-50%, -50%) scale(4.5); opacity: 0; }
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
