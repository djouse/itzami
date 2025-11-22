import "../styles/style.css";
import { SkillList } from "./skill-list";

export function Hero() {
  return (
    <div className="hero"> 
      <div className="introduction-section">
          <h1>portfolio website</h1>
          <p>hope you enjoy.</p>
      </div>
      <div className="separator-section" />
          <SkillList />
      <div className="separator-section" />
    </div>
  );
}