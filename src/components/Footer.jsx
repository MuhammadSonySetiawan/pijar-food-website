import React from "react";

function Footer() {
  return (
    <div>
      <footer style={{ position: "relative" }}>
        <div>
          <h2 className="text-primary text-center">Eat, Cook, Repeat</h2>
          <p className="text-muted text-center">Share your best recipe by uploading here !</p>
        </div>

        <p className="footer-copyright">
          © built by
          <a className="text-decoration-none" href="https://github.com/MuhammadSonySetiawan"> Muhammad Sony Setiawan
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
