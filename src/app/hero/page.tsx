"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <section className="hero-container">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="hero-text">
          <h1 className="hero-title">
            I am a
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "Frontend Developer",
                  "Backend Developer",
                  "UI/UX Designer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="hero-divider"></div>
          <p className="hero-description">
            I am a passionate and skilled front-end developer with expertise
            in building responsive, user-friendly web applications. With
            experience in HTML, CSS, JavaScript, React, and Next.js, I bring a
            strong understanding of UI/UX principles and design aesthetics to
            every project. My focus is on creating seamless and engaging user
            experiences while ensuring functionality and performance.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <button className="contact-button">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <Image
            className="hero-image-content"
            alt="imag.jpeg"
            width={700}
            height={700}
            src="/image9.png"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
