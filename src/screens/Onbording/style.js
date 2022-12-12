import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant/color';

//Constants

const styles = StyleSheet.create({
  viewContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.PRIMARY.MAIN,
  },
  safeArea: {backgroundColor: COLORS.PRIMARY.MAIN},
  skipView: {
    alignItems: 'flex-end',
    width: '100%',
    paddingRight: '10%',
    paddingTop: '5%',
  },
  skipText: {fontSize: 14, fontWeight: '400', color: COLORS.WHITE[100]},

  swipContainer: {alignItems: 'center', justifyContent: 'center'},
  swipView: {flex: 1, alignItems: 'center', marginTop: 15},
  titleStyle: {
    fontSize: 45,
    textAlign: 'center',
    color: COLORS.WHITE[100],
    fontWeight: '200',
  },
  titleView: {width: '80%', alignItems: 'center'},
  imageStyle: {width: '80%', height: 250, resizeMode: 'stretch'},
  imageView: {width: '80%', height: '50%'},
  buttonView:{width:"70%",backgroundColor:COLORS.WHITE[100],borderRadius:25,height:55},
  buttontextView:{fontSize:15,color:COLORS.PRIMARY.MAIN,fontWeight:"600"}
});
export default styles;
