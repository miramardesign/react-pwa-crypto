import PropTypes from 'prop-types';
import React from 'react';
import Form from 'react-bootstrap/Form';

function CoinPrice({ coinPrice: { id, price } }) {
  return (
    <React.Fragment>
      <Form.Label>{price}</Form.Label>
    </React.Fragment>
  );
}

CoinPrice.propTypes = {
  coinPrice: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default CoinPrice;
