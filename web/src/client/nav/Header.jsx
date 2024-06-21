import React from 'react';
import {
  Brand,
  Masthead,
  MastheadBrand,
  MastheadMain,
  MastheadToggle,
  PageToggleButton
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import logo from '../logo.svg';

export default function Header() {
  return (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <Brand src={logo} alt="Logo" heights={{ default: '36px' }} />
        </MastheadBrand>
      </MastheadMain>
    </Masthead>
  );
}
