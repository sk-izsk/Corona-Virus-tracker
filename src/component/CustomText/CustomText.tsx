import React from 'react';
import { Text } from 'react-native';

interface Props {
  type?: 'regular-font' | 'bold-font' | 'italic-font' | 'bold-italic-font';
}

const CustomText: React.FC<Props> = ({ type = 'regular-font', children }) => {
  return <Text style={{ fontFamily: type }}>{children}</Text>;
};

export default CustomText;
