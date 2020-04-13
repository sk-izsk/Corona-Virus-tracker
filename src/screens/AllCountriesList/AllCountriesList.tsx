import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Center, InfoCard } from '../../component/';
import { SpecificCountryInfo } from '../../redux';
import { Store } from '../../redux/stores/store';
import { isArrayEmpty } from '../../utils';

interface Props {
  navigation?: NavigationProp<any>;
}

const AllCountriesList: React.FC<Props> = ({ navigation }) => {
  const allCountries: SpecificCountryInfo[] = useSelector((state: Store) => state.allCountriesInfo);

  return (
    <>
      {isArrayEmpty(allCountries) === true ? (
        <Center>
          <ActivityIndicator size='large' color='#6a1b9a' />
        </Center>
      ) : (
        allCountries.map((country: SpecificCountryInfo) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation?.navigate('Country', {
                  nameOfCountry: country.country,
                });
              }}
              key={country.country}
              style={styles.infoCardContainer}>
              <InfoCard
                name={country.country}
                cases={country.cases}
                deaths={country.deaths}
                recovered={country.recovered}
                countryFlag={country.countryInfo.flag}
              />
            </TouchableOpacity>
          );
        })
      )}
    </>
  );
};

const styles = StyleSheet.create({
  infoCardContainer: {
    flex: 1,
    marginBottom: 8,
  },
});

export default AllCountriesList;
