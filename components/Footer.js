import { space } from "../app/layout";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div
        className={`${space.className} max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6`}
      >
        <span className="text-sm">
          © {new Date().getFullYear()} Soyun Kim. All rights reserved.
        </span>

        <div className="flex gap-6 text-sm">
          <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=soyun0661@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Open in Gmail"
              className="hover:text-white transition"
            >
              Email
            </a>
          <a
            href="https://www.linkedin.com/in/soyunsokim"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/canihave1234"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
