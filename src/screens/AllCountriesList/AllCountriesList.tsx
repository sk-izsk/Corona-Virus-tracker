import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { Center, InfoCard } from '../../component/';
import { Search, SpecificCountryInfo } from '../../redux';
import { Store } from '../../redux/stores/store';
import { isArrayEmpty } from '../../utils';

interface Props {
  navigation?: NavigationProp<any>;
}

const AllCountriesList: React.FC<Props> = ({ navigation }) => {
  const allCountries: SpecificCountryInfo[] = useSelector((state: Store) => state.allCountriesInfo);
  const search: Search = useSelector((state: Store) => state.search);
  const [countryList, setCountryList] = useState<SpecificCountryInfo[] | [] | any>(allCountries);

  useEffect(() => {
    setCountryList(allCountries);
  }, [allCountries]);

  // useEffect(() => {
  //   if (search.search === '') {
  //     setCountryList(allCountries);
  //   } else {
  //     // setCountryList((listOfCountry: SpecificCountryInfo[]) => {
  //     //   return listOfCountry.filter((country: SpecificCountryInfo) => {
  //     //     return country.country === search.search;
  //     //   });
  //     // });
  //     if (countryList.length > 0) {
  //       const newListOfCountry = countryList.find(
  //         (country: SpecificCountryInfo) => country?.country === search.search
  //       );
  //       setCountryList([newListOfCountry]);
  //     }
  //   }
  // }, [search]);

  return (
    <>
      {isArrayEmpty(countryList) === true ? (
        <Center>
          <ActivityIndicator size='large' color='#6a1b9a' />
        </Center>
      ) : (
        countryList.map((country: SpecificCountryInfo) => {
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
