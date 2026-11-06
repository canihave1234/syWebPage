export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Soyun Kim.</p>
        <div className="footer-links">
          <a href="mailto:soyun0661@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/soyunsokim" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/canihave1234" target="_blank" rel="noopener noreferrer">GitHub / canihave1234</a>
        </div>
      </div>
    </footer>
  );
}
