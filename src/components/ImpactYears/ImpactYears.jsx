import React from 'react';
import parallaxImage from "../../assets/parallax-image.jpg";
import Container from "../Container";
import SectionHeader from '../SectionHeader';
import Section from '../Section/Section';
import GlassCard from '../GlassCard/GlassCard';

function ImpactYears() {
  return (
    <div>
      {/* Parallax Section */}
      <div
        className="relative min-h-[300px] md:min-h-[500px] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${parallaxImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-5 py-30">
            <Container>
              <SectionHeader textColor='text-cfew-interface' align='text-left'>
                8 Years of Impact
              </SectionHeader>
              <div className="min-h-[300px] md:min-h-[500px] grid grid-cols-1 md:grid-cols-2 justify-items-center items-center text-center text-cfew-interface">
                <GlassCard
                  runningAnimation='17,000+'
                >
                  Hello!
                </GlassCard>
              </div>
            </Container>
        </div>
      </div>
    </div>
  );
}

export default ImpactYears;
