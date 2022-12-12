import React from 'react';
import {View, Text} from 'react-native';
import MButton from '../../components/Button';
import Logo from '../../components/Logo';
import MText from '../../components/Text';
import {STRING} from '../../constant/strings';
import styles from './style';
import {Icon} from '@rneui/themed';
import {COLORS} from '../../constant/color';
import { useNavigation } from '@react-navigation/native';
import { NAVKEY } from '../../constant/pageKey';
const Welcome = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.viewContainer}>
      <Logo viewStyle={styles.logoView} imageStyle={styles.logoStyle} />

      <MText label={STRING.WELCOME.WELCOME} labelStyle={styles.welcomeText} />
      <MText label={STRING.WELCOME.NAME} labelStyle={styles.welcomeText} />

      <MText
        label={STRING.WELCOME.UNLOCK}
        labelStyle={styles.unlocktext}
        viewStyle={styles.unlockView}
      />

      <View style={styles.bottomView}>
        <MText
          label={STRING.WELCOME.SELECTLOCATION}
          labelStyle={styles.selecttext}
        />

        <MButton viewStyle={styles.buttonView} handleButton={()=>navigation.navigate(NAVKEY.TABNAV , {screen : NAVKEY.HOME})}>
          <Icon name="location" type="entypo" color={COLORS.GRAY[200]} />
          <MText
            label={STRING.WELCOME.LOCATEME}
            viewStyle={styles.buttontextview}
            labelStyle={styles.buttontext}
          />
        </MButton>

        <MButton viewStyle={styles.buttonView}>
          <Icon name="location" type="evilicon" color={COLORS.GRAY[200]} />
          <MText
            label={STRING.WELCOME.DELIVRYLOCATION}
            viewStyle={styles.buttontextview}
            labelStyle={styles.buttontext}
          />
        </MButton>
      </View>
    </View>
  );
};

export default Welcome;
