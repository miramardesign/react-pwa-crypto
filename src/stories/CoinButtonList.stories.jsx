import { storiesOf } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import CoinButtonList from '../components/CoinButtonList';
import { actions, createCoinButton } from './CoinButton.stories';

export const defaultCoins = [
  createCoinButton({
    id: Math.round(Math.random() * 1000000),
    coinName: 'BTC',
    disabled: false,
  }),
  createCoinButton({
    id: Math.round(Math.random() * 1000000),
    coinName: 'ETH',
    disabled: false,
  }),
  createCoinButton({
    id: Math.round(Math.random() * 1000000),
    coinName: 'LTC',
    disabled: false,
  }),
];

export const disabledCoins = [
  createCoinButton({
    id: Math.round(Math.random() * 1000000),
    coinName: 'BTC',
    disabled: true,
  }),
  createCoinButton({
    id: Math.round(Math.random() * 1000000),
    coinName: 'ETH',
    disabled: true,
  }),
  createCoinButton({
    id: Math.round(Math.random() * 1000000),
    coinName: 'LTC',
    disabled: true,
  }),
];

storiesOf('CoinButtonList', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>
      <div style={{ padding: '3rem' }}>{story()}</div>
    </MemoryRouter>
  ))
  .add('default', () => <CoinButtonList coins={defaultCoins} {...actions} />)
  .add('disabledCoins', () => (
    <CoinButtonList coins={disabledCoins} {...actions} />
  ));
