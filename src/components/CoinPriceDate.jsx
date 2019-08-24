import PropTypes from 'prop-types';
import React from 'react';
import Form from 'react-bootstrap/Form';

function CoinPriceDate({ coinPriceDate: { id, date } }) {
  return (
    <React.Fragment>
      <Form.Label>{date}</Form.Label>
    </React.Fragment>
  );
}

CoinPriceDate.propTypes = {
  coinPriceDate: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};

export default CoinPriceDate;
