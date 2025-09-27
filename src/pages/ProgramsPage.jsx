import Layout from '../components/Layout';
import PreviousInitiatives from '../components/PreviousInitiatives/PreviousInitiatives';
import ProgramsImageBanner from '../components/ProgramsImageBanner/ProgramsImageBanner';
import ProgramsRouter from '../components/ProgramsRouter/ProgramsRouter';

function ProgramsPage() {

    return (
        <Layout>
            <ProgramsImageBanner />
            {/* <PreviousInitiatives /> */}
            <ProgramsRouter />
        </Layout>
    )
}

export default ProgramsPage;