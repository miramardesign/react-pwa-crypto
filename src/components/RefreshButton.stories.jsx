import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import RefreshButton from './RefreshButton';

export function createRefreshButton(attrs) {
  return {
    id: Math.round(Math.random() * 1000000).toString(),
    label: 'Refresh',
    disabled: false,
    updatedAt: Date.now(),
    ...attrs,
  };
}

export const actions = {
  onDisabledButton: action('onDisabledButton'),
};

storiesOf('RefreshButton', module)
  .add('default', () => (
    <RefreshButton
      refreshButton={createRefreshButton({ disabled: false })}
      {...actions}
    />
  ))
  .add('disabled', () => (
    <RefreshButton
      refreshButton={createRefreshButton({ disabled: true })}
      {...actions}
    />
  ));
