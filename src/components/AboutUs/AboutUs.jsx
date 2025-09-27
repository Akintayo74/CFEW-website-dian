import React from "react";
import Section from "../Section/Section";
import ImageText from "../ImageText/ImageText";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button/Button";
import Container from "../Container";

function AboutUs() {
  return (
    <Section>
      <ImageText imageSrc="/about-us.png" title="About Us">
        <p className="text-cfew-dark text-left">
          <b>Centre for Earth Works (CFEW)</b> is a research-driven
          nongovernmental organisation that is passionate about securing the
          Earth and working to empower communities with sustainable strategies
          for solving environmental challenges such as waste management, toxic
          chemicals, sustainable land management, water, sanitation and hygiene,
          renewable energy, and environmental justice.
        </p>
        <div className="text-cfew-primary-600 flex flex-col text-left md:flex-row md:items-center md:gap-6 md:text-start">
          <div className="my-6">
            <h6 className="text-2xl font-bold">17,000+</h6>
            <div className="font-semibold">Trees Planted</div>
          </div>

          <hr className="md:hidden border-cfew-primary-400 border-[1.5px] " />
          <div className="hidden md:border-cfew-primary-400  md:block md:h-12 md:border-l"></div>

          <div className="my-6">
            <h6 className="text-2xl font-bold">500+</h6>
            <div className="font-semibold">Green Jobs Created</div>
          </div>

          <hr className="border-cfew-primary-400 border-[1.5px] md:hidden" />
          <div className="md:border-cfew-primary-400 hidden md:block md:h-12 md:border-l"></div>

          <div className="my-6">
            <h6 className="text-2xl font-bold">102+</h6>
            <div className="font-semibold">Tonnes of Recovered Plastic</div>
          </div>

          <Button className="md:hidden">Learn More</Button>
        </div>
        <Button className="hidden md:block lg:self-start">Learn More</Button>
      </ImageText>
    </Section>
  );
}

export default AboutUs;
