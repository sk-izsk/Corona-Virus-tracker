import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';

const BootUp: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    bootUpContainer: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: `${theme.colors?.primary}`,
      width: '100%',
    },
  });
  return (
    <View style={styles.bootUpContainer}>
      <Image source={require('../../asset/images/corona-virus-icon.png')} />
    </View>
  );
};

export default BootUp;
