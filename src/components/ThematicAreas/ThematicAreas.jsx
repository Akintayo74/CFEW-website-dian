import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";

function ThematicAreas() {
  return (
    <Section>
      <div className="mb-6 text-center lg:mb-10">
        <SectionHeader>Our Thematic Areas</SectionHeader>
        <p className="text-cfew-dark">
          Connecting the wellbeing of our planet and people through four pillars
          of change.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-0 lg:grid-cols-4 ">
        <a href="/about#environment" className="relative group">
          <img src="./thematic-environment.png" className="h-full w-full" />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-70  group-hover:opacity-100"></div>
          <p className="text-cfew-primary-50 absolute bottom-5 left-5 text-sm font-bold md:text-2xl lg:bottom-10 lg:left-10">
            Environment
          </p>
        </a>
        <a href="/about#health" className="relative group">
          <img src="./thematic-health.png" className="h-full w-full" />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-70 group-hover:opacity-100"></div>
          <p className="text-cfew-primary-50 absolute bottom-5 left-5 text-sm font-bold md:text-2xl lg:bottom-10 lg:left-10">
            Health
          </p>
        </a>
        <a href="/about#agriculture" className="relative group">
          <img src="./thematic-agriculture.png" className="h-full w-full" />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-70 group-hover:opacity-100"></div>
          <p className="text-cfew-primary-50 absolute bottom-5 left-5 text-sm font-bold md:text-2xl lg:bottom-10 lg:left-10">
            Agriculture
          </p>
        </a>
        <a href="/about#education" className="relative group">
          <img src="./thematic-education.png" className="h-full w-full" />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-70 group-hover:opacity-100"></div>
          <p className="text-cfew-primary-50 absolute bottom-5 left-5 text-sm font-bold md:text-2xl lg:bottom-10 lg:left-10">
            Education
          </p>
        </a>
      </div>
    </Section>
  );
}

export default ThematicAreas;
