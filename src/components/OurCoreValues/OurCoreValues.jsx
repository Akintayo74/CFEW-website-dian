import React from "react";
import Section from "../Section/Section";
import ImageText from "../ImageText";
import plus from '../../assets/plus.png';
import bulb from '../../assets/bulb.png';
import shield from '../../assets/shield.png';
import book from '../../assets/book.png';

function OurCoreValues() {
  return (
    <Section spacing="loose">
      <ImageText
        imageSrc="/our-core-values.png"
        imageAlt="An Image of some members of the CFEW organisation posing with placards of causes they actively advocate for such as gender inequality and climate change."
        title="Our Core Values"
      >
        <div className="text-cfew-dark flex flex-col gap-6 ">
          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={plus} imageAlt='Image of a green plus sign' className="m-1" />
            </div>
            <p className="font-semibold text-sm lg:text-lg leading-relaxed lg:leading-8 lg:tracking-normal">Cohesiveness</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={bulb} imageAlt='Image of a green plus sign' className="m-1" />
            </div>
            <p className="font-semibold text-sm lg:text-lg leading-relaxed lg:leading-8 lg:tracking-normal">Innovation</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={shield} imageAlt='Image of a green plus sign' className="m-1" />
            </div>
            <p className="font-semibold text-sm lg:text-lg leading-relaxed lg:leading-8 lg:tracking-normal">Integration & Accountability</p>
          </div>

          <div className="flex gap-2 items-center">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={book} imageAlt='Image of a green plus sign' className="m-1" />
            </div>
            <p className="font-semibold text-sm lg:text-lg leading-relaxed lg:leading-8 lg:tracking-normal">Always Learning</p>
          </div>
        </div>
      </ImageText>
    </Section>
  );
}

export default OurCoreValues;
