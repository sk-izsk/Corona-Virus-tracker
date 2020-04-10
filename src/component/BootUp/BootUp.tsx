import React, { useContext, useEffect, useState } from 'react';
import { Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpecificProvinceApi, Store } from '../../redux';

const BootUp: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [load, setLoad] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const dispatch = useDispatch();
  const todos = useSelector((state: Store) => state);

  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    dispatch(fetchSpecificProvinceApi('Canada', 'ontario', 1));
    setLoad(true);
    setRefreshing(false);
    console.log('this is my state data', todos);
  }, [refreshing]);

  const styles = StyleSheet.create({
    bootUpContainer: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: `${theme.colors?.primary}`,
      width: '100%',
    },
  });
  return (
    <SafeAreaView style={styles.bootUpContainer}>
      <ScrollView
        contentContainerStyle={styles.bootUpContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />
        }>
        <View>
          <Image source={require('../../asset/images/corona-virus-icon.png')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BootUp;
