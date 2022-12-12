import React from 'react';
import {useState, useRef, useEffect} from 'react';
import {Text, View, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../components/Logo';
import MSafearea from '../../components/Safeareaview';
import MText from '../../components/Text';
import MTouchable from '../../components/TouchableOpacity';
import {STRING} from '../../constant/strings';
import styles from './style';
import {Logincomponent} from './login';
import {Forgotpassword} from './forgotpass';
import {Registercomponent} from './register';
import {useDispatch, useSelector} from 'react-redux';
import {authSetup} from '../../store/reducers/appsetup';
import Video from 'react-native-video';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currentstate, setCurrentstate] = useState(STRING.BUTTON.LOGIN);
  // const currentstate = useSelector(state => state?.appsetup?.authscreen);
  // console.log('$$$$$', currentstate);

  const handlesignup = () => {
    dispatch(authSetup(STRING.BUTTON.SIGNUP));
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const startValue = new Animated.Value(0);
  const endValue = 25;

  const startValue2 = new Animated.Value(50);
  const endValue2 = 25;
  const duration = 5000;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(startValue, {
        toValue: endValue,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(startValue2, {
        toValue: endValue2,
        duration: duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [startValue, endValue, duration]);
  return (
    <View style={styles.viewContainer}>
      <View style={styles.logoView}>
        <Logo imageStyle={styles.logoStyle} />
        <View style={styles.tabView}>
          <MTouchable
            viewStyle={{
              ...styles.tablableView,
              borderBottomWidth: currentstate == STRING.BUTTON.LOGIN ? 2.5 : 0,
            }}
            handlepress={() => dispatch(authSetup(STRING.BUTTON.LOGIN))}>
            <MText label={STRING.BUTTON.LOGIN} labelStyle={styles.tablable} />
          </MTouchable>
          <MTouchable
            viewStyle={{
              ...styles.tablableView,
              borderBottomWidth: currentstate == STRING.BUTTON.SIGNUP ? 2.5 : 0,
            }}
            handlepress={() => dispatch(authSetup(STRING.BUTTON.SIGNUP))}>
            <MText label={STRING.BUTTON.SIGNUP} labelStyle={styles.tablable} />
          </MTouchable>
        </View
        
        
        >
      </View>
      {currentstate === STRING.BUTTON.LOGIN && <Logincomponent />}
      {currentstate === STRING.BUTTON.SIGNUP && <Registercomponent />}
      {currentstate === STRING.AUTH.FORGOT && <Forgotpassword />}
    </View>
  );
};

export default Login;
