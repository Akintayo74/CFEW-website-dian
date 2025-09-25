import AboutUsImageBanner from "../components/AboutUsImageBanner/AboutUsImageBanner";
import Layout from "../components/Layout/Layout";
import OurCoreValues from "../components/OurCoreValues/OurCoreValues";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";

function AboutPage() {
  return (
    <Layout>
        <AboutUsImageBanner />
        <WhoWeAre />
        <OurCoreValues />
    </Layout>
  );
}

export default AboutPage;
