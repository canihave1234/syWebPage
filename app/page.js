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
    <main className="w-screen overflow-x-hidden">
      {/* ================= HERO GRID ================= */}
      <section
        className="grid w-full h-screen"
        style={{
          gridTemplateColumns: "1fr 1.4fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {/* LEFT TOP (01) */}
        <div className="bg-lime-200 p-12 flex flex-col justify-between">
          <SectionTitle number="01"  title="Software developer with 1.5+ years"
            titleClass="text-2xl" />
          
        </div>

        {/* CENTER HERO */}
        <div className="bg-gray-300 row-span-2  flex items-center justify-center">
          <div className="relative w-[75%] h-[75%]">
            <Image
              src="/sy.gif"
              alt="Hero"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* RIGHT TOP (03) */}
        <div
          className="p-12 flex flex-col justify-between"
        >
          <SectionTitle number="02"  />

          <div className={`${space.className} space-y-6 text-2xl font-extrabold text-gray-500`}>
            <div className="flex items-center gap-4">
              <MdEmail className="text-2xl text-orange-600" />
              <a href="mailto:soyun0661@gmail.com" className="hover:underline text-xl" >
                soyun0661@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaLinkedinIn className="text-2xl text-orange-600" />
              <a
                href="https://www.linkedin.com/in/soyunsokim"
                target="_blank"
                className="hover:underline  text-xl"
              >
                linkedin/soyunsokim
              </a>
            </div>

            <div className="flex items-center gap-4">
              <FaGithub className="text-2xl text-orange-600" />
              <a
                href="https://github.com/your-id"
                target="_blank"
                className="hover:underline  text-xl"
              >
                github.com/your-id
              </a>
            </div>
          </div>



        </div>

        {/* LEFT BOTTOM (02) */}
        <div onClick={() => scrollTo("about")} 
        className="bg-orange-200 p-12 flex flex-col justify-between cursor-pointer hover:brightness-95">
          
            <SectionTitle
            number="03"
            title="ABOUT ME"
            titleClass="text-3xl"
          />
        
        </div>

        {/* RIGHT BOTTOM (04) */}
        <div
          onClick={() => scrollTo("projects")}
          className="bg-gray-200 p-12 flex flex-col justify-between cursor-pointer hover:brightness-95"
        >
          <SectionTitle
            number="04"
            title="MY PROJECTS"
            titleClass="text-3xl"
          />

          <p className={`${space.className} text-md font-extrabold text-gray-600`}>
            I enjoy building projects that solve real problems in my everyday life.
          </p>
         
        </div>
      </section>

      {/* ================= DETAIL SECTIONS ================= */}
      <section
      id="about"
      className="min-h-screen bg-green-200 p-20 flex flex-col justify-center"
    >
      {/* 타이틀은 그대로 */}
      <SectionTitle
        number="03"
        title="ABOUT ME"
        numberClass="text-xl"
        titleClass="text-xl"
      />

      {/* CONTENT */}
      <div className="mt-16 w-full max-w-8xl flex flex-col items-center gap-16">
        
        {/* HI IM SOYUN */}
        <h1
          className={`${space.className} text-7xl font-extrabold text-gray-700 text-center`}
        >
          Hi, I’m Soyun Kim.
        </h1>

        {/* TWO COLUMN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full items-start">
          {/* LEFT – EDUCATION + EXPERIENCE */}
    <div className="flex flex-col items-center text-center gap-10">
      
      {/* EDUCATION */}
      <div className="flex flex-col items-center gap-2">
        <FaGraduationCap className="text-orange-500 text-5xl" />

        <p className={`${space.className} text-xl text-gray-500`}>
          Computer Programming & Analysis
          <br />
          <span className="font-semibold text-gray-600">
            Advanced Diploma
          </span>
        </p>

        <p className={`${space.className} text-m text-gray-400`}>
          Seneca Polytechnic
          <br />
          Ontario, Canada
        </p>
      </div>

      {/* EXPERIENCE */}
      <div className="flex flex-col items-center gap-2">
        <FaBriefcase className="text-orange-500 text-4xl" />

        <p className={`${space.className} text-xl font-semibold text-gray-600`}>
          Software Developer
        </p>

        <p className={`${space.className} text-m text-gray-400`}>
            Banking & Financial Systems
          <br />
          with 1.5 + years
        </p>
      </div>

    </div>

  

      {/* RIGHT – DESCRIPTION */}
      <div className="flex flex-col gap-2 text-gray-600">
        <p className={`${space.className} text-xl leading-relaxed`}>
          I’m a developer who enjoys building things I actually use.
        </p>

        <p className={`${space.className} text-xl leading-relaxed`}>
          I like turning everyday problems into software,
          <br/> from small utilities that support my daily work to banking-related tools.

        </p>

        <p className={`${space.className} text-xl leading-relaxed`}>
          Through these projects, I focus on clean code, usability,
          and learning through real-world experience rather than tutorials alone.
        </p>

        <p className={`${space.className} text-xl leading-relaxed`}>
          I’m currently looking for a co-op opportunity where I can learn,
          contribute, and build meaningful software with a real team.
        </p>
      </div>

    </div>
  </div>
</section>


{/* ================= PROJECT SECTION ================= */}


<section
  id="projects"
  className="min-h-screen bg-gray-100 py-20 px-20 flex flex-col justify-center"
>
<SectionTitle number="04" title="PROJECTS" numberClass="text-xl" titleClass="text-xl" />
<div className={`${space.className} mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20`}>

    <ProjectCard
      title="OCR Check Deposit System"
      image="/projects/ocr.jpg"
      stack="Java · Tesseract OCR · Docker/Railway · SQLite"
      description="A mobile web app inspired by real banking workflows, using OCR to recognize handwritten check amounts."
      liveLink="https://ocrprjsykim.up.railway.app/"
      githubLink="https://github.com/canihave1234/OCR"
    />


      <ProjectCard
      title="Bi-weekly Payroll Tracker"
      image="/projects/money.jpg"
      stack="Next.js · Supabase · Vercel · Tailwind CSS"
      description="Built for myself to track restaurant shifts and tips. Generates the bi-weekly reports I actually submit to my manager."
      liveLink="https://sy-sushi-time.vercel.app"
      githubLink="https://github.com/canihave1234/sushiTime"
    />


      <ProjectCard
      title="Personal Portfolio Website"
      image="/projects/my.jpg"
      stack="Next.js · Tailwind CSS · Vercel · React"
     description="A personal portfolio website built to showcase projects and practice modern frontend development."

      liveLink="https://your-portfolio-url.com"
      githubLink="https://github.com/your-id/portfolio"
    />


  </div>
      </section>

       <Footer />
       <ScrollToTop />
    </main>
  );
  
}
