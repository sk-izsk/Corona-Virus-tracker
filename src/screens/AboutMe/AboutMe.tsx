import { NavigationProp } from '@react-navigation/native';
import { Linking } from 'expo';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Block, Center, CustomText } from '../../component/';

export interface Props {
  navigation?: NavigationProp<any>;
}

const AboutMe: React.FC<Props> = ({}) => {
  const onPressGithub = () => {
    Linking.openURL('https://github.com/sk-izsk');
  };

  const onPressFacebook = () => {
    Linking.openURL('https://www.facebook.com/Sk.iZsk');
  };

  const onPressLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/skizsk/');
  };

  const onPressTwitter = () => {
    Linking.openURL('https://twitter.com/Sk_iZsk');
  };

  const onPressInstagram = () => {
    Linking.openURL('https://www.instagram.com/sk_izsk/');
  };

  const onPressTelegram = () => {
    Linking.openURL('https://t.me/sk_izsk');
  };

  return (
    <View style={styles.container}>
      <Center style={styles.imageContainer}>
        <Avatar
          rounded
          size='xlarge'
          source={require('../../asset/images/izsk.jpg')}
          containerStyle={styles.avatar}
        />
        <CustomText fontSize={40} type='bold-font'>
          Zeeshan (iZsk)
        </CustomText>
        <CustomText> 🏠 Montreal, Canada </CustomText>
        <CustomText> 🎮 Gamer</CustomText>
        <CustomText> 💻 Software Developer</CustomText>
        <CustomText> 📷 hobbyist photographer</CustomText>
        <CustomText>Links</CustomText>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={{ flex: 1 }} onPress={onPressGithub}>
            <Block
              style={styles.block}
              description={null}
              imageSrc={require('../../asset/images/github.png')}
              data='Github'
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} onPress={onPressLinkedIn}>
            <Block
              imageSrc={require('../../asset/images/linkedIn.png')}
              description={null}
              data='LinkedIn'
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={{ flex: 1 }} onPress={onPressInstagram}>
            <Block
              style={styles.block}
              description={null}
              imageSrc={require('../../asset/images/instagram.png')}
              data='Instagram'
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} onPress={onPressTwitter}>
            <Block
              imageSrc={require('../../asset/images/twitter.png')}
              description={null}
              data='Twitter'
            />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity style={{ flex: 1 }} onPress={onPressFacebook}>
            <Block
              style={styles.block}
              description={null}
              imageSrc={require('../../asset/images/facebook.png')}
              data='Facebook'
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1 }} onPress={onPressTelegram}>
            <Block
              imageSrc={require('../../asset/images/telegram.png')}
              description={null}
              data='Telegram'
            />
          </TouchableOpacity>
        </View>
      </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    height: 500,
  },

  linkText: { color: '#6a1b9a' },
  imageContainer: {
    flex: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 400,
  },
  avatar: {
    borderColor: '#6a1b9a',
    borderWidth: 2,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 400,
  },

  icon: {
    width: 30,
    height: 30,
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
});

export default AboutMe;
