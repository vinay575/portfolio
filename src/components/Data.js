import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image1 from '../images/ajax.png';
import image2 from '../images/bootstrap.png';
import image3 from '../images/command.png';
import image4 from '../images/css3.png';
import image5 from '../images/git.png';
import image6 from '../images/html5.png';
import image7 from '../images/javascript.png';
import image8 from '../images/jquery.png';
import image9 from '../images/npm.png';
import image10 from '../images/react.png';
import image11 from '../images/sass.png';
import image12 from '../images/vs-code.png';
import '../style.css';
const Data = () => {
  return (
<section id="app">
    <section className="banner">
        <header className="header">
          <a href="#" className="logo">
            <span>My</span>Portfolio_
          </a>
          <ul>
            <li><a id="one" href="#Home">Home</a></li>
            <li><a id="two" href="#Portfolio">Portfolio</a></li>
            <li><a id="three" href="#About">About</a></li>
            <li><a id="four" href="#ContactMe">Contact</a></li>
          </ul>
        </header>
        <section>
          <div className="content">
            <h3>Hey_</h3>
            <h2>I'm <span id="text">Vinay Bhaskar</span></h2>
            <p>
              Hello there! 👋 I'm Vinay, a passionate and dynamic individual diving headfirst into the world
              of web development.<br></br>As a recent graduate and aspiring full-stack developer, I bring fresh
              perspectives and a hunger for learning to every project.
            </p>
          </div>
        </section>
      </section>
      <div className="sta"></div>
      <section className="section" id="About">
        <div className="box-content">
          Hi! I’m Vinay Bhaskar, and I’m a developer who has a passion for building clean web applications
          with intuitive functionalities. I enjoy the process of turning ideas into reality using creative solutions.
          I’m always curious about learning new skills, tools, and concepts.
        </div>
        <div className="box"></div>
      </section>
      <section className="star">
        <p className="pot">
          What My Programming Skills Included?<br />
          I develop simple, intuitive and responsive user interfaces that help users get things done with less effort and
          time with those technologies.
        </p>
        <section>
              <div className="skills-box" >

          <ul className="skills-list">

            <li>
              <div className="skill-card">
                <div className="tooltip">HTML5</div>

                <div className="card-icon">
                  <img src={image6} alt="HTML5 logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">CSS3</div>

                <div className="card-icon">
                  <img src={image4} alt="CSS3 logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">JavaScript</div>

                <div className="card-icon">
                  <img src={image7} alt="JavaScript logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">jQuery</div>

                <div className="card-icon">
                  <img src={image8} alt="jQuery logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">Bootstrap</div>

                <div className="card-icon">
                  <img src={image2} alt="Bootstrap logo"/>
                </div>
              </div>
            </li>

          

            <li>
              <div className="skill-card">
                <div className="tooltip">React</div>

                <div className="card-icon">
                  <img src={image10} alt="React logo"/>
                </div>
              </div>
            </li>
    

            <li>
              <div className="skill-card">
                <div className="tooltip">SASS</div>

                <div className="card-icon">
                  <img src={image11} alt="SASS logo"/>
                </div>
              </div>
            </li>

         

            <li>
              <div className="skill-card">
                <div className="tooltip">Ajax</div>

                <div className="card-icon">
                  <img src={image1} alt="Ajax logo"/>
                </div>
              </div>
            </li>

    
            <li>
              <div className="skill-card">
                <div className="tooltip">Git</div>

                <div className="card-icon">
                  <img src={image5} alt="Git logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">Npm</div>

                <div className="card-icon">
                  <img src={image9} alt="Npm logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">Command Line</div>

                <div className="card-icon">
                  <img src={image3} alt="Command Line logo"/>
                </div>
              </div>
            </li>

            <li>
              <div className="skill-card">
                <div className="tooltip">VS Code</div>

                <div className="card-icon">
                  <img src={image12} alt="VS Code logo"/>
                </div>
              </div>
            </li>

            
          </ul>

        </div>
            </section>
         <div className="container">
                 <h2>Skills</h2>
                <div className="skills" >
                     <h3 className="name"  style={{ color: '#57D2F3' }}>HTML</h3>
                     <div className="rating">
                     <input type="radio" name="html"/>
                     <input type="radio" name="html"/>
                     <input type="radio" name="html"/>
                     <input type="radio" name="html"/>
                     <input type="radio" name="html"/>
                     <input type="radio" name="html"/>
                     <input type="radio" name="html"/>
                     <input type="radio" name="html"/>
                     <input type="radio" name="html"/>
                     <input type="radio" name="html"/>
                     </div>
                </div>
                <div className="skills">
                     <h3 className="name"  style={{ color: '#57D2F3' }}>CSS</h3>
                     <div className="rating">
                     <input type="radio" name="css"/>
                     <input type="radio" name="css"/>
                     <input type="radio" name="css"/>
                     <input type="radio" name="css"/>
                     <input type="radio" name="css"/>
                     <input type="radio" name="css"/>
                     <input type="radio" name="css"/>
                     <input type="radio" name="css"/>
                     <input type="radio" name="css"/>
                     <input type="radio" name="css"/>
                     </div>
                </div>
                <div className="skills" >
                     <h3 className="name"  style={{ color: '#57D2F3' }}>JavaScript</h3>
                     <div className="rating">
                     <input type="radio" name="js"/>
                     <input type="radio" name="js"/>
                     <input type="radio" name="js"/>
                     <input type="radio" name="js"/>
                     <input type="radio" name="js"/>
                     <input type="radio" name="js"/>
                     <input type="radio" name="js"/>
                     <input type="radio" name="js"/>
                     <input type="radio" name="js"/>
                     <input type="radio" name="js"/>
                     </div>
                </div>
                <div className="skills">
                     <h3 className="name"  style={{ color: '#57D2F3' }}>React</h3>
                     <div className="rating">
                     <input type="radio" name="react"/>
                     <input type="radio" name="react"/>
                     <input type="radio" name="react"/>
                     <input type="radio" name="react"/>
                     <input type="radio" name="react"/>
                     <input type="radio" name="react"/>
                     <input type="radio" name="react"/>
                     <input type="radio" name="react"/>
                     <input type="radio" name="react"/>
                     <input type="radio" name="react"/>
                    </div>
                 </div>
                 <div className="skills">
                     <h3 className="name"  style={{ color: '#57D2F3' }}>Java</h3>
                     <div className="rating">
                      <input type="radio" name="Java"/>
                      <input type="radio" name="Java"/>
                      <input type="radio" name="Java"/>
                      <input type="radio" name="Java"/>
                      <input type="radio" name="Java"/>
                      <input type="radio" name="Java"/>
                      <input type="radio" name="Java"/>
                      <input type="radio" name="Java"/>
                      <input type="radio" name="Java"/>
                      <input type="radio" name="Java"/>
                      </div>
                </div>
                <div className="skills">
                     <h3 className="name"   style={{ color: '#57D2F3' }}>SQL</h3>
                     <div className="rating">
                      <input type="radio" name="sql"/>
                      <input type="radio" name="sql"/>
                      <input type="radio" name="sql"/>
                      <input type="radio" name="sql"/>
                      <input type="radio" name="sql"/>
                      <input type="radio" name="sql"/>
                      <input type="radio" name="sql"/>
                      <input type="radio" name="sql"/>
                      <input type="radio" name="sql"/>
                      <input type="radio" name="sql"/>
                     </div>
                </div>
        </div>
    </section>
</section>
  )
}

export default Data;
