import React from "react";
import { Link } from "react-router-dom"; // Add this import
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
      <div className="grid grid-cols-2 gap-0 lg:grid-cols-4">
        <Link
          to="/about#environment"
          className="relative group overflow-hidden block leading-none"
        >
          <img
            src="./thematic-environment.png"
            className="h-full w-full block object-cover scale-105 transition-transform duration-500 group-hover:scale-120"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500  group-hover:opacity-100"></div>
          <p className="text-cfew-primary-50 absolute bottom-5 left-5 text-sm font-bold md:text-2xl lg:bottom-10 lg:left-10">
            Environment
          </p>
        </Link>
        <Link
          to="/about#health"
          className="relative group overflow-hidden block leading-none"
        >
          <img
            src="./thematic-health.png"
            className="h-full w-full block object-cover scale-105 transition-transform duration-500 group-hover:scale-120"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          <p className="text-cfew-primary-50 absolute bottom-5 left-5 text-sm font-bold md:text-2xl lg:bottom-10 lg:left-10">
            Health
          </p>
        </Link>
        <Link
          to="/about#agriculture"
          className="relative group overflow-hidden block leading-none"
        >
          <img
            src="./thematic-agriculture.png"
            className="h-full w-full block object-cover scale-105 transition-transform duration-500 group-hover:scale-120"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          <p className="text-cfew-primary-50 absolute bottom-5 left-5 text-sm font-bold md:text-2xl lg:bottom-10 lg:left-10">
            Agriculture
          </p>
        </Link>
        <Link
          to="/about#education"
          className="relative group overflow-hidden block leading-none"
        >
          <img
            src="./thematic-education.png"
            className="h-full w-full block object-cover scale-105 transition-transform duration-500 group-hover:scale-120"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
          <p className="text-cfew-primary-50 absolute bottom-5 left-5 text-sm font-bold md:text-2xl lg:bottom-10 lg:left-10">
            Education
          </p>
        </Link>
      </div>
    </Section>
  );
}

export default ThematicAreas;