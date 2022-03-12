import React from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navbar from '../common/Navbar';

let {height, width} = Dimensions.get('window');

const About = () => {
  return (
    <>
      <Navbar />
      <ScrollView>
        <View style={styles.column}>
          <View style={styles.imageWrapper}>
            <Image
              style={styles.image}
              source={require('../../assets/images/fahipay-logo.png')}
            />
            <View style={styles.divider} />
            <View style={{alignItems: 'center'}}>
              <Text style={styles.title}>FAHIPAY PVT LTD</Text>
              <Text>App Version 1.0.1</Text>
            </View>
          </View>
        
            <Text style={{marginBottom: 20}}>
              {new Date().getFullYear()} Copyright All rights reserved
            </Text>
         
        </View>
      </ScrollView>
    </>
  );
};

export default About;

const styles = EStyleSheet.create({
  column: {
    width: width,
    minHeight: height - (width > 320 ? 56 : 80),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 150,
    height: 60,
    resizeMode: 'contain',

    //backgroundColor: 'grey',
  },
  divider: {
    width: 170,
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 17,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#25BFA3',
  },
});
