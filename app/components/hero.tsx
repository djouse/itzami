import "../styles/style.css";
import { SkillList } from "./skill-list";
import { BubbleBackground } from "components/ui/shadcn-io/bubble-background";
export function Hero() {
  return (
    <div className="hero"> 
        <BubbleBackground interactive={true}>
            <div className="introduction-section">
                <h1>portfolio website</h1>
                <p>hope you enjoy.</p>
            </div>
            <div className="separator-section" />
                <SkillList />
            <div className="separator-section" />
        </BubbleBackground> 
    </div>
  );
}