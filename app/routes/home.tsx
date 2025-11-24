import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
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
  const [theme, setTheme] = useState(() => 
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem('theme') || 'light');
    };

    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  const colors = theme === 'dark' 
    ? {
        first: '60,60,60',
        second: '80,80,80',
        third: '100,100,100',
        fourth: '70,70,70',
        fifth: '90,90,90',
        sixth: '110,110,110',
      }
    : {
        first: '200,200,200',
        second: '180,180,180',
        third: '160,160,160',
        fourth: '190,190,190',
        fifth: '170,170,170',
        sixth: '150,150,150',
      };

  return (
    <div>
      <BubbleBackground 
        interactive={true}
        colors={colors}
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
