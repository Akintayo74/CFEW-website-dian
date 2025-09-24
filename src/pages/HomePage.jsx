import AboutUs from '../components/AboutUs/AboutUs';
import Container from '../components/Container/Container';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import Layout from '../components/Layout/Layout';
import Slideshow from '../components/Slideshow/Slideshow';
import ThematicAreas from '../components/ThematicAreas/ThematicAreas';
import FoundersMessage from '../components/FoundersMessage/FoundersMessage'
import StoriesInsights from '../components/StoriesInsights/StoriesInsights';

function HomePage() {

    return (
        <Layout>
            <Slideshow />
            <AboutUs />
            <ThematicAreas />
            <HowWeWork />
            <FoundersMessage />
            <StoriesInsights />
        </Layout>
    )
}

export default HomePage;