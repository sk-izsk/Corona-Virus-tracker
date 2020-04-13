import React from 'react';
import { Text } from 'react-native';

interface Props {
  type?: 'regular-font' | 'bold-font' | 'italic-font' | 'bold-italic-font';
  fontSize?: number;
  style?: any;
  onPress?: () => void;
}

const CustomText: React.FC<Props> = ({
  type = 'regular-font',
  children,
  style,
  fontSize = 20,
  onPress,
}) => {
  return (
    <Text onPress={onPress} style={[{ fontFamily: type, fontSize: fontSize }, style]}>
      {children}
    </Text>
  );
};

export default CustomText;
