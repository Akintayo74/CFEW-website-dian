import React from "react";
import Section from "../Section/Section";
import SectionHeader from "../SectionHeader";
import Container from "../Container";
import { CFEW_PARTNERS } from "../../constants";

function TrustedPartners() {
  return (
    <Section spacing="loose">
      <Container>
        <SectionHeader>Our Trusted Partners</SectionHeader>
        <p className="text-cfew-dark">Together, we amplify impact and accelerate change</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center items-center mt-10">
          {CFEW_PARTNERS.map((logo) => (
            <img
              src={logo.source}
              alt={logo.alt}
              className="max-h-30 max-w-full object-contain"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default TrustedPartners;
