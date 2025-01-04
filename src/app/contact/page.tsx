import React from 'react'
import Link from 'next/link'
import { BsGithub } from "react-icons/bs";

function Contact() {
  return (
    <div className='contact'>
      <section className="contact-section">
        <div className="container">
          <div className="flex-col text-center w-full mb-12">
            <h1 className="title">
              Contact Us
            </h1>
            <p className="subtitle">
              Feel Free to Teach
            </p>
          </div>
          <div className="form-container">
            <div className="form-wrapper">
              <div className="form-item">
                <div className="input-container">
                  <label htmlFor="name" className="input-label">Name</label>
                  <input type="text" id="name" name="name" className="input-field" />
                </div>
              </div>
              <div className="form-item">
                <div className="input-container">
                  <label htmlFor="email" className="input-label">Email</label>
                  <input type="email" id="email" name="email" className="input-field" />
                </div>
              </div>
              <div className="form-item">
                <div className="input-container">
                  <label htmlFor="message" className="input-label">Message</label>
                  <textarea id="message" name="message" className="textarea-field" />
                </div>
              </div>
              <div className="form-item">
                <button className="submit-btn">Send Message</button>
              </div>
              <div className="contact-info">
                <a href="mailto:alijamali03063240450@gmail.com" className="email-link">alijamali03063240450@gmail.com</a>
                <p className="phone-info">Phone No: 0306-3240450</p>
                <p className="address-info">Mumtaz Colony P/O Bhan Sayedabad, Talka Sehwan, Distt Jamshoro</p>
                <span className="github-icon">
                  <Link href={"https://github.com/alijamali06"} className="github-link">
                    <BsGithub />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;
