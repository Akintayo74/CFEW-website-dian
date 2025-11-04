import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Section from "../Section/Section";
import ThematicCards from "../ThematicCards/ThematicCards";

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
        <ThematicCards 
          href="/about#environment"
          imageSrc="./thematic-environment.png"
          cardName='Environment'
        />
        <ThematicCards 
          href="/about#health"
          imageSrc="./thematic-health.png"
          cardName='Health'
        />
        <ThematicCards 
          href="/about#agriculture"
          imageSrc="./thematic-agriculture.png"
          cardName='Agriculture'
        />
        <ThematicCards 
          href="/about#education"
          imageSrc="./thematic-education.png"
          cardName='Education'
        />
      </div>
    </Section>
  );
}

export default ThematicAreas;