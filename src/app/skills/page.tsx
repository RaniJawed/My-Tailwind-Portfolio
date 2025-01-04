import React from 'react'
import { CiSquareCheck } from 'react-icons/ci'

const Skills = () => {
  return (
    <div>
      <section className="skills-section">
        <div className="container">
          <div className="text-center w-full mb-20">
            
            <h1 className="section-title">
              My skills
            </h1>
          </div>
          <div className="skills-wrapper">
            {/* Skill 1 */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container">
                  <CiSquareCheck className="skill-icon"/>
                </div>
                <h2 className="skill-name">
                  HTML
                </h2>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '100%' }}></div>
                </div>
                <p className="progress-text">100%</p>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container">
                  <CiSquareCheck className="skill-icon"/>
                </div>
                <h2 className="skill-name">
                  CSS
                </h2>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '88%' }}></div>
                </div>
                <p className="progress-text">88%</p>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container">
                  <CiSquareCheck className="skill-icon"/>
                </div>
                <h2 className="skill-name">
                  Javascript/Typescript
                </h2>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '95%' }}></div>
                </div>
                <p className="progress-text">95%</p>
              </div>
            </div>

            {/* Skill 4 */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container">
                  <CiSquareCheck className="skill-icon"/>
                </div>
                <h2 className="skill-name">
                  NEXT JS
                </h2>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
                <p className="progress-text">85%</p>
              </div>
            </div>

            {/* Skill 5 */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container">
                  <CiSquareCheck className="skill-icon"/>
                </div>
                <h2 className="skill-name">
                  ArcMap
                </h2>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
                <p className="progress-text">85%</p>
              </div>
            </div>

            {/* Skill 6 */}
            <div className="skill-card">
              <div className="skill-header">
                <div className="icon-container">
                  <CiSquareCheck className="skill-icon"/>
                </div>
                <h2 className="skill-name">
                  Wordpress
                </h2>
              </div>
              <div className="progress-bar-container">
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
                <p className="progress-text">85%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills;

