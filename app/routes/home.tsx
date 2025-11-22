import type { Route } from "./+types/home";
import "../styles/style.css";
import upActivity from "../assets/up-onClick.svg";
import { SkillList} from "~/components/skill-list";
import { Hero } from "~/components/hero";
import { WorkList } from "~/components/work-list";
import { BackToTop } from "~/components/back-to-top-action"; 

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
        <BackToTop />
        <Hero />
        <WorkList />
      </main>
    </div>
  );
}
