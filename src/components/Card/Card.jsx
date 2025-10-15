import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function Card() {
  const navigate = useNavigate();

  function handleDonateBtnClick() {
    navigate("/donate");
  }

  function handleVolunteerBtnClick() {
    navigate("/donate");
  }

  return (
    <div className="bg-cfew-transparent p-4 md:p-6 lg:p-8 max-w-[90%] md:max-w-lg lg:max-w-2xl">
      <h4 className="text-cfew-interface mb-3 text-lg font-bold md:mb-5 md:text-3xl lg:text-5xl lg:font-black">
        Securing the Earth Through Community Empowerment
      </h4>
      <p className="text-cfew-interface mb-4 text-xs leading-relaxed md:mb-6 md:text-sm lg:text-base">
        At Centre for Earth Works (CFEW), we unite young minds and communities
        to protect the environment, tackle climate change, and build a
        sustainable future.
      </p>
      <div className="flex gap-3 md:gap-4">
        <Button>
          Donate
        </Button>
        <Button color="clear" onClick={handleVolunteerBtnClick}>
          Volunteer
        </Button>
      </div>
    </div>
  );
}

export default Card;
