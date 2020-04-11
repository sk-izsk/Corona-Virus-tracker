import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BootUp } from '../../component';
import DefaultScreen from '../../screens/DefaultScreen/DefaultScreen';

interface Props {}

const Stacks: React.FC<Props> = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='default screen' component={DefaultScreen} />
      <Stack.Screen name='boot up screen' component={BootUp} />
    </Stack.Navigator>
  );
};

export default Stacks;
