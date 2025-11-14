import React from "react";
import Section from "../Section";
import Container from "../Container/Container";
import ImageText from "../ImageText/ImageText";
import SectionHeader from '../SectionHeader';
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";

function PreviousInitiatives() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/programs#upcoming')
  }
  return (
    <div>
      <Container>
        <SectionHeader align="text-left" marginBottom="lg:mb-10">
          Previous Initiatives
        </SectionHeader>
      </Container>
      <div className='text-left text-cfew-dark text-sm flex flex-col gap-10 lg:gap-20 lg:text-lg leading-relaxed h-full mb-12 lg:mb-20'>
        <ImageText
          imageSrc="/previous-initiatives/ourtake.png"
          imageAlt="An image of 3 volunteers clearing strewn trash from the environment."
          title='Ourtake'
          padding="0"
        >
          <p>
            The Ourtake project is a platform where CFEW engages with informal waste pickers, mainstreaming their crucial role in combating pollution of all kinds, especially plastic pollution. This is done through capacity building, training, and empowerment.
          </p>
        </ImageText>

        <ImageText
          imageSrc="/previous-initiatives/green-school.png"
          imageAlt="An image of about 30 children in a classroom"
          title='Green School'
          reverse={true}
        >
          <p>
            The Green School Project covers CFEW’s environmental advocacy and empowerment in primary and secondary schools. It aims to raise the next generation of environmental activists and leaders who proffer sustainable solutions to the growing climate change problems.
          </p>
        </ImageText>

        <ImageText
          imageSrc="/previous-initiatives/project-earn.png"
          imageAlt="An image of about 30 children in a classroom"
          title='Project EARN'
        >
          <p>
            Project Earn is a community-driven waste management initiative promoting circular economy. It empowered communities, especially women and youth, to collect, sort, reuse, and recycle waste, particularly single-use plastics, to generate income and create jobs. The project also provided economic empowerment by equipping participants with zero-waste skills and facilitating savings and small loans through a community cooperative (Village Savings and Loan Association).
          </p>
        </ImageText>

        <ImageText
          imageSrc="/previous-initiatives/climate-recovery.png"
          imageAlt="A speaker at a seminar for Climate Resilience Through Recovery."
          title='Climate Resilience Through Recovery (ClimRes).'
          reverse={true}
        >
          <p>
            The ClimRes project is an integrated approach to promoting community recovery using eco-friendly activities, livelihood empowerment initiatives, and establishing a Community Resource Recovery Facility. The project aims to promote community recovery by enhancing the livelihood of 300 project participants affected by conflicts through climate resilience and the establishment of a community resource facility and an eco-awareness campaign for improved peaceful coexistence.
          </p>
        </ImageText>

        <ImageText
          imageSrc="/previous-initiatives/tree-life.png"
          imageAlt="Two volunteers and a child planting a tree."
          title='Tree4Life'
        >
          <p>
            The Tree For Life Project is CFEW’s way of giving back to the Earth through planting trees in areas affected by deforestation and desertification encroachment. Through planting resistant varieties of trees, CFEW supports reforestation and land regeneration.
          </p>
        </ImageText>

        <ImageText
          imageSrc="/previous-initiatives/methane-reduction.png"
          imageAlt="A man holding up a sign which says 'Methane Reduction'"
          title='Multi-Solving Action for Methane Reduction in Nigeria (MAMRN)'
          reverse={true}
        >
          <p>
            This project tackles methane emissions from organic waste by promoting composting as a sustainable solution. The project seeks to train community members, households, individuals, and waste pickers to set up and manage composting systems, biogas channels, and black soldier fly farming. The initiative teaches proper composting techniques, repurposing methods, and ways to turn composting into a small business. A key feature is the Material Recovery Facility (MRF), which processes organic waste and supports a self-sustaining system that reduces landfill waste, advances the circular economy, and serves as a model for sustainable urban waste management and global climate action.
          </p>
        </ImageText>

        <ImageText
          imageSrc="/previous-initiatives/youth-land.png"
          imageAlt="An image of about 20 youth volunteers with some bags of cleaned up waste in a wood clearing."
          title='Youth4Land'
        >
          <p>
            This project tackles methane emissions from organic waste by promoting composting as a sustainable solution. The project seeks to train community members, households, individuals, and waste pickers to set up and manage composting systems, biogas channels, and black soldier fly farming. The initiative teaches proper composting techniques, repurposing methods, and ways to turn composting into a small business. A key feature is the Material Recovery Facility (MRF), which processes organic waste and supports a self-sustaining system that reduces landfill waste, advances the circular economy, and serves as a model for sustainable urban waste management and global climate action.
          </p>
        </ImageText>
      </div>

      <Button className="bg-cfew-primary-100" onClick={handleClick}>
        Upcoming
      </Button>
      
    </div>
  );
}

export default PreviousInitiatives;
