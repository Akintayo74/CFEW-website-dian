import React, { act } from 'react';
import PreviousInitiatives from '../PreviousInitiatives/PreviousInitiatives';
import UpcomingInitiatives from '../UpcomingInitiatives';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Container from '../Container';
import Section from '../Section';

function ProgramsRouter() {
  const [activeTab, setActiveTab] = React.useState('previous');

   const tabs = [
    { id: 'previous', name: 'PREVIOUS' },
    { id: 'upcoming', name: 'UPCOMING' }
  ];

  function handleTabChange(tabId) {
    setActiveTab(tabId)
  }

  function renderContent() {
    if(activeTab === 'previous') {
      return <PreviousInitiatives />
    }

    if(activeTab === 'upcoming') {
      return <UpcomingInitiatives />
    }

    return null
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
