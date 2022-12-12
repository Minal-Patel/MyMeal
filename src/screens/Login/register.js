import React from 'react';
import {useState} from 'react';
import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import MButton from '../../components/Button';
import MImage from '../../components/Image';
import MText from '../../components/Text';
import MTouchable from '../../components/TouchableOpacity';
import {COLORS} from '../../constant/color';
import {IMG} from '../../constant/image';
import {STRING} from '../../constant/strings';
import { authSetup } from '../../store/reducers/appsetup';
export const Registercomponent = () => {
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const [mobile, setMobile] = useState('');

  const dispatch = useDispatch();
  return (
    <ScrollView style={styles.viewContainer}>
      <View>
        <View style={styles.titleView}>
          <MText
            label={STRING.AUTH.REGISTER}
            //viewStyle={styles.titleView}
            labelStyle={styles.titleText}
          />
          <View style={styles.imageContainer}>
            <MTouchable viewStyle={styles.imageView}>
              <MImage src={IMG.GOOGLE} imageStyle={styles.imageStyle} />
            </MTouchable>
            <MTouchable viewStyle={styles.imageView}>
              <MImage src={IMG.FB2} imageStyle={styles.imageStyle} />
            </MTouchable>
          </View>
        </View>
        <View style={{...styles.inputView, marginTop: 25}}>
          <TextInput
            placeholder={STRING.AUTH.FULLNAMEPL}
            value={fullname}
            onChangeText={text => setFullname(text)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            placeholder={STRING.AUTH.MOBILENUMBERPL}
            value={mobile}
            onChangeText={text => setMobile(text)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            placeholder={STRING.AUTH.PASSWORDPL}
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            placeholder={STRING.AUTH.CONFIRMPASSPL}
            value={confirmpass}
            onChangeText={text => setConfirmpass(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <MButton viewStyle={styles.signupView} label={STRING.AUTH.SIGNUP} />

          <MTouchable
            handlepress={() =>  dispatch(authSetup(STRING.BUTTON.LOGIN))}
            viewStyle={styles.accountView}>
            <MText
              label={STRING.AUTH.HAVEACCOUNT}
              labelStyle={styles.accounttext}
              numline={2}
            />
          </MTouchable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    width: '80%',
    marginTop: 15,
  },
  titleView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  titleText: {
    fontSize: 30,
    color: COLORS.PRIMARY.MAIN,
    fontWeight: 'bold',
  },
  imageStyle: {
    width: 22,
    height: 22,
  },
  imageView: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE[100],
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowColor: 'black',
    shadowRadius: 10,
    elevation: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
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
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  signupView: {
    width: '60%',
    borderRadius: 25,
    backgroundColor: COLORS.RED[100],
  },
  accounttext: {
    width: '100%',
    fontSize: 15,
    color: COLORS.GRAY[200],
  },
  accountView: {
    flexWrap: 'wrap',
    width: '38%',
    marginLeft: '2%',
  },
});
