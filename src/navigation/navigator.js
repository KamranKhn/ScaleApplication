import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}
