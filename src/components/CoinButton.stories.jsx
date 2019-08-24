import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import CoinButton from './CoinButton';

export function createCoinButton(attrs) {
  return {
    id: Math.round(Math.random() * 1000000),
    coinName: 'COIN',
    disabled: false,
    updatedAt: Date.now(),
    ...attrs,
  };
}

export const actions = {
  onDisabledButton: action('onDisabledButton'),
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
  ));
