import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import {
  AboutMe,
  AllCountriesList,
  Continent,
  CountryDetails,
  DefaultScreen,
  DetailedWorldCases,
  Provinces,
} from '../../screens';

interface Props {}

const Stacks: React.FC<Props> = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: { fontFamily: 'bold-font', fontSize: 30 },
      }}>
      <Stack.Screen name='Corona tracker' component={DefaultScreen} />
      <Stack.Screen name='World wide' component={DetailedWorldCases} />
      <Stack.Screen name='Country list' component={AllCountriesList} />
      <Stack.Screen
        options={({ route, navigation }: any) => ({
          headerTitle: route?.params?.continent.continent,
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('About me');
                }}>
                <View style={{ marginRight: 8 }}>
                  <Avatar
                    size='medium'
                    containerStyle={{ borderColor: '#6a1b9a', borderWidth: 2 }}
                    source={require('../../asset/images/about-me.png')}
                    rounded
                  />
                </View>
              </TouchableOpacity>
            );
          },
        })}
        name='Continent'
        component={Continent}
      />
      <Stack.Screen
        options={({ route, navigation }: any) => ({
          headerTitle: route.params.nameOfCountry,
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('About me');
                }}>
                <View style={{ marginRight: 8 }}>
                  <Avatar
                    size='medium'
                    containerStyle={{ borderColor: '#6a1b9a', borderWidth: 2 }}
                    source={require('../../asset/images/about-me.png')}
                    rounded
                  />
                </View>
              </TouchableOpacity>
            );
          },
        })}
        name='Country'
        component={CountryDetails}
      />
      <Stack.Screen name='About me' component={AboutMe} />
      <Stack.Screen name='Provinces' component={Provinces} />
    </Stack.Navigator>
  );
};

export default Stacks;
