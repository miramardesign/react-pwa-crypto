import { storiesOf } from '@storybook/react';
import React from 'react';

import CoinPriceDate from './CoinPriceDate';

export function createCoinPriceDate(attrs) {
  return {
    id: Math.round(Math.random() * 1000000).toString(),
    date: 'Friday, August 23, 2019 10:32 PM',
    updatedAt: Date.now(),
    ...attrs,
  };
}

export const actions = {};

storiesOf('CoinPriceDate', module).add('default', () => (
  <CoinPriceDate coinPriceDate={createCoinPriceDate()} {...actions} />
));
