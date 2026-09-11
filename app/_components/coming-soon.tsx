export default function ComingSoon() {
    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#080808',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 2rem',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Ambient gradient blob */}
            <div
                style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '600px',
                    height: '400px',
                    background:
                        'radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Fine grid overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                    pointerEvents: 'none',
                }}
            />

            {/* Logo / wordmark */}
            <div
                style={{
                    position: 'absolute',
                    top: '2rem',
                    left: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                }}
            >
                {/* TSC mark */}
                <div
                    style={{
                        width: '2rem',
                        height: '2rem',
                        display: 'grid',
                        placeItems: 'center',
                        background: '#000',
                        color: '#fff',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '-0.05em',
                    }}
                >
                    TSC
                </div>

                <div
                    style={{
                        width: '1px',
                        height: '1.5rem',
                        background: '#333',
                    }}
                />

                {/* Company name */}
                <span
                    style={{
                        // fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.75rem',
                        fontWeight: 500,
                        color: '#555',
                    }}
                >
                    The Streeve Collective
                </span>
            </div>

            {/* Status tag */}
            <div
                style={{
                    position: 'absolute',
                    top: '2.1rem',
                    right: '2rem',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#222',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
            >
                <span
                    style={{
                        display: 'inline-block',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#e8e4dc',
                        animation: 'pulse 2s ease-in-out infinite',
                    }}
                />
                LIVE SOON
            </div>

            {/* Main content */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '3.5rem',
                    maxWidth: '900px',
                    width: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                {/* Headline */}
                <div>
                    <h1
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 'clamp(2.8rem, 10vw, 8rem)',
                            fontWeight: 700,
                            lineHeight: 0.92,
                            letterSpacing: '-0.05em',
                            color: '#e8e4dc',
                            margin: 0,
                        }}
                    >
                        SOMETHING
                        <br />
                        <span style={{ color: '#2e2e2e' }}>IS COMING</span>
                    </h1>
                </div>

                {/* Subline */}
                <p
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                        fontWeight: 300,
                        letterSpacing: '0.08em',
                        color: '#444',
                        maxWidth: '420px',
                        lineHeight: 1.7,
                        margin: 0,
                        textTransform: 'uppercase',
                    }}
                >
                    We are building something you haven&apos;t seen before.

                </p>
            </div>

            {/* Bottom bar */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '2rem',
                    right: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.6rem',
                    letterSpacing: '0.15em',
                    color: '#222',
                    textTransform: 'uppercase',
                }}
            >
                <span>© 2026 The Streeve Collective</span>
                <span>Privacy · Terms</span>
            </div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        input::placeholder { color: #2a2a2a; }
      `}</style>
        </div>
    )
}
