import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { RefreshControl, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { CustomText } from '../../component';
import { fetchSpecificProvinceApi, SpecificProvince, Store } from '../../redux';

interface Props {
  route: RouteProp<any, any> | any;
}

const Provinces: React.FC<Props> = ({ route }) => {
  const [countryName, setCountryName] = useState<string>(route.params.countryName);
  const [provinces, setProvinces] = useState<string[]>(route.params.provinces);
  const [provinceDetails, setProvinceDetails] = useState<any[]>();
  const provinceDetail: SpecificProvince = useSelector((state: Store) => state.specificProvince);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    provinces.map((province: SpecificProvince | any) => {
      dispatch(fetchSpecificProvinceApi(countryName, province));
      setProvinceDetails((oldState: any) => [...oldState, provinceDetail]);
      setRefreshing(false);
    });
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />
      }>
      <View>
        <CustomText>hello</CustomText>
      </View>
    </ScrollView>
  );
};

export default Provinces;
