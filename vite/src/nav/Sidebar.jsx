import React from 'react';
import {
  useNavigate,
  useLocation
} from 'react-router-dom';

import {
  Nav,
  NavList,
  NavItem,
  PageSidebar,
  PageSidebarBody
} from '@patternfly/react-core';

export default function Sidebar() {
  const history = useNavigate();
  const route = useLocation();
  const mapping = ['/', '/vms', '/storages', '/networks'];
  const onSelect = ({ itemId }) => history.push(mapping[itemId]);
  const pageNav = (
    <Nav onSelect={onSelect} aria-label="Nav">
      <NavList>
        <NavItem itemId={0} isActive={route.pathname === mapping[0]} to="/">
          Home
        </NavItem>
        <NavItem itemId={1} isActive={route.pathname === mapping[1]} to="/vms">
          Virtual Machines
        </NavItem>
        <NavItem itemId={2} isActive={route.pathname === mapping[2]} to="/storages">
          Storage
        </NavItem>
        <NavItem itemId={3} isActive={route.pathname === mapping[3]} to="/networks">
          Network
        </NavItem>
      </NavList>
    </Nav>
  );
  return (
    <PageSidebar>
      <PageSidebarBody>{pageNav}</PageSidebarBody>
    </PageSidebar>
  );
}
