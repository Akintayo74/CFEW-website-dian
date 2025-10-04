import Layout from '../components/Layout';
import Section from '../components/Section';

function HomePage() {
    return (
        <Layout>
            <Section>
                <div className='bg-purple-600 py-20'>
                    <h1 className='text-2xl lg:text-5xl'>
                        Page not found! :(
                    </h1>
                </div>
            </Section>
        </Layout>
    )
}

export default HomePage;