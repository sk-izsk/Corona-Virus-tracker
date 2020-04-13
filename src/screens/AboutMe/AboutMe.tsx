import { NavigationProp } from '@react-navigation/native';
import { Linking } from 'expo';
import React, { useState } from 'react';
import { Image, RefreshControl, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Center, CustomText } from '../../component/';

export interface Props {
  navigation?: NavigationProp<any>;
}

const AboutMe: React.FC<Props> = ({}) => {
  const [refreshing, setRefreshing] = useState(false);

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
    Linking.canOpenURL('https://www.instagram.com/sk_izsk/');
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />
          }>
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
              <Center style={styles.linkContainer}>
                <Image style={styles.icon} source={require('../../asset/images/github.png')} />
                <CustomText style={styles.linkText} onPress={onPressGithub}>
                  Github
                </CustomText>
              </Center>
              <Center style={styles.linkContainer}>
                <Image style={styles.icon} source={require('../../asset/images/linkedIn.png')} />
                <CustomText style={styles.linkText} onPress={onPressLinkedIn}>
                  LinkedIn
                </CustomText>
              </Center>
              <Center style={styles.linkContainer}>
                <Image style={styles.icon} source={require('../../asset/images/instagram.png')} />
                <CustomText style={styles.linkText} onPress={onPressInstagram}>
                  Instagram
                </CustomText>
              </Center>
              <Center style={styles.linkContainer}>
                <Image style={styles.icon} source={require('../../asset/images/twitter.png')} />
                <CustomText style={styles.linkText} onPress={onPressTwitter}>
                  Twitter
                </CustomText>
              </Center>
              <Center style={styles.linkContainer}>
                <Image style={styles.icon} source={require('../../asset/images/facebook.png')} />
                <CustomText style={styles.linkText} onPress={onPressFacebook}>
                  Facebook
                </CustomText>
              </Center>
            </Center>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    height: 600,
  },

  linkText: { color: '#6a1b9a' },
  imageContainer: {
    flex: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 450,
  },
  avatar: {
    borderColor: '#6a1b9a',
    borderWidth: 2,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  icon: {
    width: 30,
    height: 30,
  },
});

export default AboutMe;
