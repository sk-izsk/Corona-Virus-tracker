import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import Center from '../Center/Center';
import CustomText from '../CustomText/CustomText';

export interface Props {
  imageSrc?: ImageSourcePropType;
  description?: string | null;
  data?: string | number;
  style?: any;
}

const Block: React.FC<Props> = ({ imageSrc, description, data, style }) => {
  return (
    <Center style={[styles.blockContainer, style]}>
      <Center style={styles.imageContainer}>
        <Image style={styles.image} source={imageSrc as ImageSourcePropType} />
      </Center>
      {description === null && (
        <View style={styles.dataContainer}>
          <CustomText style={styles.secondaryDataStyle} type='bold-font'>
            {data}
          </CustomText>
        </View>
      )}
      {description !== null && (
        <View style={styles.dataContainer}>
          <CustomText style={{ flex: 1, textAlign: 'center' }} type='bold-font'>
            {description}
          </CustomText>

          <CustomText style={{ flex: 1, textAlign: 'center' }}>{data}</CustomText>
        </View>
      )}
    </Center>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
  imageContainer: {
    flex: 2,
    borderRightColor: '#6a1b9a',
    borderRightWidth: 2,
  },
  blockContainer: {
    flexDirection: 'row',
    borderColor: '#6a1b9a',
    borderWidth: 2,
    width: 150,
    maxHeight: 150,
    borderRadius: 6,
  },
  dataContainer: {
    flex: 4,
  },

  secondaryDataStyle: {
    textAlign: 'center',
  },
});

export default Block;
