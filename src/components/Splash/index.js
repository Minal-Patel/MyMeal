import React, {View} from 'react-native';
import {IMG} from '../../constant/image';
import MImage from '../Image';
import styles from './style';

export const Splash = () => {
  return (
    <MImage
      src={IMG.SPLASH}
      imageStyle={styles.imageStyle}
      viewStyle={styles.viewContainer}
    />
  );
};
