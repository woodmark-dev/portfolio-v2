"use client";
import { useEffect } from "react";

import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

function observer(threshold: number) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.classList.add("animate-[sections_1.5s_both]");
          observer.unobserve(target);
        }
      });
    },
    { threshold }
  );
  return observer;
}

function observation(nodeList: any, target: any, action: any) {
  nodeList.forEach((item: any) => {
    if (action === "observe") {
      target.observe(item);
    } else {
      target.unobserve(item);
    }
  });
}

export default function Home() {
  useEffect(() => {
    const allObservables = document.querySelectorAll(".watch");
    const projectSection = document.querySelectorAll(".projects");
    function stopObserving() {
      observation(allObservables, otherSections, "unobserve");
      observation(projectSection, projectObserver, "unobserve");
    }
    const projectObserver = observer(0.2);
    const otherSections = observer(0.4);
    observation(allObservables, otherSections, "observe");
    observation(projectSection, projectObserver, "observe");

    return stopObserving;
  }, []);

  return (
    <div className="flex flex-col gap-32">
      <section className="mt-10 min-h-[50vh] flex items-center">
        <Hero />
      </section>
      <section id="about" className="animate-[sections_1s_4s_both]">
        <About />
      </section>
      <section id="skills" className="watch opacity-0">
        <Skills />
      </section>
      <section id="projects" className="projects opacity-0">
        <Projects />
      </section>
    </div>
  );
}
