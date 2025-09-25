import AboutUsImageBanner from "../components/AboutUsImageBanner/AboutUsImageBanner";
import Layout from "../components/Layout/Layout";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";

function AboutPage() {
  return (
    <Layout>
        <AboutUsImageBanner />
        <WhoWeAre />
    </Layout>
  );
}

export default AboutPage;
