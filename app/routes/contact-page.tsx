import "../styles/style.css";
import type { Route } from "./+types/contact-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | Jose Portfolio" },
    { name: "description", content: "Contacts" },
  ];
}


export default function ContactPage() {
  return (
    <div>
      <main className="contact-page">
        <h1>José Dias</h1>
        <h3>Porto, Portugal</h3>
        <p>Email: jdptdias@outlook.pt</p>
        <p>Phone: +351 91xxxxxxx</p>
        <p>LinkedIn: linkedin.com/in/josedias</p>
        <p>GitHub: github.com/djouse</p>
      </main>
    </div>
  );
}