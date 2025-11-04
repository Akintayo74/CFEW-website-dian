import React from "react";
import Section from "../Section/Section";
import Container from "../Container";
import SectionHeader from "../SectionHeader";
import { CFEW_PORTRAITS_METADATA } from "../../constants";
// import linkedIn from '../../assets/linked-in.svg'
import plainLinkedIn from "../../assets/plain-linkedIn.svg";

function CoreTeam() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const uuid = self.crypto.randomUUID();

  return (
    <Section spacing="looseReverse">
      <Container>
        <SectionHeader>The Core Team Behind the Change</SectionHeader>
        <p className="text-cfew-dark text-sm md:text-lg">
          Meet the passionate minds, and committed hearts steering our cause
          towards a greener, safer world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10 lg:gap-20 mt-10">
          {CFEW_PORTRAITS_METADATA.map((image, index) => (
            <div
              className="relative rounded w-full max-w-[298px] aspect-[298/354]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={image.source}
            >
              <img src={image.source} alt={image.alt} className="w-full h-full object-cover"/>
              <div className="absolute inset-0 hero-gradient"></div>
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300">
                  {image.linkedIn ? (
                    <a
                      href={image.linkedIn}
                      target="noopener noreferrer"
                      className="border-cfew-interface border-1 rounded-full p-2 hover:bg-cfew-secondary-500"
                    >
                      <img src={plainLinkedIn} className="" />
                    </a>
                  ) : (
                    <div className="border-cfew-interface border-1 rounded-full p-2 cursor-default">
                      <img src={plainLinkedIn} className="" />
                    </div>
                  )}
                </div>
              )}
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
