import Link from 'next/link'

export default function Home() {
  return (
    <main className="page">

      {/* ── INTRO ─────────────────────────────────────── */}
      <div className="section" style={{
        paddingTop: '6rem',
        paddingBottom: '2rem',
      }}>
        <div className="fade-up">
          <p className="section-label">Computing Science with Business  ~  University of Stirling</p>
        </div>

        <div className="fade-up" style={{ marginTop: '0.5rem' }}>
          <h1 className="name">Callum<br />Davidson</h1>
        </div>

        <div className="fade-up" style={{ maxWidth: '540px', marginTop: '2.5rem' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.85', color: 'var(--muted)' }}>
            I'm a second year Computing Science and Business student building toward a career in tech sales and account management.
            I combine a technical grounding in software and data with a genuine interest in the commercial side — understanding clients, positioning
            products, and creating value.
          </p>
          <p style={{ marginTop: '1.25rem', fontSize: '1.05rem', lineHeight: '1.85' }}>
            I've shadowed account managers at Google and AWS, contributed to a student-managed investment fund, and I'm actively building projects that demonstrate commercial thinking — not just technical ability.
          </p>
        </div>

        <div className="fade-up" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href="https://uk.linkedin.com/in/callum-davidson-7025a22a4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            LinkedIn ↗
          </a>
          <Link href="/experience" className="btn">
            View Experience →
          </Link>
        </div>
      </div>

      {/* ── NAVIGATION BUBBLES ────────────────────────── */}
      <div className="section" style={{ paddingTop: '1rem', paddingBottom: '6rem' }}>
        <p className="section-label fade-up" style={{ marginBottom: '1.75rem' }}>Explore</p>
        <div className="grid-2 fade-up">
          {[
            {
              title: 'SME Outreach Case Study',
              desc: 'Reaching out to local Aberdeen businesses to understand how they use cloud and SaaS tools — and documenting the commercial insight.',
              link: '/outreach',
              cta: 'Read the case study →',
            },
            {
              title: 'Mock Sales Deck',
              desc: 'A full pitch deck built as if presenting a SaaS product to a fictional enterprise client — demonstrating the AM skill directly.',
              link: '/sales-deck',
              cta: 'View the deck →',
            },
          ].map((p, i) => (
            <Link href={p.link} key={i} style={{ display: 'contents' }}>
              <div className="bubble-card" style={{ cursor: 'pointer' }}>
                <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.5rem' }}>Project</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', marginBottom: '0.3rem' }}>{p.title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.4rem', lineHeight: 1.7 }}>{p.desc}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--accent)', letterSpacing: '0.05em', marginTop: '1rem' }}>{p.cta}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  )
}