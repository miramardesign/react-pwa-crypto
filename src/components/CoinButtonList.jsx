import PropTypes from 'prop-types';
import React from 'react';

import CoinButton from './CoinButton';

function CoinButtonList({ id, coins, onDisabledButton }) {
  const events = {
    onDisabledButton,
  };

  return (
    <React.Fragment id={`button-list-${id}`} className='button-list'>
      {coins.map(coin => (
        <CoinButton key={coin.id} coinButton={coin} {...events}></CoinButton>
      ))}
    </React.Fragment>
  );
}

CoinButtonList.propTypes = {
  id: PropTypes.number.isRequired,
  coins: PropTypes.arrayOf(CoinButton.propTypes.coinButton).isRequired,
  onDisabledButton: PropTypes.func,
};

export default CoinButtonList;
