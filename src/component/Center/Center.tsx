import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  style?: any;
}

const Center: React.FC<Props> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Center;
