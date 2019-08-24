import PropTypes from 'prop-types';
import React from 'react';

import CoinButton from './CoinButton';

function CoinButtonList({ coins, onDisabledButton }) {
  const events = {
    onDisabledButton,
  };

  return (
    <React.Fragment>
      {coins.map(coin => (
        <CoinButton key={coin.id} coinButton={coin} {...events}></CoinButton>
      ))}
    </React.Fragment>
  );
}

CoinButtonList.propTypes = {
  coins: PropTypes.arrayOf(CoinButton.propTypes.coinButton).isRequired,
  onDisabledButton: PropTypes.func,
};

export default CoinButtonList;
