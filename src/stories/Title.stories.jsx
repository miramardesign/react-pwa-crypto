import { storiesOf } from '@storybook/react';
import React from 'react';

import Title from '../components/Title';

export function createTitle(attrs) {
  return {
    id: Math.round(Math.random() * 1000000),
    text: 'Crypto Prices Yo!',
    updatedAt: Date.now(),
    ...attrs,
  };
}

export const actions = {};

storiesOf('Title', module).add('default', () => (
  <Title title={createTitle()} {...actions} />
));
