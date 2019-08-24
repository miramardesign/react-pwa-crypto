import React, { PureComponent } from 'react';

import CoinButton from '../components/CoinButton';

class HomePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      coins: [
        { id: 1, coinName: 'BTC', disabled: false },
        { id: 2, coinName: 'ETH', disabled: false },
        { id: 3, coinName: 'LTC', disabled: false },
      ],
    };
  }

  render() {
    return (
      <div className="HomeComponentWrapper">
        <h1>Crypto Prices Yo!</h1>
        {this.state.coins.map(coin => (
          <div>
            <CoinButton coinButton={coin}> ></CoinButton>
          </div>
        ))}
      </div>
    );
  }
}

export default HomePage;
