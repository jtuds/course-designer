import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './kye.jpg';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <A href="https://twitter.com/jtuds">
          <Img src={Banner} alt="Kye" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/new-course">
            <FormattedMessage {...messages.newCourse} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
