import { ThemeBackground } from "@/components/background";
import { PageShell } from "@/components/PageShell";
import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Featured } from "@/sections/Featured";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Certifications } from "@/sections/Certifications";
import { Skills } from "@/sections/Skills";
import { Sidebar } from "@/sections/Sidebar";

export default function Home() {
  return (
    <div className="portfolio-canvas relative min-h-screen">
      <ThemeBackground />

      <PageShell>
        <Navbar />
        <main className="page-shell">
          <div className="intro-full">
            <Hero />
          </div>

          <div className="profile-layout">
            <div className="profile-main">
              <About />
              <Featured />
              <Experience />
              <Education />
              <Certifications />
              <Skills />
            </div>
            <Sidebar />
          </div>
        </main>
      </PageShell>
    </div>
  );
}
