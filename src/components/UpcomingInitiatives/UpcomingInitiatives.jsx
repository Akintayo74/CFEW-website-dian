import React from "react";
import SectionHeader from "../SectionHeader";
import Container from "../Container";
import { UPCOMING_EVENTS } from "../../constants";
import location from "../../assets/Vector.svg";

function UpcomingInitiatives() {
  return (
    <div>
      <Container>
        <SectionHeader>Upcoming Events</SectionHeader>

        <hr className=" border-cfew-primary-400 border-[1.5px] " />

        <div className="flex flex-col gap-5 mt-5">
          {UPCOMING_EVENTS.map((event, index) => (
            <div
              key={index}
              className="grid grid-cols-1 h-full lg:grid-cols-2 justify-items-start items-center text-left text-cfew-primary-800 text-sm gap-6"
            >
              <div className="flex flex-col gap-6 lg:flex-row justify-center lg:items-center lg:ml-10">
                <span
                  className="
                  bg-cfew-primary-500 
                  border-[0.5] border-cfew-primary-100
                  shadow-[inset_0_0_4px_4px_#D3DDCC] 
                  rounded-full w-20 h-20 flex justify-center items-center
                  font-bold text-cfew-primary-50 lg:mr-10
                "
                >
                  {event.date}
                </span>
                <h5 className="font-bold text-2xl lg:text-3xl leading-snug">{event.name}</h5>
              </div>
              

              <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:justify-self-end lg:mr-10">
                <p className="lg:justify-self-end lg:mr-6">{event.time}</p>
                <span className="flex items-start gap-1">
                  <img
                    src={location}
                    width={24}
                    height={24}
                    className="flex-shrink-0"
                  />
                  {/* 2. Match line-height (leading-6 = 24px) to icon height to have items-center default behaviour and items-start behaviour when the text gets long */}
                  <p className="self-center">{event.location}</p>
                </span>
              </div>

              <hr className="border-cfew-primary-400 border-[1.5px] col-span-full w-full" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default UpcomingInitiatives;
