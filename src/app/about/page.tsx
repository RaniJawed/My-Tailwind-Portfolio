import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div>
      <section className="about-section">
        <div className="container">
          <div className="image-container">
            <Image
              className="about-image"
              alt="image9.png"
              width={200}
              height={200}
              src="/image9.png"
            />
          </div>
          <div className="text-container">
            <h1 className="title">
              About me
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="description">
              Hello, I'm Ali Dost Jamali, a passionate frontend developer
              with a keen interest in artificial intelligence (AI). I am currently pursuing my studies
              in AI while continuously enhancing my skills in web development.
              With a background in programming and a growing knowledge of technologies 
              like TypeScript and Next.js, I aim to create engaging and user-friendly websites.
              I believe in constant learning and strive to stay updated with the latest trends
              in technology to deliver high-quality solutions.
            </p>
            <div className="button-container">
              <button className="cv-button">
                View CV
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;

