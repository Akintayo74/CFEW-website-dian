import Container from '../components/Container/Container';
import Header from '../components/Header'
import Layout from '../components/Layout/Layout';
import Slideshow from '../components/Slideshow/Slideshow';

function HomePage() {

    return (
        <Layout>
            <Slideshow />
            <Container>    
            </Container>
        </Layout>
    )
}

export default HomePage;