import {
  Page,
} from '@patternfly/react-core';
import Sidebar from './nav/Sidebar';
import Header from './nav/Header';
import ContentSkip from './nav/ContentSkip';
import Breadcrumb from './nav/Breadcrumb';
import Title from './common/Title';
import Home from './Home';
import "@patternfly/react-core/dist/styles/base.css";
import './fonts.css'
import './App.css'

function App({ children, title, subtitle }) {
  const pageId = 'main-content';
  const pageSkipToContent = <ContentSkip pageId={pageId} />;
  const sidebar = <Sidebar />;
  const header = <Header />;
  const breadcrumb = <Breadcrumb />;
  const titleComponent = <Title value={title} subtitle={subtitle} />;
  return (
    <Page
      header={header}
      sidebar={sidebar}
      isManagedSidebar
      skipToContent={pageSkipToContent}
      breadcrumb={breadcrumb}
      mainContainerId={pageId}
      isBreadcrumbWidthLimited
      isBreadcrumbGrouped
      additionalGroupedContent={titleComponent}
      groupProps={{ stickyOnBreakpoint: { default: 'top' } }}>
      {children}
    </Page>
  );
}

export default App
