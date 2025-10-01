import React from "react";
import Section from "../Section";
import Container from "../Container/Container";
import ImageText from "../ImageText";

function DonationImpact() {
  return (
    <Section>
      <Container>
        <div className="text-cfew-dark text-sm md:text-base lg:text-lg lg:leading-relaxed flex flex-col gap-20">
          <ImageText
            imageSrc="/donate-1.webp"
            imageAlt="An image of a waterfall"
            title="Together we can create lasting change"
            reverse={true}
          >
            <div className="text-left flex flex-col gap-3">
              <p>
                Invest in Community-Driven Sustainable Change by donating to the
                the Centre for Earth Works (CFEW), you can be confident that you
                are supporting work inspired by community needs.
              </p>
              <p>
                All our projects are implemented in partnership with the expert
                advocates and volunteers who are at the frontlines of securing
                the earth through creating equitable, healthy, just and
                sustainable futures in their communities.
              </p>
            </div>
          </ImageText>

          <ImageText
            imageSrc="/donate-2.webp"
            imageAlt="An image of a waterfall"
            title="How your generous donations helps"
          >
            <div className="text-left flex flex-col gap-3">
              <p>
                At CFEW, every contribution goes directly into creating impact.
                Your support enables us to:
              </p>
              <ul className="list-disc pl-6 marker:text-cfew-dark marker:text-[12px] flex flex-col gap-6">
                <li>
                  Fund programs targeted towards research, community
                  enlightenment, and skills acquisition.
                </li>
                <li>Sustain the day-to-day running of the organization.</li>
                <li>Strengthen volunteer capacity development.</li>
                <li>Drive community mobilization efforts.</li>
                <li>
                  Advance policy engagement, advocacy, and awareness campaigns.
                </li>
              </ul>
            </div>
          </ImageText>
        </div>
      </Container>
    </Section>
  );
}

export default DonationImpact;
