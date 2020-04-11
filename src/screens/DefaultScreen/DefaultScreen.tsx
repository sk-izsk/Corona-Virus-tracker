import React, { useEffect, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import WorldWideCases from '../../component/WorldWideCases/WorldWideCases';
import { fetchWorldWideCaseApi } from '../../redux';

export interface Props {
  navigation: any;
}

const DefaultScreen: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchWorldWideCaseApi());
    setRefreshing(false);
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />
        }>
        <View style={styles.worldCasesContainer}>
          <WorldWideCases />
        </View>
        <View style={styles.countriesContainer}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DefaultScreen;

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  worldCasesContainer: {
    flex: 4,
  },
  countriesContainer: {
    flex: 6,
  },
});
