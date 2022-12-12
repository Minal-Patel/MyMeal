import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant/color';

//Constants

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.GRAY[100],
  },
  logoView: {
    height: '30%',
    width: '100%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE[100],
  },
  logoStyle: {
    width: 150,
    height: 150,
  },
  tabView: {
    position: 'absolute',
    bottom: 0,
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tablable: {
    fontSize:15,
    fontWeight:"600",
    color:COLORS.BLACK[100]
  },
  tablableView: {
    width: '40%',
    alignItems: 'center',
    borderBottomWidth: 2.5,
    borderBottomColor:COLORS.PRIMARY.MAIN,
    paddingBottom: 7,
  },
});
export default styles;
