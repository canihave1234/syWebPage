"use client";

import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { space } from "../app/layout";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* ================= HERO GRID ================= */}
      <section
        className="
          grid
          w-full
          h-screen
          grid-cols-2
          grid-rows-2
          lg:grid-cols-[1fr_1.4fr_1fr]
          lg:grid-rows-2
        "
      >
        {/* 01 */}
        <div className="bg-lime-200 p-10 flex flex-col justify-between">
          <SectionTitle
            number="01"
            title="Software developer with 1.5+ years"
            titleClass="text-2xl"
          />
        </div>

        {/* HERO (DESKTOP ONLY) */}
        <div className="hidden lg:flex bg-gray-300 row-span-2 items-center justify-center">
          <div className="relative w-[70%] h-[70%]">
            <Image
              src="/sy3.gif"
              alt="Hero"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* 02 */}
        <div className="bg-white p-10 flex flex-col justify-between">
          <SectionTitle number="02" />

          <div
            className={`${space.className} space-y-4 text-lg font-bold text-gray-600`}
          >
            <div className="flex items-center gap-3 break-all">
              <MdEmail className="text-orange-600 text-base shrink-0" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=soyun0661@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-sm"
              >
                soyun0661@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 break-all">
              <FaLinkedinIn className="text-orange-600  text-base shrink-0" />
              <a
                href="https://www.linkedin.com/in/soyunsokim"
                target="_blank"
                className="hover:underline text-sm"
              >
                linkedin/soyunsokim
              </a>
            </div>

            <div className="flex items-center gap-3  break-all">
              <FaGithub className="text-orange-600  text-base shrink-0" />
              <a
                href="https://github.com/canihave1234"
                target="_blank"
                className="hover:underline text-sm"
              >
                github.com/soyun
              </a>
            </div>
          </div>
        </div>

        {/* 03 */}
        <div
          onClick={() => scrollTo("about")}
          className="bg-orange-200 p-10 flex flex-col justify-between cursor-pointer hover:brightness-95"
           
        >
          <SectionTitle number="03" title="ABOUT ME" titleClass="text-3xl" />
        </div>

        {/* 04 */}
        <div
          onClick={() => scrollTo("projects")}
          className="bg-gray-200 p-10 flex flex-col justify-between cursor-pointer hover:brightness-95"
        >
          <SectionTitle number="04" title="MY PROJECTS" titleClass="text-3xl" />
          <p
            className={`${space.className} text-sm font-bold text-gray-600`}
          >
            I enjoy building projects that solve real problems in my everyday
            life.
          </p>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="min-h-screen bg-green-200 px-10 py-24 lg:px-20 flex flex-col"
      >
        
        <SectionTitle title="ABOUT ME" titleClass="text-2xl" />

        <h1
          className={`${space.className} mt-16 text-5xl font-extrabold text-gray-700 text-center`}
        >
          Hi, I’m Soyun Kim.
        </h1>

        <div className="mt-16 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* LEFT */}
          <div className="flex flex-col items-center text-center gap-10">
            <div>
              <FaGraduationCap className="mx-auto text-orange-500 text-4xl" />
              <p className={`${space.className} mt-3 text-lg text-gray-600`}>
                Computer Programming & Analysis
                <br />
                <span className="font-semibold text-gray-600">Advanced Diploma</span>
              </p>
              <p className={`${space.className} text-sm text-gray-500`}>
                Seneca Polytechnic · Toronto
              </p>
            </div>

            <div>
              <FaBriefcase className="mx-auto text-orange-500 text-3xl" />
              <p className={`${space.className} mt-3 text-lg font-semibold text-gray-600`}>
                Software Developer
              </p>
              <p className={`${space.className} text-sm text-gray-500`}>
                Banking systems · 1.5+ years
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4 text-gray-700">
            <p className={`${space.className} text-lg`}>
              I’m a developer who enjoys building things I actually use.
            </p>
            <p className={`${space.className} text-lg`}>
              I turn everyday problems into software — from small utilities that
              support my daily work to banking-related tools.
            </p>
            <p className={`${space.className} text-lg`}>
              I’m currently looking for a co-op opportunity to learn, contribute,
              and grow with a real team.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
  id="projects"
  className="min-h-screen bg-gray-100 py-20 px-10 lg:px-20"
>
  <SectionTitle title="PROJECTS" titleClass="text-2xl" />

  <div className={`${space.className} mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20`}>
    <ProjectCard
      title="OCR Check Deposit System"
      image="/projects/ocr.jpg"
      stack="Java · Tesseract OCR · Docker · SQLite"
      description="OCR-based check deposit app inspired by real banking workflows."
      liveLink="https://ocrprjsykim.up.railway.app/"
      githubLink="https://github.com/canihave1234/OCR"
    />

    <ProjectCard
      title="Bi-weekly Payroll Tracker"
      image="/projects/money.jpg"
      stack="Next.js · Supabase · Tailwind CSS"
      description="Personal tool to track shifts, tips, and generate payroll reports."
      liveLink="https://sy-sushi-time.vercel.app"
      githubLink="https://github.com/canihave1234/sushiTime"
    />

    <ProjectCard
      title="Personal Portfolio Website"
      image="/projects/my.jpg"
      stack="Next.js · Tailwind CSS · Vercel"
      description="Portfolio website showcasing projects and real-world development."
      liveLink="https://soyunsmkim.vercel.app/"
      githubLink="https://github.com/canihave1234/syWebPage"
    />
  </div>
</section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
