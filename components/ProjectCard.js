"use client";

import Image from "next/image";
import { space } from "../app/layout";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  image,
  stack,
  description,
  liveLink,
  githubLink,
}) {
  return (
    <div className="project-card">
      <div className="project-card-image-wrapper">
        <Image
          src={image}
          alt={title}
          fill
          className="project-card-image"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-extrabold text-gray-900">{title}</h3>
        <p className="text-sm text-orange-600 font-semibold">{stack}</p>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

        <div className="pt-4 flex gap-4">
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition">
              Live Demo <FaExternalLinkAlt />
            </a>
          )}

          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-gray-800 text-sm font-semibold hover:bg-gray-100 transition">
              GitHub <FaGithub />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}