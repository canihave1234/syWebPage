import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ number, title, image, stack, description, context, highlights = [], notes, demoNote, liveLink, githubLink }) {
  return (
    <article className="project-card">
      <a className="project-image-link" href={image} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} preview image`}>
        <Image src={image} alt={`${title} project preview`} fill sizes="(min-width: 1200px) 550px, (min-width: 760px) 45vw, 90vw" className="project-image" />
        <span className="image-label">View image <FaExternalLinkAlt aria-hidden="true" /></span>
      </a>
      <div className="project-body">
        <p className="eyebrow">Project {number}</p>
        <h3>{title}</h3>
        <p className="project-stack">{stack}</p>
        <p className="project-description">{description}</p>
        <p className="project-context">{context}</p>
        <ul className="project-highlights">{highlights.map((item) => <li key={item}>{item}</li>)}</ul>
        {notes && <details className="project-details"><summary>Engineering notes</summary><p>{notes}</p></details>}
        <div className="project-actions">
          {liveLink && <a className="button button-dark" href={liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Live demo: ${title}`}>Live demo <FaExternalLinkAlt aria-hidden="true" /></a>}
          {githubLink && <a className="button button-outline" href={githubLink} target="_blank" rel="noopener noreferrer" aria-label={`GitHub source: ${title}`}>GitHub <FaGithub aria-hidden="true" /></a>}
        </div>
        {demoNote && <p className="demo-note">{demoNote}</p>}
      </div>
    </article>
  );
}
