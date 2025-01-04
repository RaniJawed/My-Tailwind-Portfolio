import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Project() {
  return (
    <div>
      <section className="project-section">
        <div className="container">
          <div className="flex-col text-center w-full mb-20">
            <h1 className="title">
              My Projects
            </h1>
          </div>
          <div className="project-wrapper">
            {/* Project 1 */}
            <div className="project-card">
              <div className="image-wrapper">
                <Image
                  alt="gallery"
                  className="project-image"
                  width="600"
                  height="100"
                  src="/imageman.png"
                />
                <div className="project-info">
                  <h2 className="project-subtitle">Dynamic Resume</h2>
                  <h1 className="project-title"><b>Dynamic Resume</b></h1>
                  <p className="project-description">
                    This is my Dynamic Resume project.
                  </p>
                  <Link href="https://github.com/alijamali06">
                    <p className="project-link">View Project</p>
                  </Link>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-card">
              <div className="image-wrapper">
                <Image
                  alt="gallery"
                  className="project-image"
                  width="600"
                  height="100"
                  src="/image22.jpg"
                />
                <div className="project-info">
                  <h2 className="project-subtitle"><b>Calculator</b></h2>
                  <h1 className="project-title"><b>Calculator</b></h1>
                  <p className="project-description">
                    This is my Calculator project.
                  </p>
                  <Link href="https://github.com/alijamali06">
                    <p className="project-link">View Project</p>
                  </Link>
                </div>
                
              </div>
            </div>
            <div className="project-card">
              <div className="image-wrapper">
                <Image
                  alt="gallery"
                  className="project-image"
                  width="600"
                  height="100"
                  src="/image.jpg"
                />
                <div className="project-info">
                  <h2 className="project-subtitle"><b>Currency</b></h2>
                  <h1 className="project-title"><b>Currency Conveter</b></h1>
                  <p className="project-description">
                    This is my Calculator project.
                  </p>
                  <Link href="https://github.com/alijamali06">
                    <p className="project-link">View Project</p>
                  </Link>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project;


