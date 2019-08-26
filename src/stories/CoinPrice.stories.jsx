import { storiesOf } from '@storybook/react';
import React from 'react';

import CoinPrice from '../components/CoinPrice';

export function createCoinPrice(attrs) {
  return {
    id: Math.round(Math.random() * 1000000).toString(),
    price: 'USD 20,000',
    updatedAt: Date.now(),
    ...attrs,
  };
}

export const actions = {};

storiesOf('CoinPrice', module).add('default', () => (
  <CoinPrice coinPrice={createCoinPrice()} {...actions} />
));
