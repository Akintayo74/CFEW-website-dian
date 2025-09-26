import Layout from '../components/Layout';
import PreviousInitiatives from '../components/PreviousInitiatives/PreviousInitiatives';
import ProgramsImageBanner from '../components/ProgramsImageBanner/ProgramsImageBanner';

function ProgramsPage() {

    return (
        <Layout>
            <ProgramsImageBanner />
            <PreviousInitiatives />
        </Layout>
    )
}

export default ProgramsPage;