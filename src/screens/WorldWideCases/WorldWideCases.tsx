import { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Block, Center, CustomText } from '../../component/';
import { getSearchState, Store, WorldWideCases as WorldWideCasesTypes } from '../../redux';
import { isObjectEmpty } from '../../utils';

export interface Props {
  navigation?: NavigationProp<any>;
}

const WorldWideCases: React.FC<Props> = ({ navigation }) => {
  const [searchCountry, setSearchCountry] = useState<string>('');
  const worldWideData: WorldWideCasesTypes = useSelector((state: Store) => state.worldWideCases);

  const dispatch = useDispatch();

  return (
    <>
      {isObjectEmpty(worldWideData) === true ? (
        <Center>
          <ActivityIndicator size='large' color='#6a1b9a' />
        </Center>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation?.navigate('World wide');
          }}
          style={styles.container}>
          <Center style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../asset/images/world.png')} />
            <CustomText type='bold-font'>World wide cases</CustomText>
          </Center>
          <View style={styles.worldWideDataContainer}>
            <View style={styles.infoContainer}>
              <Block
                style={styles.block}
                imageSrc={require('../../asset/images/corona-virus-icon.png')}
                description='Total'
                data={worldWideData.cases}
              />
              <Block
                imageSrc={require('../../asset/images/death.png')}
                description='Total death'
                data={worldWideData.deaths}
              />
            </View>
            <View style={styles.infoContainer}>
              <Block
                style={styles.block}
                description='Total recover'
                imageSrc={require('../../asset/images/recovered.png')}
                data={worldWideData.recovered}
              />
              <Block
                imageSrc={require('../../asset/images/sick.png')}
                description='New cases'
                data={worldWideData.todayCases}
              />
            </View>
            <View style={styles.searchContainer}>
              {/* <SearchBar
                placeholder='Search'
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                containerStyle={{
                  backgroundColor: '#ffffff',
                }}
                platform='android'
                searchIcon={
                  <Image style={styles.icon} source={require('../../asset/images/search.png')} />
                }
              /> */}
              <Input
                placeholder='Search'
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputStyle}
                rightIcon={
                  <Image
                    style={styles.searchIcon}
                    source={require('../../asset/images/search.png')}
                  />
                }
                value={searchCountry}
                onChangeText={(value) => {
                  setSearchCountry(value);
                  dispatch(getSearchState({ search: value }));
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    height: 290,
  },

  image: {
    height: 30,
    width: 30,
    marginRight: '5%',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  worldWideDataContainer: {
    flex: 3,
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  infoContainer: {
    flexDirection: 'row',
    display: 'flex',
    width: '95%',
    justifyContent: 'space-evenly',
    height: 70,
    marginBottom: '2%',
    marginLeft: '2%',
  },
  block: {
    marginRight: '4%',
  },
  searchContainer: {
    flex: 1,
    marginTop: 6,
  },
  searchIcon: {
    height: 30,
    width: 30,
    marginRight: 8,
  },
  inputContainer: {
    borderColor: '#6a1b9a',
    borderWidth: 2,
    borderRadius: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    textAlign: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default WorldWideCases;
