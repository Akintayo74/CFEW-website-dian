import AboutUs from '../components/AboutUs/AboutUs';
import Container from '../components/Container/Container';
import Layout from '../components/Layout/Layout';
import Slideshow from '../components/Slideshow/Slideshow';

function HomePage() {

    return (
        <Layout>
            <Slideshow />
            <AboutUs />
            <Container>    
            </Container>
        </Layout>
    )
}

export default HomePage;