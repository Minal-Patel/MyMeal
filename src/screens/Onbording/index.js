import React from 'react';
import {View} from 'react-native';
import MSafearea from '../../components/Safeareaview';
import styles from './style';
import Swiper from 'react-native-swiper';
import MTouchable from '../../components/TouchableOpacity';
import MText from '../../components/Text';
import {STRING} from '../../constant/strings';
import Logo from '../../components/Logo';
import {ONBOARDINGJSON} from '../../constant/json';
import MImage from '../../components/Image';
import { COLORS } from '../../constant/color';
import MButton from '../../components/Button';

const Onbording = () => {
  return (
    <MSafearea viewStyle={styles.safeArea}>
      <View style={styles.viewContainer}>
        <MTouchable viewStyle={styles.skipView}>
          <MText label={STRING.BUTTON.SKIP} labelStyle={styles.skipText} />
        </MTouchable>

        <Logo />
        <Swiper style={styles.swipContainer} activeDotColor={COLORS.WHITE[100]}>
          {ONBOARDINGJSON.map((onboard, i) => {
            return (
              <View style={styles.swipView}>
                <MText
                  label={onboard.title}
                  labelStyle={{
                    ...styles.titleStyle,
                    fontSize: i == 1 ? 35 : 45,
                  }}
                  viewStyle={styles.titleView}
                />

                <MImage
                  src={onboard.image}
                  imageStyle={styles.imageStyle}
                  viewStyle={styles.imageView}
                />

                {i == 2 && 
                <MButton label={STRING.BUTTON.GETSTART}
                        viewStyle={styles.buttonView}
                        labelStyle={styles.buttontextView}/>
                }
              </View>
            );
          })}
        </Swiper>
      </View>
    </MSafearea>
  );
};

export default Onbording;
