import type { Route } from "./+types/home";
import "../styles/style.css";
import { Hero } from "~/components/hero";
import { WorkList } from "~/components/work-list";
import { BackToTop } from "~/components/back-to-top-action"; 
import { BubbleBackground } from "components/ui/shadcn-io/bubble-background";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jose | Portfolio" },
    { name: "Jose | Portfolio", content: "Jose | Portfolio" },
  ];
}

export default function Home() {
  return (
    <div>
      <BubbleBackground 
        interactive={false}
        colors={{
          first: '200,200,200',
          second: '180,180,180',
          third: '160,160,160',
          fourth: '190,190,190',
          fifth: '170,170,170',
          sixth: '150,150,150',
        }}
      >
        <main className="main-page ">
          <BackToTop />
          <Hero />
          <WorkList />
        </main>
      </BubbleBackground>
    </div>
  );
}
