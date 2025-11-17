import "../styles/style.css";
import type { Route } from "./+types/about-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Jose Portfolio" },
    { name: "description", content: "About Jose" },
  ];
}

export default function AboutPage() {
  return (
    <div>
      <main className="main-page">
        <p>I am a Software Engineer currently developing .NET software applications while scaling database infrastructure and CI/CD pipelines to support modern industrial systems, with over 10 locations across the globe and more than 100 stations. 
I also contribute to teaching engineering courses for bachelor’s students, an experience that helps me grow continuously while sharing knowledge with others.
My interests lie in interactive, human-centred technologies. I want to create tools that make a real impact on how people experience and use software, and hope one day to achieve this. 
</p>
      </main>
    </div>
  );
}