export default function Outreach() {
  return (
    <main className="page">
      <div className="section" style={{ paddingTop: '6rem' }}>
        <p className="section-label fade-up">Project · In Progress</p>
        <h1 className="fade-up" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginTop: '0.5rem' }}>SME Outreach<br />Case Study</h1>
        <div className="divider fade-up"></div>
        <p className="fade-up" style={{ maxWidth: '560px', marginBottom: '3rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
          One of the core skills of an account manager is the ability to identify client needs, build rapport quickly, and translate a product's value into something that matters to that specific business. This project is my attempt to practice exactly that — before I'm in the role.
        </p>

        {/* What & Why */}
        <div className="card fade-up" style={{ marginBottom: '1.5rem' }}>
          <p className="section-label">The Idea</p>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>Reaching out to Aberdeen SMEs</h2>
          <p style={{ lineHeight: 1.8 }}>
            I'm cold-contacting local Aberdeen small and medium businesses — cafés, independent retailers, tradespeople — and asking for a short conversation about how they currently use (or don't use) digital tools in their business. The goal is to understand their real pain points and then write up how a cloud or SaaS solution could concretely help them. It's the discovery call part of sales, done from scratch.
          </p>
        </div>

        {/* Why it matters */}
        <div className="card fade-up" style={{ marginBottom: '1.5rem' }}>
          <p className="section-label">Why This Matters</p>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>It's the AM job, just smaller</h2>
          <p style={{ lineHeight: 1.8 }}>
            Account managers at companies like Salesforce, AWS, and Google spend their days doing exactly this at enterprise scale — finding out what a client actually needs, not just what they say they need, and matching that to a product. By doing it with local businesses I can build the muscle: writing outreach that gets a reply, running a conversation that surfaces real insight, and turning that insight into a written recommendation. The scale is smaller. The skill is identical.
          </p>
        </div>

        {/* Process */}
        <p className="section-label" style={{ margin: '3rem 0 1.5rem' }}>The Process</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { step: '01', title: 'Identify businesses', desc: 'Targeting Aberdeen SMEs across hospitality, retail, and trades — sectors where digital adoption is uneven and the conversation is interesting.' },
            { step: '02', title: 'Cold outreach', desc: 'Writing and sending personalised messages — in person, by email, or via LinkedIn — explaining what I\'m doing and asking for 15 minutes of their time.' },
            { step: '03', title: 'Discovery conversation', desc: 'Running a short, structured chat to understand how they currently operate, what slows them down, and whether they\'ve considered digital tools.' },
            { step: '04', title: 'Written case study', desc: 'Documenting what I found: the business context, the identified need, the product or solution I\'d recommend, and why. Published here.' },
          ].map((s, i) => (
            <div key={i} className="card fade-up" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--accent)', lineHeight: 1, flexShrink: 0 }}>{s.step}</div>
              <div>
                <h3 style={{ marginBottom: '0.4rem' }}>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Status */}
        <div className="card fade-up" style={{ marginTop: '3rem', borderColor: 'var(--accent)', borderLeftWidth: '2px' }}>
          <p className="section-label">Current Status</p>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>Outreach underway — first conversations being scheduled</h2>
          <p style={{ lineHeight: 1.8 }}>
            I'm currently in the outreach phase, contacting businesses and booking conversations. Case studies will be published here as they're completed. Check back for updates, or connect with me on LinkedIn to follow along.
          </p>
          <a
            href="https://uk.linkedin.com/in/callum-davidson-7025a22a4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ marginTop: '1.5rem', display: 'inline-flex' }}
          >
            Follow on LinkedIn ↗
          </a>
        </div>

        {/* What I'm learning */}
        <p className="section-label" style={{ margin: '3rem 0 1.5rem' }}>What I'm Learning</p>
        <div className="grid-2">
          {[
            { title: 'Cold outreach that converts', desc: 'How to write a message that gets a reply from someone who has no reason to say yes.' },
            { title: 'Discovery questioning', desc: 'How to ask questions that surface what someone actually needs, not just what they say they need.' },
            { title: 'Commercial awareness', desc: 'Understanding how small businesses think about cost, risk, and change — the same instincts that matter in enterprise sales.' },
            { title: 'Written communication', desc: 'Turning a conversation into a structured, readable document that makes the value clear.' },
          ].map((l, i) => (
            <div key={i} className="card fade-up">
              <h3 style={{ marginBottom: '0.5rem' }}>{l.title}</h3>
              <p>{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}