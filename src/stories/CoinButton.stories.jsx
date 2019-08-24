import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import CoinButton from '../components/CoinButton';

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
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
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
