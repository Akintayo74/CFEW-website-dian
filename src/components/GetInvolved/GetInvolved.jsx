import React from "react";
import Section from "../Section/Section";
import Container from "../Container";
import ImageText from "../ImageText";

function GetInvolved() {
  return (
    <Section background="pink" spacing="looseSymmetrical">
      <ImageText
        imageSrc="/get-involved.png"
        imageAlt="Image of a young girl being handed a gift by a member of the CFEW organisation."
      >
        
        <div className="w-full p-5 lg:p-10 flex flex-col flex-1 justify-between bg-cfew-primary-600 text-cfew-interface rounded text-start">
          <h4 className="font-bold text-3xl lg:text-4xl mb-2 md:mb-4 leading-tight">Get Involved</h4>
          <p className="text-xs md:text-lg font-normal leading-relaxed ">
            Every initiative, every donation, and every volunteer effort creates a lasting impact that fuels our mission of hope and change.
          </p>

          <div id="debug-div" className="leading-[1.3]">
            <div className="my-5 py-3 lg:py-4 lg:px-6">
              <h6 className="text-3xl lg:text-3xl font-bold">Volunteer</h6>
            </div>

            <hr className="border-cfew-interface border-[1.5px] " />

            <div className="my-5 py-3 lg:py-4 lg:px-6">
              <h6 className="text-3xl lg:text-3xl font-bold">Donate</h6>
            </div>

            <hr className="border-cfew-interface border-[1.5px] " />

            <div className="mt-5 py-3 lg:py-4 lg:px-6">
              <h6 className="text-3xl lg:text-3xl font-bold">Contact Us</h6>
            </div>
          </div>

        </div>
      </ImageText>
    </Section>
  );
}

export default GetInvolved;
