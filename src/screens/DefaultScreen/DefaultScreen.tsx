import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export interface Props {
  navigation: any;
}

const DefaultScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <Button title='press to go' onPress={() => navigation.navigate('boot up screen')} />
    </View>
  );
};

export default DefaultScreen;

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
