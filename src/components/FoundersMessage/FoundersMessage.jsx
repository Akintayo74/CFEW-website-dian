import React from "react";
import Section from "../Section/Section";
import Button from "../Button/Button";
import Container from "../Container";

function FoundersMessage() {
  return (
    <Section background="pink" spacing="looseSymmetrical">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-10">
          {/* Text Content Block */}
          <div className="flex flex-col">
            <h4 className="mb-5 text-4xl font-bold lg:mb-10 lg:text-start lg:text-5xl">
              Founder's Message
            </h4>

            {/* 1. MOBILE IMAGE: This is visible only on screens smaller than 'lg' */}
            <img
              src="/portraits/founder-image.png"
              className="mb-8 rounded-lg object-cover md:hidden"
              alt="Founder"
            />

            <figure className="mb-6 text-left lg:mb-10">
              <blockquote className="text-xl font-semibold italic md:text-2xl md:font-medium lg:text-3xl">
                <p>
                  "I am inspired by the power of simple ideas backed by
                  constructive action to change the world. I believe that even
                  the smallest steps can have a profound impact when taken with
                  intention and purpose."
                </p>
              </blockquote>
              <figcaption className="mt-6 text-xl lg:text-2xl">
                <strong>Dotun F. Benson</strong>
                <br />
                <span>CFEW Team Lead</span>
              </figcaption>
            </figure>

            <Button
              color="overlay"
              size="medium"
            >
              Learn More
            </Button>
          </div>

          {/* 2. DESKTOP IMAGE: This container is hidden until the 'lg' breakpoint */}
          <div className="hidden flex-shrink-0 md:block md:w-1/2">
            <img
              src="/portraits/founder-image.png"
              alt="Founder"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default FoundersMessage;
