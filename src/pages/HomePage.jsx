import React, { useState } from 'react';

import CoinButtonList from '../components/CoinButtonList';
import Title from '../components/Title';

function HomePage() {
  const initialTitle = {
    id: 1,
    text: 'Crypto Prices Yo!',
  };
  const initialCoins = [
    {
      id: Math.round(Math.random() * 1000000),
      coinName: 'BTC',
      disabled: false,
    },
    {
      id: Math.round(Math.random() * 1000000),
      coinName: 'ETH',
      disabled: false,
    },
    {
      id: Math.round(Math.random() * 1000000),
      coinName: 'LTC',
      disabled: false,
    },
  ];
  // eslint-disable-next-line no-unused-vars
  const [title, setTitle] = useState(initialTitle);
  // eslint-disable-next-line no-unused-vars
  const [coins, setCoins] = useState(initialCoins);

  return (
    <React.Fragment>
      <div className="row">
        <div className="offset-md-4 col-md-4 col-12">
          <Title title={title} />
        </div>
      </div>
      <div className="row">
        <div className="offset-md-4 col-md-4 col-12">
          <CoinButtonList coins={coins} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
