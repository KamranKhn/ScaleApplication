import 'react-native';
import React from 'react';
import {PyramidScale} from '../src/components/PyramidScale';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<PyramidScale />).toJSON();
  expect(tree).toMatchSnapshot();
});
