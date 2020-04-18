import { NavigationProp, RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { DetailedInfoScreen } from '../../component';
import { Continent as ContinentProps, Store, WorldWideCases } from '../../redux';

interface Props {
  navigation?: NavigationProp<any>;
  route?: RouteProp<any, any> | any;
}

const Continent: React.FC<Props> = ({ navigation, route }) => {
  const worldWideCases: WorldWideCases = useSelector((state: Store) => state.worldWideCases);
  const [continentDetails, setContinentDetails] = useState<ContinentProps>();
  const continentParam: ContinentProps = route?.params?.continent;

  useEffect(() => {
    setContinentDetails(continentParam);
  }, [continentParam]);

  console.log(continentDetails);

  return (
    <View>
      <DetailedInfoScreen
        name={continentDetails?.continent}
        total={continentDetails?.cases}
        totalDeath={continentDetails?.deaths}
        recover={continentDetails?.recovered}
        newCases={continentDetails?.todayCases}
        active={continentDetails?.active}
        tests={0}
        critical={continentDetails?.critical}
        navigation={navigation}
      />
    </View>
  );
};

export default Continent;
