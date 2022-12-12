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
    backgroundColor: COLORS.WHITE[100],
  },
  container: {
    flex: 1,
    padding: '5%',
    width: '100%',
  },
  homeStyle: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  addtesstext: {
    fontSize: 13,
    color: COLORS.GRAY[500],
  },

  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
  },
  searchView: {
    width: '85%',
    height: 35,
    borderRadius: 10,
    backgroundColor: COLORS.GRAY[600],
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  inputtext: {
    marginLeft: 5,
    alignItems: 'center',
    fontSize: 12,
  },
  mainContainer: {
    flex: 1,
    borderTopWidth: 0.7,
    marginTop: 15,
    borderTopColor: COLORS.GRAY[400],
  },
  optionContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  optionImage: {
    width: 50,
    height: 50,
  },
  optionView: {
    alignItems: 'center',
    width: '25%',
    paddingHorizontal: 5,
  },
  optionText: {
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.GRAY[500],
    fontWeight: '600',
  },
  optiontextView: {
    width: '100%',
    alignItems: 'center',
    marginTop: 5,
  },

  ///Time Container
  timeContainer: {
    width: '90%',
    height: 370,
    backgroundColor: 'pink',
    borderRadius: 15,
    padding: 15,
  },
  timeText: {
    fontSize: 15,
    color: COLORS.ORANGE[100],
  },
  timeText2: {
    fontSize: 15,
    color: COLORS.ORANGE[100],
    fontWeight: 'bold',
  },
  timetestText: {
    fontSize: 12,
    color: COLORS.GRAY[700],
    fontWeight: '400',
  },
  restcardView: {
    width: '120%',
    marginTop: 15,
  },
  cardContainer: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    margin: 5,
  },
  cardView: {
    width: 170,
    borderRadius: 25,
    backgroundColor: COLORS.WHITE[100],
    height: '100%',
    marginRight: 15,
    paddingBottom: 20,
  },
  coverStyle: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  coverView: {
    height: 133,
    width: 170,
  },
  resName: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.BLACK[100],
    marginLeft: 5,
  },
  resDesc: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.GRAY[200],
    marginLeft: 5,
    marginBottom: 20,
  },
  offerprice: {
    fontSize: 17,
    fontWeight: '400',
    color: COLORS.ORANGE[100],
    marginLeft: 5,
    marginBottom: 20,
  },

  pricetext: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.GRAY[200],
    marginLeft: 5,
    marginBottom: 20,
  },
  timeTextView: {
    width: '100%',
    flexDirection: 'row',
  },
  timeTextView2: {
    // width:"100%",
    justifyContent: 'flex-end',
  },

  //Food type
  ftypeimage: {
    height: 70,
    width: 70,
    // resizeMode: 'contain',
    borderRadius: 70 / 2,
  },
  ftitle: {
    fontSize: 12,
    marginTop: 2,
    fontWeight: '600',
    color: COLORS.GRAY[500],
    textAlign:"center"
  },

  filterView: {
    height: 35,
    borderRadius: 12,
    width: 35,
    borderWidth: 1,
    borderColor: COLORS.GRAY[400],
    alignItems: 'center',
    justifyContent: 'center',
  },
  polularsearchView: {
    paddingHorizontal: 10,
    borderWidth: 0.8,
    marginRight: 10,
    borderRadius: 10,
    paddingVertical: 3,
    borderColor: COLORS.WHITE[100],
  },
  popularView: {flexDirection: 'row', marginVertical: 25},
  popularScroll: {marginTop: 15, height: 250},
  popularText: {fontSize: 15, color: COLORS.WHITE[100]},
  bottomView: {
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: COLORS.WHITE[100],
    width: '100%',
    alignItems: 'center',
    marginTop: 5,
  },

  //Card
  // cardContainer: {
  //   width: '80%',
  //   borderRadius: 15,
  //   marginBottom: 25,
  //   backgroundColor: COLORS.WHITE[100],
  //   elevation: 10,
  // },

  carddetail: {
    flexDirection: 'row',
    width: '100%',
    margin: 10,
    marginHorizontal: 20,
    paddingHorizontal: 5,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.GRAY[400],
  },
  nameView: {
    width: '80%',
  },
  nametext: {
    fontSize: 16,
    fontWeight: '600',
  },
  typetext: {
    fontSize: 12,
    color: COLORS.GRAY[500],
  },

  offerpricetext: {
    fontSize: 15,
    color: COLORS.ORANGE[100],
    fontWeight: '600',
  },
  rateingcontainer: {
    justifyContent: 'space-around',
  },
  rateView: {
    flexDirection: 'row',
    width: 54,
    borderRadius: 15,
    padding: 4,
    backgroundColor: COLORS.GREEN[200],
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ratetext: {
    fontSize: 14,
    color: COLORS.WHITE[100],
    fontWeight: 'bold',
  },
  fireimage: {
    width: 11,
    height: 12,
  },
  fireView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  caltext: {
    fontSize: 12,
    color: COLORS.GRAY[500],
  },
  descView: {
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  desctext: {
    fontSize: 12,
    color: COLORS.GRAY[200],
  },
  offerView: {
    position: 'absolute',
    marginTop: 20,
    left: -5,
  },
  offerImage: {
    width: 95,
    height: 25,
    alignSelf: 'flex-start',
  },
  offerimageView: {
    justifyContent: 'flex-start',
  },
  offertag: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.WHITE[100],
  },
  offertagView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
