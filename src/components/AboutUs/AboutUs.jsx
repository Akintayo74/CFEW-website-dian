import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "../Section/Section";
import ImageText from "../ImageText/ImageText";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const count1Ref = React.useRef(null);
  const count2Ref = React.useRef(null);
  const count3Ref = React.useRef(null);
  const statsRef = React.useRef(null);

  const navigate = useNavigate();

  React.useEffect(() => {
    const animateCounter = (ref, endValue, suffix = "+") => {
      const counter = { value: 0 };
      return gsap.to(counter, {
        value: endValue,
        duration: 2.5,
        ease: "power2.out",
        onUpdate: () => {
          if (ref.current) {
            const formattedNumber = Math.round(counter.value).toLocaleString(
              "en-US"
            );
            ref.current.innerText = `${formattedNumber}${suffix}`;
          }
        },
      });
    };

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          toggleActions: "restart none restart none",
        },
      });

      timeline.add(animateCounter(count1Ref, 17000), 0);
      timeline.add(animateCounter(count2Ref, 500), 0);
      timeline.add(animateCounter(count3Ref, 102), 0);
    });

    return () => ctx.revert();
  }, []);

  function handleClick() {
    navigate('/about');
  }

  return (
    <Section>
      <ImageText imageSrc="/about-us.png" title="About Us">
        <p className="text-cfew-dark text-left">
          <b>Centre for Earth Works (CFEW)</b> is a research-driven
          non-governmental organisation that is passionate about securing the
          Earth and working to empower communities with sustainable strategies
          for solving environmental challenges such as waste management, toxic
          chemicals, sustainable land management, water, sanitation and hygiene,
          renewable energy, and environmental justice.
        </p>
        <div
          ref={statsRef}
          className="text-cfew-primary-600 flex flex-col text-left md:flex-row md:items-center md:gap-6 md:text-start"
        >
          <div className="my-6">
            <h6 className="text-2xl font-bold">
              <span ref={count1Ref}>0+</span>
            </h6>
            <div className="font-semibold">Trees Planted</div>
          </div>
          <hr className="md:hidden border-cfew-primary-400 border-[1.5px]" />
          <div className="hidden md:border-cfew-primary-400 md:block md:h-12 md:border-l"></div>

          <div className="my-6">
            <h6 className="text-2xl font-bold">
              <span ref={count2Ref}>0+</span>
            </h6>
            <div className="font-semibold">Green Jobs Created</div>
          </div>
          <hr className="border-cfew-primary-400 border-[1.5px] md:hidden" />
          <div className="md:border-cfew-primary-400 hidden md:block md:h-12 md:border-l"></div>

          <div className="my-6">
            <h6 className="text-2xl font-bold">
              <span ref={count3Ref}>0+</span>
            </h6>
            <div className="font-semibold">Tonnes of Recovered Plastic</div>
          </div>
          <Button color="overlay" size="medium" className="md:hidden">Learn More</Button>
        </div>
        <Button
          className="hidden md:block lg:self-start"
          color="overlay"
          size="medium"
          onClick={handleClick}
        >
          Learn More
        </Button>
      </ImageText>
    </Section>
  );
}

export default AboutUs;
