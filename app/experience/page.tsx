export default function Experience() {
  return (
    <main className="page">
      <div className="section" style={{ paddingTop: '6rem' }}>
        <p className="section-label fade-up">Background</p>
        <h1 className="fade-up" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '0.5rem' }}>Experience &<br />Education</h1>
        <div className="divider fade-up"></div>
        <p className="fade-up" style={{ maxWidth: '500px', marginBottom: '4rem' }}>
          A Computing Science and Business student with hands-on exposure to enterprise sales, investment management, and client-facing environments.
        </p>

        {/* EXPERIENCE */}
        <p className="section-label" style={{ marginBottom: '2rem' }}>Experience</p>

        <div className="exp-entry fade-up">
          <div className="exp-meta">2025</div>
          <div className="exp-title">Google Insight Day — Account Management</div>
          <div className="exp-company">Google</div>
          <ul className="exp-bullets">
            <li>Shadowed a Google Account Manager to gain first-hand exposure to enterprise client engagement, solution selling, and relationship management at scale.</li>
            <li>Explored how technical products are positioned and communicated to meet diverse business needs across industries.</li>
          </ul>
        </div>

        <div className="exp-entry fade-up">
          <div className="exp-meta">2025</div>
          <div className="exp-title">Enterprise Account Manager Shadow</div>
          <div className="exp-company">Amazon Web Services (AWS)</div>
          <ul className="exp-bullets">
            <li>Visited the AWS office and spent time with an Enterprise Account Manager, learning how large-scale cloud and cybersecurity solutions are positioned and sold to business clients.</li>
            <li>Gained insight into the enterprise sales cycle, client relationship management, and how technical products are translated into commercial value for organisations.</li>
          </ul>
        </div>

        <div className="exp-entry fade-up">
          <div className="exp-meta">2024 – Present</div>
          <div className="exp-title">Portfolio Developer</div>
          <div className="exp-company">Stirling Student Managed Investment Fund (SMIF)</div>
          <ul className="exp-bullets">
            <li>Helped build the automated portfolio management system using Python, enabling daily updates including currency conversions, live cash positions, and dividend tracking.</li>
            <li>Contributed to scripts generating comprehensive weekly performance reports communicating insights to student fund stakeholders.</li>
            <li>Collaborated with Committee Chairs to enable buy/sell history and translate technical outputs into actionable investment decisions.</li>
          </ul>
        </div>

        <div className="exp-entry fade-up">
          <div className="exp-meta">2025</div>
          <div className="exp-title">Investment Consulting Insight Day</div>
          <div className="exp-company">Hymans Robertson</div>
          <ul className="exp-bullets">
            <li>Gained exposure to institutional investment strategies, pension fund management, and asset allocation approaches for high net-worth individuals and corporate clients.</li>
            <li>Developed understanding of how consultants tailor complex financial solutions to meet diverse client needs, reinforcing skills in stakeholder communication and advisory thinking.</li>
          </ul>
        </div>

        <div className="exp-entry fade-up">
          <div className="exp-meta">September 2023 – Present</div>
          <div className="exp-title">Lifeguard</div>
          <div className="exp-company">Sport Aberdeen, Aberdeen</div>
          <ul className="exp-bullets">
            <li>Maintained constant situational awareness in high-risk environments, making quick and decisive responses to incidents.</li>
            <li>Communicated clearly with team members and the public in time-critical situations, applying strict safety and compliance procedures under pressure.</li>
          </ul>
        </div>

        <div className="exp-entry fade-up">
          <div className="exp-meta">November 2024 – Present</div>
          <div className="exp-title">Bartender</div>
          <div className="exp-company">The DutchMill Hotel, Aberdeen</div>
          <ul className="exp-bullets">
            <li>Built rapport with customers in a fast-paced hospitality setting, consistently delivering a positive client experience through attentive and proactive service.</li>
            <li>Managed cash handling and customer data with discretion, demonstrating trustworthiness and attention to detail.</li>
          </ul>
        </div>

        {/* EDUCATION */}
        <p className="section-label" style={{ margin: '3rem 0 2rem' }}>Education</p>

        <div className="exp-entry fade-up">
          <div className="exp-meta">September 2024 – June 2028</div>
          <div className="exp-title">BSc (Hons) Computing Science with Business</div>
          <div className="exp-company">University of Stirling</div>
          <ul className="exp-bullets">
            <li>Relevant areas: Programming, Database Management, Systems, Cybersecurity Fundamentals, Finance, Business & Technology</li>
          </ul>
        </div>

        {/* SKILLS */}
        <p className="section-label" style={{ margin: '3rem 0 1.5rem' }}>Technical Skills</p>
        <div className="card fade-up" style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.75rem' }}>Languages</div>
              {['Java', 'Python', 'SQL (MySQL)', 'TypeScript', 'HTML', 'PHP', 'Ada', 'LaTeX'].map(s => <span key={s} className="tag">{s}</span>)}
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.75rem' }}>DevOps & Tools</div>
              {['Git', 'GitHub', 'Node.js', 'HTTP', 'XML', 'JSON'].map(s => <span key={s} className="tag">{s}</span>)}
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.75rem' }}>Finance & Data</div>
              {['Excel Modelling', 'Python Financial APIs', 'Data Visualisation'].map(s => <span key={s} className="tag">{s}</span>)}
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <p className="section-label" style={{ margin: '3rem 0 1.5rem' }}>Certifications & Awards</p>
        <div className="grid-2 fade-up">
          {[
            { name: 'Career Essentials in Cybersecurity', org: 'Microsoft', year: '2025' },
            { name: 'Algorithmic Trading and Stocks Essential Training', org: 'LinkedIn Learning', year: '2025' },
            { name: 'Finance Accelerator', org: 'AmplifyME', year: '2024' },
            { name: 'National Pool Lifeguard Qualification', org: 'RLSS UK', year: 'Valid until 2027' },
            { name: 'Gold Chief Scout Award', org: 'The Scout Association', year: '2023' },
          ].map((c, i) => (
            <div key={i} className="card">
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.4rem' }}>{c.year}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', marginBottom: '0.2rem' }}>{c.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{c.org}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}