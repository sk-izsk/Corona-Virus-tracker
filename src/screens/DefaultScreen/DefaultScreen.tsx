import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { CustomText } from '../../component';
import Center from '../../component/Center/Center';
import {
  fetchAllCountriesApi,
  fetchContinentApi,
  fetchWorldWideCaseApi,
  fetchWorldWideCaseApi2,
} from '../../redux';
import AllCountriesList from '../AllCountriesList/AllCountriesList';
import WorldWideCases from '../WorldWideCases/WorldWideCases';

export interface Props {
  navigation: NavigationProp<any>;
}

const DefaultScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchWorldWideCaseApi());
    dispatch(fetchWorldWideCaseApi2());
    dispatch(fetchContinentApi('cases'));
    dispatch(fetchAllCountriesApi('cases'));
    setRefreshing(false);
  }, [refreshing]);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />
        }>
        <View style={styles.container}>
          <View style={styles.worldCasesContainer}>
            <WorldWideCases navigation={navigation} />
          </View>
          <View style={styles.countriesContainer}>
            <Center style={styles.allCountriesLabel}>
              <CustomText type='bold-font'>All countries</CustomText>
            </Center>
            <AllCountriesList navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DefaultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  worldCasesContainer: {
    flex: 3,
  },
  countriesContainer: {
    flex: 6,
  },
  allCountriesLabel: {
    marginTop: 5,
    marginBottom: 5,
  },
});
