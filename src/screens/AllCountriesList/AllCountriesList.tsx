import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Center from '../../component/Center/Center';
import InfoCard from '../../component/InfoCard/InfoCard';
import { SpecificCountryInfo } from '../../redux';
import { Store } from '../../redux/stores/store';
import { isArrayEmpty } from '../../utils/helper/helper';

interface Props {}

const AllCountriesList: React.FC<Props> = () => {
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
            <TouchableOpacity key={country.country} style={styles.infoCardContainer}>
              <InfoCard
                countryName={country.country}
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
