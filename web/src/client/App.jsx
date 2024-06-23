import {
  Page,
} from '@patternfly/react-core';
import Sidebar from './components/nav/Sidebar';
import Header from './components/nav/Header';
import ContentSkip from './components/nav/ContentSkip';
import Title from './components/common/Title';
import "@patternfly/react-core/dist/styles/base.css";
import './fonts.css'
import './App.css'

function App({ children, title, subtitle }) {
  const pageId = 'main-content';
  const pageSkipToContent = <ContentSkip pageId={pageId} />;
  const sidebar = <Sidebar />;
  const header = <Header />;
  const titleComponent = <Title value={title} subtitle={subtitle} />;
  return (
    <Page
      header={header}
      sidebar={sidebar}
      isManagedSidebar
      skipToContent={pageSkipToContent}
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
