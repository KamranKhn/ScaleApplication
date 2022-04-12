import 'react-native';
import React from 'react';
import {CircularScale} from '../src/components/CircularScale';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<CircularScale />).toJSON();
  expect(tree).toMatchSnapshot();
});
