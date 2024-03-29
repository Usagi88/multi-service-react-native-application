import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  useWindowDimensions,
  TouchableNativeFeedback,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import BannerAmount from '../../../common/BannerAmount';

import {TabView, SceneMap} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';

import DhiraaguCashIn from './DhiraaguCashIn';
import OoredooCashIn from './OoredooCashIn';
import NavbarWithBackBtn from '../../../common/NavbarWithBackBtn';
import { useTranslation } from 'react-i18next';

const FirstRoute = () => {
  return <DhiraaguCashIn />;
};

const SecondRoute = () => {
  return <OoredooCashIn />;
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const CashIn = ({route}) => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;
  const {tabId} = route.params;

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(tabId);
  const [routes] = useState([
    {key: 'first', title: 'Dhiraagu'},
    {key: 'second', title: 'Ooredoo'},
  ]);

  //set tab when page opened
  useEffect(() => {
    setIndex(tabId);
  }, []);

  const styles = EStyleSheet.create({
    column: {
      flex: 1,
      backgroundColor: 'white',
    },
    tabBar: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingTop: 5,
      paddingBottom: 10,
    },
    tabItemOne: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 50,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      left: 10,
    },
    tabItemTwo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 50,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      right: 10,
    },
    tabItemActive: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 50,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      left: 10,
      zIndex: 2,
    },
    tabItemActiveTwo: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 50,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      right: 10,
      zIndex: 2,
    },
    tabTitle: {
      fontSize: 14,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
  });

  const _renderTabBar = () => {
    return (
      <View style={styles.tabBar}>
        <TouchableNativeFeedback
          onPress={() => setIndex(0)}
          useForeground={true}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            colors={index == 0 ? ['#3AC170', '#25BFA3'] : ['white', 'white']}
            style={index == 0 ? styles.tabItemActive : styles.tabItemOne}>
            <Text
              style={{
                ...styles.tabTitle,
                color: index == 0 ? 'white' : 'black',
              }}>
              {t('dhiraagu')}
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => setIndex(1)}
          useForeground={true}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            colors={index == 1 ? ['#3AC170', '#25BFA3'] : ['white', 'white']}
            style={index == 1 ? styles.tabItemActiveTwo : styles.tabItemTwo}>
            <Text
              style={{
                ...styles.tabTitle,
                color: index == 1 ? 'white' : 'black',
              }}>
              {t('ooredoo')}
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return (
    <>
      <NavbarWithBackBtn />
      <View style={styles.column}>
        <BannerAmount />
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={_renderTabBar}
        />
      </View>
    </>
  );
};

export default CashIn;


