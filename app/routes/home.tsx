import type { Route } from "./+types/home";
import { MainPage } from "../pages/main-page";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jose | Portfolio" },
    { name: "Jose | Portfolio", content: "Jose | Portfolio" },
  ];
}

export default function Home() {
  return <MainPage />;
}
