"use client"

import { useState, useRef } from 'react'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (email.includes('@')) setSubmitted(true)
  }

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
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.75rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: '#333',
        }}
      >
        ◆ THE STREEVE COLLECTIVE
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
          <br />
          Be the first to know when we launch.
        </p>

        {/* Email form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              gap: '0',
              width: '100%',
              maxWidth: '480px',
            }}
          >
            <input
              ref={inputRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="your@email.com"
              required
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: `1px solid ${focused ? '#444' : '#1e1e1e'}`,
                borderRight: 'none',
                color: '#e8e4dc',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.8rem',
                letterSpacing: '0.05em',
                padding: '0.9rem 1.2rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#e8e4dc',
                color: '#080808',
                border: '1px solid #e8e4dc',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                padding: '0.9rem 1.4rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.backgroundColor = 'transparent'
                el.style.color = '#e8e4dc'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.backgroundColor = '#e8e4dc'
                el.style.color = '#080808'
              }}
            >
              Notify me
            </button>
          </form>
        ) : (
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#555',
              border: '1px solid #1e1e1e',
              padding: '0.9rem 2rem',
            }}
          >
            ✓ &nbsp;You&apos;re on the list
          </div>
        )}

        {/* Footer note */}
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            color: '#222',
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          No spam. Unsubscribe anytime.
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
        <span>© 2026 MKOS</span>
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
