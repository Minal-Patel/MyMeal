import React from 'react';
import {View, Text} from 'react-native';
import {IMG} from '../../constant/image';
import MImage from '../Image';
import styles from './style';

const Logo = ({viewStyle, imageStyle}) => {
  return (
    <View style={[styles.viewContainer, viewStyle]}>
      <MImage src={IMG.LOGO} imageStyle={[styles.imagestyle, imageStyle]} />
    </View>
  );
};

export default Logo;
