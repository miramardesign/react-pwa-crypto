import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import BackButton from '../components/BackButton';

export function createBackButton(attrs) {
  return {
    id: Math.round(Math.random() * 1000000).toString(),
    label: 'Back',
    disabled: false,
    updatedAt: Date.now(),
    ...attrs,
  };
}

export const actions = {
  onDisabledButton: action('onDisabledButton'),
};

storiesOf('BackButton', module)
  .add('default', () => (
    <BackButton
      backButton={createBackButton({ disabled: false })}
      {...actions}
    />
  ))
  .add('disabled', () => (
    <BackButton
      backButton={createBackButton({ disabled: true })}
      {...actions}
    />
  ));
