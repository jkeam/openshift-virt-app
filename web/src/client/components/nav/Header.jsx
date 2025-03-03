import React from 'react';
import {
  Brand,
  Masthead,
  MastheadLogo,
  MastheadMain,
  MastheadToggle,
  MastheadBrand,
  MastheadContent,
  PageToggleButton
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Masthead>
      <MastheadMain>
        <MastheadToggle>
          <PageToggleButton variant="plain" aria-label="Global navigation">
            <BarsIcon />
          </PageToggleButton>
        </MastheadToggle>
        <MastheadBrand data-codemods>
          <MastheadLogo>
            <Brand src={logo} alt="Logo" heights={{ default: '36px' }} />
          </MastheadLogo>
        </MastheadBrand>
      </MastheadMain>
    </Masthead>
  );
}
