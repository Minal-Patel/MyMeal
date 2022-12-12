import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {View} from 'react-native';
import MSafearea from '../../components/Safeareaview';
import {Icon} from '@rneui/themed';
import MText from '../../components/Text';
import styles from './style';
import {COLORS} from '../../constant/color';
import {
  breakfast,
  foodtype,
  option,
  resturant,
  search,
} from '../../constant/json';
import MTouchable from '../../components/TouchableOpacity';
import MImage from '../../components/Image';
import {IMG} from '../../constant/image';
import {STRING} from '../../constant/strings';
import {useState} from 'react';
import {useEffect} from 'react';

const Home = () => {
  const [day, setDay] = useState('GM');
  const [daydata, setDaydata] = useState(breakfast);

  const WIDTH = Dimensions.get('screen').width;

  const per = (8 * WIDTH) / 100;
  console.log('$$$$$$', WIDTH, per);

  useEffect(() => {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      console.log('good morning');
      setDay('Breakfast');
    } else if (curHr < 18) {
      console.log('good afternoon');
      setDay('Lunch');
    } else {
      console.log('good evening');
      setDay('Dinner');
    }
  }, []);
  // const restcard = (item, index) => {
  //   const offer = item.offerprice;

  //   return (
  //     <TouchableOpacity style={styles.cardContainer}>
  //       <MImage src={item.cover} imageStyle={styles.coverStyle} />
  //       <View style={styles.carddetail}>
  //         <View style={styles.nameView}>
  //           <MText label={item.name} labelStyle={styles.nametext} />
  //           <MText label={item.type} labelStyle={styles.typetext} />

  //           <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
  //             <MText
  //               label={`₹${item.price}`}
  //               labelStyle={{
  //                 ...styles.pricetext,
  //                 size: offer !== 0 ? 12 : 16,
  //                 textDecorationLine: offer !== 0 ? 'line-through' : 'none',
  //                 color: offer !== 0 ? COLORS.BLACK[100] : COLORS.orange[100],
  //               }}
  //             />
  //             {offer !== 0 && (
  //               <MText
  //                 label={`  ₹${item.offerprice}`}
  //                 labelStyle={styles.offerpricetext}
  //               />
  //             )}
  //           </View>
  //         </View>

  //         <View style={styles.rateingcontainer}>
  //           <View style={styles.rateView}>
  //             <MText label={item.rating} labelStyle={styles.ratetext} />
  //             <Icon
  //               name="star"
  //               type="antdesign"
  //               size={14}
  //               color={COLORS.WHITE[100]}
  //             />
  //           </View>

  //           <View style={styles.fireView}>
  //             <MImage src={IMG.FIRE} imageStyle={styles.fireimage} />
  //             <MText label={`${item.cal} cal`} labelStyle={styles.caltext} />
  //           </View>
  //         </View>
  //       </View>
  //       <MText
  //         label={item.desc}
  //         labelStyle={styles.desctext}
  //         viewStyle={styles.descView}
  //       />
  //       {item.offer !== null && (
  //         <View style={styles.offerView}>
  //           <View style={{width: '100%'}}>
  //             <MImage
  //               src={IMG.OFFER}
  //               imageStyle={styles.offerImage}
  //               viewStyle={styles.offerimageView}
  //             />
  //             <MText
  //               label={item.tag}
  //               labelStyle={styles.offertag}
  //               viewStyle={styles.offertagView}
  //             />
  //           </View>

  //           <View style={{width: '100%', marginTop: 10}}>
  //             <MImage
  //               src={IMG.OFFER}
  //               imageStyle={styles.offerImage}
  //               viewStyle={styles.offerimageView}
  //             />
  //             <MText
  //               label={item.offer}
  //               labelStyle={styles.offertag}
  //               viewStyle={styles.offertagView}
  //             />
  //           </View>
  //         </View>
  //       )}
  //     </TouchableOpacity>
  //   );
  // };
  return (
    <MSafearea viewStyle={styles.viewContainer}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="home" type="octicon" />

          <View style={{marginLeft: '5%', width: '80%'}}>
            <MText label={'Home'} labelStyle={styles.homeStyle} />
            <MText
              label={'21-42-34, Banjara Hills, Hyder....'}
              labelStyle={styles.addtesstext}
            />
          </View>

          <Icon name="heart" type="entypo" color={COLORS.GREEN[300]} />
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchView}>
            <Icon name="search" type="ionicon" size={20} />
            <TextInput
              placeholder="Search food nearby"
              style={styles.inputtext}
            />
          </View>

          <TouchableOpacity style={styles.filterView}>
            <Icon
              name="filter"
              type="font-awesome"
              color={COLORS.GREEN[100]}
              size={15}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.mainContainer}>
          <ScrollView style={{flex: 1}}>
            <View style={{flex: 1}}>
              {/* option View */}
              <View style={styles.optionContainer}>
                {option.map((item, i) => {
                  return (
                    <View style={styles.optionView}>
                      <MImage src={item.img} imageStyle={styles.optionImage} />
                      <MText
                        label={item.title}
                        labelStyle={styles.optionText}
                        viewStyle={styles.optiontextView}
                      />
                    </View>
                  );
                })}
              </View>

              {/* timeView */}

              <View style={{flex: 1, alignItems: 'center'}}>
                <View
                  style={{
                    ...styles.timeContainer,
                    backgroundColor:
                      day == 'Breakfast'
                        ? COLORS.YELLOW[100]
                        : day == 'Lunch'
                        ? COLORS.BLUE[200]
                        : COLORS.GREEN[400],
                  }}>
                  <MText
                    label={`${STRING.HOME.LOOKING}`}
                    labelStyle={{...styles.timeText}}
                    viewStyle={styles.timeTextView}>
                    <MText
                      label={`${day} ?`}
                      labelStyle={{...styles.timeText2}}
                      viewStyle={styles.timeTextView2}
                    />
                  </MText>
                  <MText
                    label={STRING.HOME.TASTE}
                    labelStyle={styles.timetestText}
                  />

                  <View style={{...styles.restcardView, marginLeft: -per}}>
                    <ScrollView horizontal={true}>
                      <View style={styles.cardContainer}>
                        {breakfast.map((res, i) => {
                          if (res.tag == day)
                            return (
                              <View style={styles.cardView}>
                                <MImage
                                  src={res.cover}
                                  imageStyle={styles.coverStyle}
                                  viewStyle={styles.coverView}
                                />

                                <MText
                                  label={res.name}
                                  labelStyle={styles.resName}
                                />

                                <MText
                                  label={res.resname}
                                  labelStyle={styles.resDesc}
                                />

                                <View
                                  style={{
                                    position: 'absolute',
                                    bottom: -10,
                                    left: 10,
                                    flexDirection: 'row',
                                    alignItems: 'flex-end',
                                    elevation: 10,
                                  }}>
                                  <MText
                                    label={`₹${res.price}`}
                                    labelStyle={
                                      res?.offer?.name !== undefined
                                        ? {
                                            ...styles.pricetext,
                                            textDecorationLine: 'line-through',
                                          }
                                        : styles.offerprice
                                    }
                                  />
                                  {res?.offer?.name !== undefined && (
                                    <MText
                                      label={` ₹${res.price}`}
                                      labelStyle={styles.offerprice}
                                    />
                                  )}
                                </View>
                              </View>
                            );
                        })}
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </View>

              {/* Food type */}

              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  padding: 10,
                  justifyContent: 'space-between',
                }}>
                {foodtype.map((food, i) => {
                  return (
                    <View
                      style={{width: '25%', padding: 10, alignItems: 'center'}}>
                      <MImage
                        src={food.img}
                        imageStyle={styles.ftypeimage}
                        viewStyle={styles.ftypeimageView}
                      />
                      <MText label={food.title} labelStyle={styles.ftitle} />
                    </View>
                  );
                })}
              </View>

              {/* order again */}
            </View>
          </ScrollView>
        </View>
      </View>

      {/* <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchView}>
            <Icon name="search" type="evilicon" />
            <TextInput placeholder="HEllo" style={styles.inputtext} />
          </View>

          <View style={styles.filterView}>
            <Icon name="filter" type="font-awesome" color={COLORS.GREEN[100]} />
          </View>
        </View>
        <View style={styles.popularView}>
          <ScrollView horizontal={true}>
            {search.map((item, i) => {
              return (
                <MTouchable viewStyle={styles.polularsearchView}>
                  <MText label={item.name} labelStyle={styles.popularText} />
                </MTouchable>
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.bottomView}>
          <FlatList
            data={resturant}
            style={{width: '100%'}}
            contentContainerStyle={{
              width: '100%',
              alignItems: 'center',
              marginTop: 25,
            }}
            renderItem={({item, index}) => restcard(item, index)}
          />
        </View>
      </View> */}
    </MSafearea>
  );
};

export default Home;
