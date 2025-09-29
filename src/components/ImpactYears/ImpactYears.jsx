import React from 'react';
import parallaxImage from "../../assets/parallax-image.jpg";
import Container from "../Container";
import SectionHeader from '../SectionHeader';
import GlassCard from '../GlassCard/GlassCard';

function ImpactYears() {
  return (
    <div>
      <div
        className="relative min-h-[300px] md:min-h-[500px] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${parallaxImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-5 py-30">
            <Container>
              <SectionHeader textColor='text-cfew-interface' align='text-left' className='lg:mb-10'>
                8 Years of Impact
              </SectionHeader>
              <div className="min-h-[300px] md:min-h-[500px] grid grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-5 lg:gap-20 justify-items-center items-center text-center text-cfew-interface">
                <GlassCard
                  runningAnimation={17000}
                  text='Native trees grown'
                />
                <GlassCard
                  runningAnimation={500}
                  text='Green Jobs Created'
                />
                <GlassCard
                  runningAnimation={1000}
                  text='Women Empowered'
                />
                <GlassCard
                  runningAnimation={2000}
                  text='Youths Empowered'
                />
                <GlassCard
                  runningAnimation={20000}
                  text='Young People Reached'
                />
                <GlassCard
                  runningAnimation={102}
                  text='Tonnes of Plastic Recovered'
                />
                <GlassCard
                  runningAnimation={21}
                  text='Tonnes of Organic Waste Converted to Compost Nature'
                />
                <GlassCard
                  runningAnimation={8}
                  text='Years of Securing the Earth & Impacting Communities'
                />
              </div>
            </Container>
        </div>
      </div>
    </div>
  );
}

export default ImpactYears;
