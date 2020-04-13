import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import Center from '../Center/Center';
import CustomText from '../CustomText/CustomText';

interface Props {
  name?: string;
  cases?: number;
  deaths?: number;
  recovered?: number;
  countryFlag?: string;
  avatarRequired?: boolean;
  countryName?: string;
}

const InfoCard: React.FC<Props> = ({
  name,
  cases,
  deaths,
  recovered,
  countryFlag,
  avatarRequired = true,
  countryName,
}) => {
  return (
    <View>
      <ListItem
        title={
          <Center>
            <CustomText type='bold-font'>{name}</CustomText>
          </Center>
        }
        containerStyle={styles.cardStyle}
        leftAvatar={
          avatarRequired
            ? {
                source: {
                  uri: `${countryFlag}`,
                },
                size: 'medium',
                containerStyle: { borderColor: '#6a1b9a', borderWidth: 2 },
              }
            : undefined
        }
        subtitle={
          <View style={styles.infoContainers}>
            <View style={styles.infoContainer}>
              <Center>
                <Image
                  style={styles.icon}
                  source={require('../../asset/images/corona-virus-icon.png')}
                />

                <CustomText>{cases}</CustomText>
              </Center>
            </View>
            <View style={styles.infoContainer}>
              <Center>
                <Image style={styles.icon} source={require('../../asset/images/recovered.png')} />
                <CustomText>{recovered}</CustomText>
              </Center>
            </View>
            <View style={styles.infoContainer}>
              <Center>
                <Image style={styles.icon} source={require('../../asset/images/death.png')} />
                <CustomText>{deaths}</CustomText>
              </Center>
            </View>
          </View>
        }
        chevron={styles.chevron}
      />
    </View>
  );
};

export default InfoCard;

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
    flexDirection: 'column',
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
    height: 120,
  },
});
