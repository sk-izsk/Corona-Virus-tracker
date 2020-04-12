import React from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import { useSelector } from 'react-redux';
import Block from '../../component/Block/Block';
import Center from '../../component/Center/Center';
import CustomText from '../../component/CustomText/CustomText';
import { Store, WorldWideCases as WorldWideCasesTypes } from '../../redux';
import { isObjectEmpty } from '../../utils';

export interface Props {}

const WorldWideCases: React.FC<Props> = () => {
  const worldWideData: WorldWideCasesTypes = useSelector((state: Store) => state.worldWideCases);

  return (
    <>
      {isObjectEmpty(worldWideData) === true ? (
        <Center>
          <ActivityIndicator size='large' color='#6a1b9a' />
        </Center>
      ) : (
        <View style={styles.container}>
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
              />
            </View>
          </View>
        </View>
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
});

export default WorldWideCases;
