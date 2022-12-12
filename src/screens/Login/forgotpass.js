import React from 'react';
import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import MButton from '../../components/Button';
import MImage from '../../components/Image';
import MText from '../../components/Text';
import MTouchable from '../../components/TouchableOpacity';
import {COLORS} from '../../constant/color';
import {IMG} from '../../constant/image';
import {STRING} from '../../constant/strings';
import {Icon} from '@rneui/themed';
import { useDispatch } from 'react-redux';
import { authSetup } from '../../store/reducers/appsetup';
export const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch()
  const handleButton = () =>{
    console.log("Under production ");
  }
  return (
    <View style={styles.viewContainer}>
      <MTouchable handlepress={() =>  dispatch(authSetup(STRING.BUTTON.LOGIN))}>
        <Icon name="left" type="antdesign" size={20} color={COLORS.GRAY[200]} />
      </MTouchable>

      <MText
        label={STRING.AUTH.FORGOT}
        labelStyle={styles.forgotText}
        viewStyle={styles.forgotView}
      />
      <MText label={STRING.AUTH.PASSWORD} labelStyle={styles.forgotText} />

      <View style={styles.inputView}>
        <Icon
          name="email"
          type="material-community"
          size={20}
          color={COLORS.GRAY[200]}
        />
        <TextInput
          placeholder={STRING.AUTH.ENTERMAIL}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <MText
        label={STRING.AUTH.RESETMES}
        labelStyle={styles.resetText}
        viewStyle={styles.forgotView}
      />

      <MText
        label={STRING.AUTH.SENDCODE}
        labelStyle={styles.sendtext}
        viewStyle={styles.forgotView}
      />

      <MButton viewStyle={styles.buttonView} handleButton={handleButton}>
        <Icon name='caretright'
                type='antdesign'
                color={COLORS.WHITE[100]}/>
      </MButton>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    width: '80%',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  forgotText: {
    fontSize: 30,
    color: COLORS.RED[100],
    fontWeight: '600',
    textAlign: 'left',
  },
  forgotView: {
    marginTop: 15,
  },
  inputView: {
    height: 55,
    width: '100%',
    marginTop: 25,
    flexDirection: 'row',
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: COLORS.WHITE[100],
    alignItems: 'center',
  },
  resetText: {
    fontSize: 12,
    color: COLORS.GRAY[300],
  },
  sendtext: {
    fontSize: 25,
    color: COLORS.GRAY[400],
    fontWeight: 'bold',
    marginTop: 15,
  },
  buttonView: {
    position: 'absolute',
    bottom: 25,
    right: 15,
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
  },
});
