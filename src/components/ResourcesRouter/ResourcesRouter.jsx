import React from 'react';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import Container from '../Container';
import Section from '../Section';
import ResourcesBlog from '../ResourcesBlog';
import ResourcesPressRelease from '../ResourcesPressRelease';
import ResourcesPublications from '../ResourcesPublications';
import { useLocation, useNavigate } from 'react-router-dom';

function ResourcesRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get initial tab from URL hash, default to 'blog'
  const getInitialTab = () => {
    const hash = location.hash.replace('#', '');
    return hash === 'blog' || hash === 'press-release' || hash === 'publications' 
      ? hash 
      : 'blog';
  };

  const [activeTab, setActiveTab] = React.useState(getInitialTab);

  const tabs = [
    { id: 'blog', name: 'BLOG' },
    { id: 'press-release', name: 'PRESS RELEASE' },
    { id: 'publications', name: 'PUBLICATIONS'}
  ];

  // Update URL when tab changes
  function handleTabChange(tabId) {
    setActiveTab(tabId);
    navigate(`#${tabId}`, { replace: true });
  }

  React.useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && (hash === 'blog' || hash === 'press-release' || hash === 'publications')) {
      setActiveTab(hash);
    }
  }, [location.hash]);

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
    <div>     
      <Section spacing='defaultTight'>
        <Container>
          <BreadCrumbs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        </Container>
      </Section>
      
      <div>
        {renderContent()}
      </div>
    </div> 
  );
}

export default ResourcesRouter;
