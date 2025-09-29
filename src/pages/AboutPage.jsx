import AboutUsImageBanner from "../components/AboutUsImageBanner/AboutUsImageBanner";
import CoreTeam from "../components/CoreTeam/CoreTeam";
import Layout from "../components/Layout/Layout";
import OurCoreValues from "../components/OurCoreValues/OurCoreValues";
import OurMissionParallax from "../components/OurMissionParallax/OurMissionParallax";
import OurThematicAreas from "../components/OurThematicAreas/OurThematicAreas";
import TrustedPartners from "../components/TrustedPartners/TrustedPartners";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";

function AboutPage() {
  return (
    <Layout>
        <AboutUsImageBanner />
        <WhoWeAre />
        <OurCoreValues />
        <OurMissionParallax />
        <OurThematicAreas />
        <CoreTeam />
        <TrustedPartners />
    </Layout>
  );
}

export default AboutPage;
