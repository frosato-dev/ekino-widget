import React from 'react';
import { storiesOf } from '@storybook/react';
import TimeCapture from './TimeCapture';

storiesOf('TimeCapture', module)
  .add('test', () => (
    <TimeCapture />
  ))