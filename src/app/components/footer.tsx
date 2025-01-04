import React from 'react';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-content">
          <a className="footer-logo">
            <span className="footer-title">Ali Dost</span>
          </a>
          <p className="footer-text">
            ©Copyright 2023 Ali Dost.
          </p>
          <span className="footer-socials">
            <Link href="https://github.com/alijamali06" className="footer-icon">
              <BsGithub />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
