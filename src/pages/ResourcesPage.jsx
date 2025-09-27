import Layout from '../components/Layout';  
import ResourcesImageBanner from '../components/ResourcesImageBanner/ResourcesImageBanner';
import ResourcesRouter from '../components/ResourcesRouter/ResourcesRouter';

function ResourcesPage() {

    return (
        <Layout>
            <ResourcesImageBanner />
            <ResourcesRouter />
        </Layout>
    )
}

export default ResourcesPage;