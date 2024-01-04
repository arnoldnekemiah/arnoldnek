import React from 'react';
import PropTypes from 'prop-types';

function Pre({ load }) {
  return <div id={load ? 'preloader' : 'preloader-none'} />;
}

Pre.propTypes = {
  load: PropTypes.bool.isRequired,
};

export default Pre;
