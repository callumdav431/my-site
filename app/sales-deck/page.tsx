import Link from 'next/link'

export default function Home() {
  return (
    <main className="page">
      <div className="section" style={{ paddingTop: '6rem', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="fade-up">
          <p className="section-label">Computing Science with Business · University of Stirling</p>
        </div>
        <div className="fade-up" style={{ marginTop: '1rem' }}>
          <h1>Callum<br />Davidson</h1>
        </div>
        <div className="divider fade-up"></div>
        <div className="fade-up" style={{ maxWidth: '520px' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--muted)' }}>
            I'm a first-year Computing Science and Business student building toward a career in tech sales and account management. I combine a technical grounding in software and data with a genuine interest in the commercial side — understanding clients, positioning products, and creating value.
          </p>
          <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.8' }}>
            I've shadowed account managers at Google and AWS, contributed to a student-managed investment fund, and I'm actively building projects that demonstrate commercial thinking — not just technical ability.
          </p>
        </div>
        <div className="fade-up" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://uk.linkedin.com/in/callum-davidson-7025a22a4" target="_blank" rel="noopener noreferrer" className="btn">
            LinkedIn ↗
          </a>
          <Link href="/experience" className="btn">
            View Experience →
          </Link>
        </div>
      </div>

      {/* Quick stats */}
      <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="section" style={{ padding: '3rem 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
            {[
              { n: '2', label: 'Enterprise Shadow Days', sub: 'Google & AWS' },
              { n: '5+', label: 'Languages & Frameworks', sub: 'Java, Python, TypeScript...' },
              { n: '3', label: 'Finance Certifications', sub: 'Microsoft, LinkedIn, AmplifyME' },
              { n: '2028', label: 'Expected Graduation', sub: 'BSc Hons, Stirling' },
            ].map((s, i) => (
              <div key={i} className="fade-up">
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--accent)', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem', color: 'var(--text)' }}>{s.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.2rem' }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What I'm building */}
      <div className="section">
        <p className="section-label">What I'm Building</p>
        <h2>Projects that show the work</h2>
        <div className="divider"></div>
        <div className="grid-2" style={{ marginTop: '2rem' }}>
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
            <Link href={p.link} key={i}>
              <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                <h3>{p.title}</h3>
                <div className="divider" style={{ margin: '1rem 0' }}></div>
                <p style={{ marginBottom: '1.5rem' }}>{p.desc}</p>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>{p.cta}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}