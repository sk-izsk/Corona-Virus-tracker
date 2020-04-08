import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ThemeContext } from 'react-native-elements';
import { getDataForSpecificProvinces } from '../../utils/url/url';

const BootUp: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const [load, setLoad] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const fetchApi = async () => {
    const response = await axios(getDataForSpecificProvinces('ca', 'quebec'));
    setData(response.data);
    console.log(data);
  };
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    fetchApi();
    setLoad(true);
    setRefreshing(false);
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
          {data && <Text>{data.active}</Text>}

          <Image source={require('../../asset/images/corona-virus-icon.png')} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BootUp;
