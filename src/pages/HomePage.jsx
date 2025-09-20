import AboutUs from '../components/AboutUs/AboutUs';
import Container from '../components/Container/Container';
import HowWeWork from '../components/HowWeWork/HowWeWork';
import Layout from '../components/Layout/Layout';
import Slideshow from '../components/Slideshow/Slideshow';
import ThematicAreas from '../components/ThematicAreas/ThematicAreas';

function HomePage() {

    return (
        <Layout>
            <Slideshow />
            <AboutUs />
            <ThematicAreas />
            <HowWeWork />
            <Container>    
            </Container>
        </Layout>
    )
}

export default HomePage;