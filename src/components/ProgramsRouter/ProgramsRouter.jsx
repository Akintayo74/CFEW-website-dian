import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PreviousInitiatives from '../PreviousInitiatives/PreviousInitiatives';
import UpcomingInitiatives from '../UpcomingInitiatives';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Container from '../Container';
import Section from '../Section';

function ProgramsRouter() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get initial tab from URL hash, default to 'previous'
  const getInitialTab = () => {
    const hash = location.hash.replace('#', '');
    return hash === 'upcoming' || hash === 'previous' ? hash : 'previous';
  };

  const [activeTab, setActiveTab] = React.useState(getInitialTab);

  const tabs = [
    { id: 'previous', name: 'PREVIOUS' },
    { id: 'upcoming', name: 'UPCOMING' }
  ];

  // Update URL when tab changes
  function handleTabChange(tabId) {
    setActiveTab(tabId);
    navigate(`#${tabId}`, { replace: true });
  }

  // Listen for hash changes (back/forward browser buttons)
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && (hash === 'upcoming' || hash === 'previous')) {
      setActiveTab(hash);
    }
  }, [location.hash]);

  function renderContent() {
    if (activeTab === 'previous') {
      return <PreviousInitiatives />;
    }
    if (activeTab === 'upcoming') {
      return <UpcomingInitiatives />;
    }
    return null;
  }

  return (
    <Section spacing='tight'>
      <div className='mb-12 lg:mb-20'>
        <Container>
          <BreadCrumbs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </Container>
      </div>
      <div>
        {renderContent()}
      </div>
    </Section>
  );
}

export default ProgramsRouter;