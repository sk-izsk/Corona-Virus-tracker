import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from 'react-native-elements';

const Hello = () => {
  const { theme }: any = useContext(ThemeContext);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: `${theme.colors.primary}`,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
  });

  return (
    <View style={styles.container}>
      <Text>hello</Text>
    </View>
  );
};

export default Hello;
