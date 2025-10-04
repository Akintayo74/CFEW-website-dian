import React from 'react';
import Section from '../Section/Section';
import SectionHeader from '../SectionHeader';
import Container from '../Container';
import ImageText from '../ImageText';

function OurThematicAreas() {
  return (
    <Section spacing='looseSymmetrical'>
      <Container>
        <SectionHeader>
          Our Thematic Areas
        </SectionHeader>
      </Container>

      <div className='text-left text-cfew-dark text-sm flex flex-col gap-10 lg:gap-20 lg:text-lg leading-relaxed h-full'>
        <ImageText
          imageSrc='/our-thematic-environment.png'
          imageAlt='An image of a waterfall'
          title='Environment'
          id='environment'
        >
          <p>
            The environment is the bedrock of our CFEW’s mission. Our goal is to secure a healthy planet for future generations by promoting sustainable practices that reduce human impact on the environment and support the resilience of natural systems. We focus on protecting natural ecosystems, conserving biodiversity, beating plastic pollution and addressing climate change. This involves initiatives like reforestation projects, wildlife conservation, pollution control and community cleanups, and advocating for sustainable policies.
          </p>

        </ImageText>

        <ImageText
          imageSrc='/our-thematic-health.png'
          imageAlt='An image of an old man getting his blood pressure checked.'
          title='Health'
          reverse={true}
          id='health'
        >
          <p>
            The health thematic area of our organisation recognizes the intrinsic connection between a healthy environment and human health and well-being. Here we work to mitigate environmental health risks through projects that address clean air, sanitation and water pollution, promote the use of clean and renewable energy, and reduce exposure to harmful/toxic chemicals. By ensuring clean and safe environments, we aim to prevent diseases and improve the overall quality of life for people and the communities we serve.
          </p>

        </ImageText>

        <ImageText
          imageSrc='/our-thematic-agriculture.png'
          imageAlt='An image of a wheat plant'
          title='Agriculture'
          id='agriculture'
        >
          <p>
            In our agriculture thematic area, we focus on promoting sustainable farming practices that protect the environment and support local communities. Our initiatives include advocating for organic farming, reducing the use of harmful pesticides and fertilizers, encouraging agroecology and climate smart agriculture. We also work to improve food security and livelihoods by supporting farmers with resources and training to adopt eco-friendly practices. Our goal is to create agricultural systems that are productive, resilient, and environmentally sound.
          </p>

        </ImageText>

        <ImageText
          imageSrc='/our-thematic-education.png'
          imageAlt='An image of an empty library'
          title='Education'
          reverse={true}
          id='education'
        >
          <p>
            Education is a vital component of our strategy to foster environmental sustainability. We develop and implement educational programs that raise awareness about environmental issues, promote sustainable practices, and empower individuals and community to take action. This includes social media engagements, school-based programs, community workshops, general public sensitization and awareness campaigns. By educating diverse audiences, we aim to cultivate a knowledgeable and engaged people that values and actively participates in environmental sustainability.
          </p>

        </ImageText>
      </div>

    </Section>
  );
}

export default OurThematicAreas;
