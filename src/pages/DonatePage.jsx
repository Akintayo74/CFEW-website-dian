import DonationImpact from "../components/DonationImpact/DonationImpact";
import DonationsImageBanner from "../components/DonationsImageBanner/DonationsImageBanner";
import Layout from "../components/Layout";


function DonatePage() {
    return (
        <Layout>
            <DonationsImageBanner />
            <DonationImpact />
        </Layout>
    )
}

export default DonatePage;