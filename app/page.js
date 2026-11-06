import Image from "next/image";
import { FaArrowRight, FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const projects = [
  {
    number: "01",
    title: "OCR Check Deposit System",
    image: "/projects/ocr.jpg",
    stack: "Java 17 · Tesseract OCR · Docker · SQLite",
    description: "A mobile-style cheque capture app inspired by the banking workflows I worked with as a developer.",
    context: "From a camera image to a searchable record: capture a cheque, extract its text, and save the result with a memo.",
    highlights: ["Camera capture with an alignment guide", "Grayscale and contrast preprocessing before OCR", "SQLite records with HTML and JSON views"],
    notes: "Built with Java HttpServer rather than a web framework. This project helped me explore mobile camera input, OCR preprocessing, and deployment with Docker. Recognition depends on lighting, focus, and handwriting.",
    demoNote: "Camera capture works best on a phone. Use a sample cheque image.",
    liveLink: "https://ocrprjsykim.up.railway.app/",
    githubLink: "https://github.com/canihave1234/OCR",
  },
  {
    number: "02",
    title: "Bi-weekly Payroll Tracker",
    image: "/projects/money.jpg",
    stack: "Next.js · React · Supabase · Tailwind CSS",
    description: "A tool I built while working in a restaurant to keep shifts, tips, and pay in one place.",
    context: "Instead of piecing together my hours and tips at payday, I can log each shift and prepare a bi-weekly summary for my manager.",
    highlights: ["Daily shift and working-hour tracking", "Tip recording and total earnings calculations", "Bi-weekly payroll summaries with Supabase storage"],
    notes: "Built around a workflow I actually use. The project connects shift entry, earnings calculations, and cloud storage in a focused interface. PDF export and support for multiple workplaces are planned improvements.",
    liveLink: "https://sy-sushi-time.vercel.app",
    githubLink: "https://github.com/canihave1234/sushiTime",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#home" aria-label="Soyun Kim, home">SOYUN KIM<span aria-hidden="true">.</span></a>
          <nav aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Software developer · Toronto, ON</p>
              <h1 id="hero-title">Hi, I’m Soyun.<br /><span>I build things<br />I actually use.</span></h1>
              <p className="hero-description">Software developer with 1.5+ years in banking applications and authentication systems, plus experience supporting Ontario government applications. I build reliable Java and web software, from development through QA.</p>
              <div className="actions">
                <a className="button button-dark" href="#projects">View projects <FaArrowRight aria-hidden="true" /></a>
                <a className="button button-outline" href="/sy_kim_resume.pdf" download><FaDownload aria-hidden="true" />Download resume</a>
                <a className="button button-outline" href="https://www.linkedin.com/in/soyunsokim" target="_blank" rel="noopener noreferrer"><FaLinkedinIn aria-hidden="true" />LinkedIn</a>
              </div>
            </div>
            <aside className="hero-note" aria-label="Background at a glance">
              <div className="hero-art">
                <Image src="/sy3.gif" alt="" width={292} height={292} className="hero-illustration" priority />
                <Image src="/soyun-character-still.png" alt="" width={292} height={292} className="hero-illustration hero-illustration-still" />
              </div>
              <div className="hero-note-copy">
                <p className="eyebrow">A little about me</p>
                <p>Banking foundations.<br />Public-sector experience.<br /><strong>Useful software.</strong></p>
                <a className="text-link" href="#experience">See my experience <FaArrowRight aria-hidden="true" /></a>
              </div>
            </aside>
          </div>
        </section>

        <section id="projects" className="section projects-section" aria-labelledby="projects-title">
          <div className="container">
            <div className="section-heading">
              <div><p className="eyebrow">01 / Selected work</p><h2 id="projects-title">Real problems.<br />Personal projects.</h2></div>
              <p>Built from my experience in banking and the small challenges in my everyday life.</p>
            </div>
            <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} {...project} />)}</div>
            <div className="portfolio-note">
              <div><h3>And this portfolio.</h3><p>Built with Next.js and Tailwind CSS, deployed on Vercel.</p></div>
              <a className="text-link" href="https://github.com/canihave1234/syWebPage" target="_blank" rel="noopener noreferrer">View source <FaGithub aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="experience" className="section experience-section" aria-labelledby="experience-title">
          <div className="container experience-grid">
            <div><p className="eyebrow">02 / Experience</p><h2 id="experience-title">Built with<br />real teams.</h2><p className="section-intro">From banking and authentication systems to Ontario government applications: development, test automation, technical analysis, and release readiness.</p><a className="text-link" href="/sy_kim_resume.pdf" download>Full experience in my resume <FaDownload aria-hidden="true" /></a></div>
            <div className="experience-list">
              <article className="experience-item">
                <p className="experience-date">Sep 2026 – Present</p>
                <h3>Jr. Technical Analyst <span className="role-type">(Co-op)</span></h3><p className="employer">Government of Ontario</p><p className="team-name">Labour and Transportation I&IT Cluster</p>
                <ul><li>Support public-facing transportation applications, including interfaces for driver’s licence renewal and vehicle plate services.</li><li>Use AI-assisted workflows for technical analysis, development tasks, and troubleshooting.</li><li>Write Azure DevOps queries and scripts to track bugs and automate defect assignment and issue management.</li></ul>
              </article>
              <article className="experience-item">
                <p className="experience-date">May 2026 – Aug 2026</p>
                <h3>Software Quality Assurance Engineer <span className="role-type">(Co-op)</span></h3><p className="employer">Government of Ontario</p><p className="team-name">Children, Youth & Social Services I+IT Cluster</p>
                <ul><li>Supported enterprise workflow and approval applications in a Power Apps environment.</li><li>Assisted with incident resolution, root cause analysis, and configuration and integration troubleshooting.</li><li>Executed test cases, tracked defects, and validated systems to support release readiness across Agile sprints.</li></ul>
              </article>
              <article className="experience-item">
                <p className="experience-date">Mar 2023 – Jul 2024</p>
                <h3>Software Developer</h3><p className="employer">Ensof Technology</p>
                <ul><li>Developed 10+ custom features in core Java for banking applications and client-specific workflows.</li><li>Built mobile authentication protocols and custom message formats for financial institutions.</li><li>Improved financial applications through test automation and code optimization, collaborating with clients from requirements through QA.</li></ul>
              </article>
              <article className="experience-item">
                <p className="experience-date">May 2022 – Aug 2022</p>
                <h3>Intern</h3><p className="employer">Bank of Korea</p>
                <ul><li>Conducted manufacturing GDP surveys for 300+ enterprises across five industries.</li><li>Cleaned and validated economic data in Excel and documented workflows for consistent reporting.</li></ul>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-title">
          <div className="container about-grid">
            <div><p className="eyebrow">03 / About me</p><h2 id="about-title">Curious by nature.<br />Practical by habit.</h2><p className="about-copy">I’m Soyun Kim, a Toronto-based developer with experience in financial software and enterprise government systems. I care about reliable, user-focused applications and enjoy taking work from development through testing and validation.</p><p className="about-copy">Alongside studying Computer Programming & Analysis at Seneca Polytechnic, I support transportation applications at the Government of Ontario. My personal projects give me another way to turn everyday problems into useful software.</p></div>
            <div className="background-card"><p className="eyebrow">Education & foundations</p><h3>Seneca Polytechnic</h3><p>Computer Programming & Analysis<br />Diploma · Sep 2024 – Present<br />President’s Honour List · Fall 2024 & Fall 2025</p><h3>Dongduk Women’s University</h3><p>B.A. in Business Administration<br />Mar 2015 – Aug 2020</p><div className="background-divider" /><p className="eyebrow">What I work with</p><div className="skill-tags"><span>Java</span><span>JavaScript</span><span>React / Next.js</span><span>SQL</span><span>Docker</span><span>Azure DevOps</span><span>Power Apps</span><span>Git</span></div><p className="credential">Microsoft Certified: Azure Fundamentals</p></div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="container contact-inner"><div><p className="eyebrow">Let’s connect</p><h2 id="contact-title">Have a co-op opportunity?</h2><p>I’d love to talk about your team and how I could contribute.</p></div><div className="contact-actions"><a className="button button-dark" href="mailto:soyun0661@gmail.com">Email me <FaArrowRight aria-hidden="true" /></a></div></div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
