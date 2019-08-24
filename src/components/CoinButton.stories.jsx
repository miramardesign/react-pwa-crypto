import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import CoinButton from './CoinButton';

export function createCoinButton(attrs) {
  return {
    id: Math.round(Math.random() * 1000000).toString(),
    coinName: 'COIN',
    disabled: false,
    updatedAt: Date.now(),
    ...attrs,
  };
}

export const actions = {
  onDisabledButton: action('onDisabledButton'),
  onBitcoinButton: action('onDisabledButton'),
  onEthereumButton: action('onEthereumButton'),
  onLitecoinButton: action('onLitecoinButton'),
};

storiesOf('CoinButton', module)
  .add('default', () => (
    <CoinButton
      coinButton={createCoinButton({ disabled: false })}
      {...actions}
    />
  ))
  .add('disabled', () => (
    <CoinButton
      coinButton={createCoinButton({ disabled: true })}
      {...actions}
    />
  ))
  .add('btc', () => (
    <CoinButton
      coinButton={createCoinButton({ coinName: 'BTC', disabled: false })}
      {...actions}
    />
  ))
  .add('eth', () => (
    <CoinButton
      coinButton={createCoinButton({ coinName: 'ETH', disabled: false })}
      {...actions}
    />
  ))
  .add('ltc', () => (
    <CoinButton
      coinButton={createCoinButton({ coinName: 'LTC', disabled: false })}
      {...actions}
    />
  ));
