import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import priteshPic from './assets/pritesh.jpg';
import resumePic from './assets/PCU-BTECH-5141photo.jpg';

const App = () => {
  return (
    <>
      {/* ✅ Fixed Navbar usage */}
      <Navbar />

      <section className="hero" id="home">
        <img src={priteshPic} alt="My Photo" className="profile-pic" />
        <h1>Hello, I'm Pritesh Gholap</h1>
        <h3>Aspiring Web Developer | Problem Solver | DSA Learner</h3>
        <p>
          Passionate about building modern web applications, solving real-world
          problems with technology, and exploring innovative solutions.
        </p>
        <div className="buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <p>
            I’m Pritesh Gholap, a B.Tech Computer Engineering student at Pimpri Chinchwad University. 
            My interests lie in web development, Android development, IoT, and machine learning. 
            I’m passionate about building strong programming skills in Python, Java, and C++ while 
            exploring modern technologies and frameworks.
          </p>
          <h3>My Hobbies</h3>
          <ul className="hobbies-list">
            <li>💻 Coding and Competitive Programming</li>
            <li>🚀 Exploring new technologies</li>
            <li>📚 Reading tech blogs</li>
            <li>✈️ Traveling</li>
          </ul>
          <a
            href="https://www.linkedin.com/in/pritesh-gholap-b8114b28b/"
            target="_blank"
            rel="noreferrer"
            className="linkedin-btn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
            />
            Connect on LinkedIn
          </a>
        </div>
      </section>

      <section className="academics" id="academics">
        <h1>My Academic Details</h1>
        <table className="academics-table">
          <thead>
            <tr>
              <th>Qualification</th>
              <th>Institution</th>
              <th>Year</th>
              <th>Percentage/CGPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10th (SSC)</td>
              <td>NEMS</td>
              <td>2021</td>
              <td>93%</td>
            </tr>
            <tr>
              <td>12th (HSC)</td>
              <td>MGVM</td>
              <td>2023</td>
              <td>57%</td>
            </tr>
            <tr>
              <td>B.Tech (UG)</td>
              <td>PCU</td>
              <td>2025</td>
              <td>7.9 CGPA</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="projects" id="projects">
        <h1>My Projects</h1>
        <div className="project-container">
          <div className="project-card">
            <h2>Smart Door Lock</h2>
            <p>
              IoT-based door lock using RFID &amp; Keypad to improve home security.
              <strong> Tech:</strong> Arduino, C++, RFID
            </p>
          </div>
          <div className="project-card">
            <h2>Telecom Customer Churn Prediction Using ML</h2>
            <p>
              Helping Telecom Company to know the customer churn using database.
              <strong> Tech:</strong> ML, Random Forest
            </p>
          </div>
          <div className="project-card">
            <h2>Portfolio Website</h2>
            <p>
              Responsive personal portfolio built with HTML, CSS, and JavaScript.
              <strong> Tech:</strong> HTML, CSS, JS
            </p>
          </div>
        </div>
      </section>

      <section className="certificates" id="certificates">
        <h1>My Certificates</h1>
        <div className="card-container">
          <div className="certificate-card">
            <h2>Agile Project Management</h2>
            <p>Certified by Coursera</p>
            <a href="/src/assets/Agile Project Management.pdf" target="_blank" rel="noreferrer" className="btn">View Certificate</a>
          </div>
          <div className="certificate-card">
            <h2>Blockchain</h2>
            <p>Certified by Coursera</p>
            <a href="/src/assets/Blockchain.pdf" target="_blank" rel="noreferrer" className="btn">View Certificate</a>
          </div>
          <div className="certificate-card">
            <h2>Linux Fundamentals</h2>
            <p>Certified by RedHat</p>
            <a href="/src/assets/Linux Fundamentals (RH104).pdf" target="_blank" rel="noreferrer" className="btn">View Certificate</a>
          </div>
        </div>
      </section>

      <section className="resume" id="resume">
        <div className="resume-container">
          <div className="resume-left">
            <img src={resumePic} alt="Profile" className="resume-pic" />
            <div className="section">
              <h3>Contact</h3>
              <p>📞 866*****22</p>
              <p>✉️ pngholap2004@gmail.com</p>
              <p>📌 Yashwantnagar Talegaon, Pune</p>
            </div>
            <div className="section">
              <h3>Education</h3>
              <p>
                B.Tech in Computer Science &amp; Engineering <br />
                Pimpri Chinchwad University, Pune <br />
                2023–2027
              </p>
            </div>
            <div className="section">
              <h3>Skills</h3>
              <ul>
                <li>C/C++</li>
                <li>Python</li>
                <li>DSA</li>
                <li>HTML/CSS</li>
                <li>Exploring AI &amp; Cloud</li>
              </ul>
            </div>
          </div>

          <div className="resume-right">
            <h1>Pritesh Gholap</h1>
            <h2>Aspiring Software Engineer</h2>

            <div className="section">
              <h3>About Me</h3>
              <p>
                I am a Computer Science student passionate about software development,
                problem-solving, and exploring new technologies like AI, Cloud Computing, and IoT.
                I enjoy building practical projects and continuously learning new skills.
              </p>
            </div>

            <div className="section">
              <h3>Projects</h3>
              <p><strong>Smart Door Lock using RFID</strong><br />
                IoT-based security project with Arduino, RFID, and keypad.<br />
                <em>Tech: Arduino, C++, RFID Module</em></p>

              <p><strong>Student Result Management System</strong><br />
                Console-based Java app to manage student records.<br />
                <em>Tech: Java, File Handling, OOP</em></p>
            </div>

            <div className="section">
              <h3>Internships</h3>
              <p><strong>Web Development Intern – ABC Tech</strong><br />
                <em>June 2025 – Aug 2025</em><br />
                Built responsive web pages &amp; improved UI/UX design.</p>
            </div>

            <div className="section">
              <h3>Certifications</h3>
              <ul>
                <li>Introduction to Python - Coursera</li>
                <li>HTML, CSS &amp; JavaScript - Udemy</li>
                <li>Arduino IoT Projects - Self Learning</li>
              </ul>
            </div>

            <a href="/src/assets/Pritesh_Resume.pdf" download className="download-btn">Download Resume</a>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="contact-container">
          <h1>Contact Me</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks! Message sent.');
            }}
          >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <footer>
        <p>© 2025 Pritesh Gholap | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default App;
