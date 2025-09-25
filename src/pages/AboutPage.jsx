import AboutUsImageBanner from "../components/AboutUsImageBanner/AboutUsImageBanner";
import CoreTeam from "../components/CoreTeam/CoreTeam";
import Layout from "../components/Layout/Layout";
import OurCoreValues from "../components/OurCoreValues/OurCoreValues";
import OurThematicAreas from "../components/OurThematicAreas/OurThematicAreas";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";

function AboutPage() {
  return (
    <Layout>
        <AboutUsImageBanner />
        <WhoWeAre />
        <OurCoreValues />
        <OurThematicAreas />
        <CoreTeam />
    </Layout>
  );
}

export default AboutPage;
