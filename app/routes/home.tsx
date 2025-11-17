import type { Route } from "./+types/home";
import "../styles/style.css";
import upActivity from "../assets/up-onClick.svg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jose | Portfolio" },
    { name: "Jose | Portfolio", content: "Jose | Portfolio" },
  ];
}

export default function Home() {
  return (
    <div>
      <main className="main-page ">
        <div className="up-onClick">
          <img src={upActivity} alt="Up on Click Activity" className="up-icon" />
        </div>
        <div className="introduction-section">
          <h1>portfolio website</h1>
          <p>hope you enjoy.</p>
        </div>
        <div className="separator-section" />
        <div className="skill-wrapper">
          <ul className="skill-list">
            <li>C#</li>
            <li>.NET 9</li>
            <li>PostgreSQL</li>
            <li>ELK</li>
            <li>Azure DevOps</li>
            <li>AWS Services</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Git</li>
            <li>ASP.NET</li>
            <li>C, C++</li>
            <li>Python</li>
            <li>OpenCV</li>
            <li>Doxygen</li>
            <li>Unix</li>
            <li>Pytorch, Tensorflow</li>

            {/* Duplicate once for seamless looping */}
            <li>C#</li>
            <li>.NET 9</li>
            <li>PostgreSQL</li>
            <li>ELK</li>
            <li>Azure DevOps</li>
            <li>AWS Services</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Git</li>
            <li>ASP.NET</li>
            <li>C, C++</li>
            <li>Python</li>
            <li>OpenCV</li>
            <li>Doxygen</li>
            <li>Unix</li>
            <li>Pytorch, Tensorflow</li>
          </ul>
        </div>
        <div className="separator-section" />

        <div className="work-section">
          <h1>Work Experience</h1>

          <h1>Software Engineer, Aumovio Engineering Solutions, Porto</h1>
          <p>
            Designing and implementing real-time monitoring systems and automated workflows for Industry 4.0 automotive factories.
            Managing software releases and maintenance across 10+ production sites, ensuring an uptime of approximately 99%.
            Technologies: .NET 9 • PostgreSQL • Angular 19 • Shell scripting • Azure DevOps • Git
          </p>
          <h1>Invited Assistant Professor, ISEP, Porto</h1>
          <p>
            Instructing undergraduate practical courses on contemporary systems with python, machine learning, image analysis.
          </p>
          <h1>Software Engineer, Continental Engineering Services, Porto</h1>
          <p>
            Embedded camera and radar development for the AUTOSAR communication and cybersecurity stack. Responsible for software integration on these teams,
            Technologies: MISRA C • Python • DOORS • AUTOSAR • Git • Doxygen.
          </p>
          <h1>AI Researcher, Faculty of Engineering of the University of Porto</h1>
          <p>
            GAN-based system experiments to convert whispered speech to normal speech, boosting results by 64.5% over the baseline, using a self-supervised DiscoGAN.
            Technologies: Python • PyTorch • GAN • MATLAB • Pandas • NumPy • Git • GitLab.
          </p>
          <h1>Software Engineer, Aumovio Engineering Solutions, Porto</h1>
          <p>
            Designing and implementing real-time monitoring systems and automated workflows for Industry 4.0 automotive factories.
            Managing software releases and maintenance across 10+ production sites, ensuring an uptime of approximately 99%.
            Technologies: .NET 9 • PostgreSQL • Angular 19 • Shell scripting • Azure DevOps • Git
          </p>
        </div>
        <div className="skills-section">
          <ul>
            <li>C#</li>
            <li>.NET 9</li>
            <li>PostgreSQL</li>
            <li>ELK</li>
            <li>Azure DevOps</li>
            <li>AWS Services</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Git</li>     
            <li>ASP.NET</li>
            <li>C, C++</li>
            <li>Python</li>
            <li>OpenCV</li>
            <li>Doxygen</li>
            <li>Unix</li>
            <li>Pytorch, Tensorflow</li> 
          </ul>
        </div>
      </main>
    </div>
  );
}
