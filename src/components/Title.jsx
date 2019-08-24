import PropTypes from 'prop-types';
import React from 'react';

function Title({ title: { id, text } }) {
  return (
    <React.Fragment>
      <h1 className="text-center">{text}</h1>
    </React.Fragment>
  );
}

Title.propTypes = {
  title: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default Title;
