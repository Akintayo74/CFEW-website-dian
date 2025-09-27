import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Container from '../Container';
import Section from '../Section';
import ResourcesBlog from '../ResourcesBlog';
import ResourcesPressRelease from '../ResourcesPressRelease';
import ResourcesPublications from '../ResourcesPublications';

function ResourcesRouter() {
   const [activeTab, setActiveTab] = React.useState('blog');

   const tabs = [
    { id: 'blog', name: 'BLOG' },
    { id: 'press-release', name: 'PRESS RELEASE' },
    { id: 'publications', name: 'PUBLICATIONS'}
  ];

  function handleTabChange(tabId) {
    setActiveTab(tabId)
  }

  function renderContent() {
    if(activeTab === 'blog') {
      return <ResourcesBlog />
    }

    if(activeTab === 'press-release') {
      return <ResourcesPressRelease />
    }

    if(activeTab === 'publications') {
      return <ResourcesPublications />
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

export default ResourcesRouter;
