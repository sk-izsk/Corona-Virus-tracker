import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Center from '../Center/Center';
import CustomText from '../CustomText/CustomText';

interface Props {
  countryName?: string;
  cases?: number;
  deaths?: number;
  recovered?: number;
  countryFlag?: string;
}

const CountryCard: React.FC<Props> = ({ countryName, cases, deaths, recovered, countryFlag }) => {
  return (
    <View>
      <ListItem
        title={
          <Center>
            <CustomText type='bold-font'>{countryName}</CustomText>
          </Center>
        }
        containerStyle={styles.cardStyle}
        leftAvatar={{
          source: {
            uri: `${countryFlag}`,
          },
          size: 'medium',
          containerStyle: { borderColor: '#6a1b9a', borderWidth: 2 },
        }}
        subtitle={
          <View style={styles.infoContainers}>
            <View style={styles.infoContainer}>
              <Image
                style={styles.icon}
                source={require('../../asset/images/corona-virus-icon.png')}
              />

              <CustomText>{cases}</CustomText>
            </View>
            <View style={styles.infoContainer}>
              <Image style={styles.icon} source={require('../../asset/images/recovered.png')} />

              <CustomText>{recovered}</CustomText>
            </View>
            <View style={styles.infoContainer}>
              <Image style={styles.icon} source={require('../../asset/images/death.png')} />

              <CustomText>{deaths}</CustomText>
            </View>
          </View>
        }
        chevron={styles.chevron}
      />
    </View>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    flexDirection: 'column',
    // maxHeight: 70,
  },
  icon: {
    width: 30,
    height: 30,
  },
  infoContainers: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  infoContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginRight: 5,
  },
  avatar: {
    borderColor: '#6a1b9a',
    borderWidth: 2,
  },
  chevron: {
    color: '#6a1b9a',
    width: 30,
    height: 30,
  },
  cardStyle: {
    borderColor: '#6a1b9a',
    borderWidth: 2,
    borderRadius: 50,
  },
});
