import { NavigationProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { Block, Center, CustomText } from '../../component/';
import { SpecificCountryWithProvinces, WorldWiseCases2 } from '../../redux';
import { Store } from '../../redux/stores/store';
import { isArrayEmpty } from '../../utils/helper/helper';
import InfoCard from '../InfoCard/InfoCard';

export interface Props {
  name?: string;
  imageUrl?: string;
  total?: number;
  totalDeath?: number;
  recover?: number;
  newCases?: number;
  active?: number;
  tests?: number;
  critical?: number;
  navigation?: NavigationProp<any>;
}

const DetailedInfoScreen: React.FC<Props> = ({
  imageUrl,
  name,
  total,
  totalDeath,
  recover,
  newCases,
  active,
  tests,
  critical,
  navigation,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [provinces, setProvinces] = useState<string[] | undefined>();
  const countryDetails: WorldWiseCases2[] = useSelector((state: Store) => state.worldWideCases2);

  const deathRate: number | string = ((Number(totalDeath) / Number(total)) * 100).toFixed(2);
  const countryInfo: SpecificCountryWithProvinces = useSelector(
    (state: Store) => state.specificCountryInfoWithProvinces
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const specificProvince = countryDetails.filter((countryDetail: WorldWiseCases2) => {
      return (
        countryDetail.country === name &&
        countryDetail.province !== null &&
        countryDetail.province !== 'recovered'
      );
    });
    setProvinces(specificProvince as any);
    setRefreshing(false);
  }, [refreshing, countryDetails]);

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
                source={
                  imageUrl
                    ? {
                        uri: `${imageUrl}`,
                      }
                    : require('../../asset/images/world.png')
                }
                containerStyle={styles.avatar}
              />
              <CustomText fontSize={40} type='bold-font'>
                {name}
              </CustomText>
            </Center>
            <View style={styles.infoDataContainer}>
              <View style={styles.infoContainer}>
                <Block
                  style={styles.block}
                  imageSrc={require('../../asset/images/corona-virus-icon.png')}
                  description='Total'
                  data={total}
                />
                <Block
                  imageSrc={require('../../asset/images/death.png')}
                  description='Total death'
                  data={totalDeath}
                />
              </View>
              <View style={styles.infoContainer}>
                <Block
                  style={styles.block}
                  description='Total recover'
                  imageSrc={require('../../asset/images/recovered.png')}
                  data={recover}
                />
                <Block
                  imageSrc={require('../../asset/images/sick.png')}
                  description='New cases'
                  data={newCases}
                />
              </View>
              <View style={styles.infoContainer}>
                <Block
                  style={styles.block}
                  description='Active'
                  imageSrc={require('../../asset/images/active-sick.png')}
                  data={active}
                />
                <Block
                  imageSrc={require('../../asset/images/medical-test.png')}
                  description='Tests'
                  data={tests}
                />
              </View>
              <View style={styles.infoContainer}>
                <Block
                  style={styles.block}
                  description='Critical'
                  imageSrc={require('../../asset/images/critical.png')}
                  data={critical}
                />
                <Block
                  imageSrc={require('../../asset/images/death-rate.png')}
                  description='Death rate'
                  data={`${deathRate} %`}
                />
              </View>
            </View>
            <View>
              {provinces !== undefined &&
                !isArrayEmpty(provinces as any) &&
                provinces?.map((province: WorldWiseCases2 | any) => {
                  return (
                    <View style={styles.provinceContainer} key={province}>
                      <InfoCard
                        avatarRequired={false}
                        name={province.province}
                        cases={province.stats.confirmed}
                        recovered={province.stats.recovered}
                        deaths={province.stats.deaths}
                      />
                    </View>
                  );
                })}
            </View>
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
  },
  buttonContainer: {
    borderRadius: 50,
    width: 150,
  },
  button: {
    borderRadius: 50,
  },
  buttonFont: {
    fontFamily: 'bold-font',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 250,
  },
  avatar: {
    borderColor: '#6a1b9a',
    borderWidth: 2,
  },
  infoDataContainer: {
    flex: 3,
    display: 'flex',
    justifyContent: 'space-evenly',
    height: 500,
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
  provinceContainer: {
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default DetailedInfoScreen;
