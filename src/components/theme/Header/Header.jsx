/**
 * Header component.
 * @module components/theme/Header/Header
 */

import React from 'react';

import { Anontools, Logo, SearchWidget } from '../../../components';

/**
 * Header component class.
 * @function Field
 * @returns {string} Markup of the component.
 */
const Header = () => (
  <header id="content-header">
    <div className="container">
      <div id="portal-header">
        <Logo />
        <SearchWidget />
        <Anontools />
      </div>
    </div>
  </header>
);

export default Header;