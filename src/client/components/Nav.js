import React from 'react';
import PropTypes from 'prop-types';

const Nav = props =>
(
  <div className='Navigation'>
    <div className='navcontainer'>
      <p>{props.navtext}</p>
    </div>
  </div>
);

Nav.propTypes = {
  navtext: PropTypes.string
};

export default Nav;
