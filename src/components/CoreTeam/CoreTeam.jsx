import React from "react";
import Section from "../Section/Section";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import { CFEW_PORTRAITS_METADATA } from "../../constants";

function CoreTeam() {
  return (
    <Section spacing="looseReverse">
      <Container>
        <SectionHeader>The Core Team Behind the Change</SectionHeader>
        <p className="text-cfew-dark text-sm md:text-lg">
          Meet the passionate minds, and committed hearts steering our cause
          towards a greener, safer world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10 lg:gap-20 mt-10">
          {CFEW_PORTRAITS_METADATA.map((image) => (
            <div className="relative rounded">
              <img
                src={image.source}
                alt={image.alt}

              />
              <div className="absolute bottom-8 left-8 text-sm text-left text-white">
                <p className="font-bold lg:text-lg">
                  {image.name.toUpperCase()}
                </p>
                <p className="lg:text-base">
                  {image.currentPosition.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default CoreTeam;
