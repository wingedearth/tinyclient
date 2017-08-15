import React from 'react';
import PropTypes from 'prop-types';

const Banner = props =>
(
  <div className='Banner'>
    <div className='BannerBackground'>
      <p className='BannerTitle'>{props.bannertext}</p>
    </div>
  </div>
);

Banner.propTypes = {
  bannertext: PropTypes.string
};

export default Banner;
