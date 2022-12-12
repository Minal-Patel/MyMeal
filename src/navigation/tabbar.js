import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {tabbar} from '../constant/json';
import MImage from '../components/Image';
import MText from '../components/Text';
import {COLORS} from '../constant/color';
import MTouchable from '../components/TouchableOpacity';

export const Tabbar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.tabContainer}>
      {tabbar.map((tab, i) => {
        return (
          <MTouchable viewStyle={styles.tabView}>
            <MImage
              src={tab.img}
              viewStyle={styles.imageView}
              imageStyle={styles.imageStyle}
            />
          </MTouchable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: COLORS.WHITE[100],
    width: '100%',
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imageStyle: {
    width: 25,
    height: 25,
  },
  imageView: {},
});
