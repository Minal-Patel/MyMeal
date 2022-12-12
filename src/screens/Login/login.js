import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MButton from '../../components/Button';
import MImage from '../../components/Image';
import MText from '../../components/Text';
import MTouchable from '../../components/TouchableOpacity';
import {COLORS} from '../../constant/color';
import {IMG} from '../../constant/image';
import {NAVKEY} from '../../constant/pageKey';
import {STRING} from '../../constant/strings';
import {authSetup} from '../../store/reducers/appsetup';
import {userdetail} from '../../store/reducers/user';
export const Logincomponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const naivgation = useNavigation();

  const userdetails = useSelector(state => state?.user?.userdetail);
  const todos = useSelector(state => state?.todoReducer?.todos);
  console.log('@@@@@@', userdetails, todos);

  // console.log("%%%%%%%%%%",userdetails);
  const handleLogin = () => {
    naivgation.navigate(NAVKEY.HOME);
  };
  return (
    <View style={styles.viewContainer}>
      <View style={{...styles.inputView, marginTop: 25}}>
        <TextInput
          placeholder={STRING.AUTH.LOGINPLACEHOLDER}
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          placeholder={STRING.AUTH.LOGINPLACEHOLDER}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <MTouchable
        viewStyle={styles.forgotView}
        handlepress={() => dispatch(authSetup(STRING.AUTH.FORGOT))}>
        <MText
          label={STRING.AUTH.FORGOTPASS}
          labelStyle={styles.forgottext}
          viewStyle={styles.forgottextView}
        />
      </MTouchable>

      <MButton
        label={STRING.BUTTON.LOGIN}
        labelStyle={styles.logintext}
        viewStyle={styles.loginView}
        handleButton={() => handleLogin()}
      />

      <MText
        label={STRING.AUTH.OR}
        labelStyle={styles.orstyle}
        viewStyle={styles.orView}
      />

      <MButton viewStyle={styles.facebookView}>
        <MImage src={IMG.FB} imageStyle={styles.fbImage} />
        <MText label={STRING.AUTH.LOGINFACEBOOK} labelStyle={styles.fbtext} />
      </MButton>

      <MButton viewStyle={styles.googleView}>
        <MImage src={IMG.GOOGLE} imageStyle={styles.fbImage} />
        <MText label={STRING.AUTH.LOGINGOOGLE} labelStyle={styles.googletext} />
      </MButton>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
  },
  inputView: {
    height: 55,
    width: '100%',
    marginTop: 15,
    justifyContent: 'center',
    borderRadius: 15,
    paddingHorizontal: 15,
    backgroundColor: COLORS.WHITE[100],
  },
  forgotView: {
    width: '100%',
    alignSelf: 'flex-start',
    marginTop: 10,
    paddingHorizontal: 5,
  },
  forgottext: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: COLORS.PRIMARY.MAIN,
    fontWeight: '700',
  },
  forgottextView: {
    alignItems: 'flex-start',
    width: '100%',
  },
  logintext: {
    color: COLORS.WHITE[100],
    fontSize: 15,
    fontWeight: '700',
  },
  loginView: {
    marginTop: 15,
    borderRadius: 25,
  },
  orstyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  orView: {
    marginTop: 10,
  },
  facebookView: {
    borderRadius: 75,
    backgroundColor: COLORS.BLUE[100],
    marginTop: 15,
    flexDirection: 'row',
  },
  fbImage: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  fbtext: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.WHITE[100],
  },
  googleView: {
    borderRadius: 75,
    backgroundColor: COLORS.WHITE[100],
    marginTop: 15,
    flexDirection: 'row',
  },
  googletext: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.BLACK[100],
  },
});
