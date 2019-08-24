import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';

// import { BrowserRouter as Router, Link } from 'react-router-dom';

function CoinButton({
  coinButton: { id, coinName, disabled = false },
  onDisabledButton,
  onBitcoinButton,
  onEthereumButton,
  onLitecoinButton,
}) {
  return (
    <React.Fragment>
      {/* FIX: fix routing */}
      {/* <Link
        to={{
          pathname: '/details/' + coinName,
        }}
      > */}
      <Button variant='outline-secondary' disabled={disabled} block>
        {coinName}
      </Button>
      {/* </Link> */}
      {/* <Route path="/details/:id" component={CoinDetailComponent} /> */}
    </React.Fragment>
  );
}

CoinButton.propTypes = {
  coinButton: PropTypes.shape({
    id: PropTypes.string.isRequired,
    coinName: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
  }),
  onDisabledButton: PropTypes.func,
  onBitcoinButton: PropTypes.func,
  onEthereumButton: PropTypes.func,
  onLitecoinButton: PropTypes.func,
};

export default CoinButton;
