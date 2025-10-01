import React from "react";
import Section from "../Section";
import Container from "../Container/Container";
import ImageText from "../ImageText";
import SectionHeader from "../SectionHeader";
import Clipboard from "../../assets/clipboard.svg";

function DonationImpact() {
  return (
    <Section>
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
              advocates and volunteers who are at the frontlines of securing the
              earth through creating equitable, healthy, just and sustainable
              futures in their communities.
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

        <Container>
          <Section background="pink">
            <Container>
              <SectionHeader align="text-left">
                Flexible ways to donate
              </SectionHeader>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 text-left">
                <div className="flex flex-col lg:gap-6">
                  <h2
                    className="font-bold leading-snug text-xl md:text-2xl  lg:text-3xl"
                  >
                    Direct Bank Account
                  </h2>
                  <div>
                    <h6 className="font-bold text-cfew-primary-900">
                      Bank Name
                    </h6>
                    <p>UNION BANK PLC</p>
                  </div>
                  <div>
                    <h6 className="font-bold text-cfew-primary-900">
                      Account Name
                    </h6>
                    <p>Centre for Earthworks Development</p>
                  </div>
                  <div>
                    <h6 className="font-bold text-cfew-primary-900">
                      Account Number
                    </h6>
                    <p className="flex items-center gap-2.5">
                      0136968956
                      <span>
                        <img src={Clipboard} alt="An Image of a clipboard to indicate a copy paste feature"/>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col lg:gap-6">
                  <h2
                    className="font-bold leading-snug text-xl md:text-2xl  lg:text-3xl"
                  >
                    Domicilliary Account
                  </h2>
                  <div>
                    <h6 className="font-bold text-cfew-primary-900">
                      Bank Name
                    </h6>
                    <p>UNION BANK PLC</p>
                  </div>
                  <div>
                    <h6 className="font-bold text-cfew-primary-900">
                      Account Name
                    </h6>
                    <p>Center for Earthworks Development</p>
                  </div>
                  <div>
                    <h6 className="font-bold text-cfew-primary-900">
                      Account Number
                    </h6>
                    <p className="flex items-center gap-2.5">
                      <span className="text-cfew-primary-500">USD</span>0136968956
                      <span>
                        <img src={Clipboard} alt="An Image of a clipboard to indicate a copy paste feature"/>
                      </span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <span className="text-cfew-primary-500">GBP</span>0136968956
                      <span>
                        <img src={Clipboard} alt="An Image of a clipboard to indicate a copy paste feature"/>
                      </span>
                    </p>
                    <p className="flex items-center gap-2.5">
                      <span className="text-cfew-primary-500">EURO</span>0136968956
                      <span>
                        <img src={Clipboard} alt="An Image of a clipboard to indicate a copy paste feature"/>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </Section>
        </Container>
      </div>
    </Section>
  );
}

export default DonationImpact;
