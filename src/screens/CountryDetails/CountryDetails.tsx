import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Center, DetailedInfoScreen } from '../../component';
import { fetchSpecificCountryApi, SpecificCountryInfo, Store, WorldWideCases } from '../../redux/';
import { isObjectEmpty } from '../../utils';

interface Props {
  navigation?: NavigationProp<any>;
  route?: RouteProp<any, any> | any;
}

const CountryDetails: React.FC<Props> = ({ navigation, route }) => {
  const worldWideCases: WorldWideCases = useSelector((state: Store) => state.worldWideCases);
  const countryDetails: SpecificCountryInfo = useSelector(
    (state: Store) => state.specificCountryInfo
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSpecificCountryApi(route?.params?.nameOfCountry));
  }, []);

  return (
    <View>
      {isObjectEmpty(countryDetails) === true ? (
        <Center>
          <ActivityIndicator size='large' color='#6a1b9a' />
        </Center>
      ) : (
        <DetailedInfoScreen
          name={countryDetails.country}
          imageUrl={countryDetails.countryInfo.flag}
          total={countryDetails.cases}
          totalDeath={countryDetails.deaths}
          recover={countryDetails.recovered}
          newCases={countryDetails.todayCases}
          active={countryDetails.active}
          tests={countryDetails.tests}
          critical={countryDetails.critical}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default CountryDetails;
