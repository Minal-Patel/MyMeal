import React from 'react';
import {View, Text} from 'react-native';
import StyleMText from './style';

const MText = ({label, labelStyle, viewStyle, children, numline}) => {
  return (
    <View style={[StyleMText.viewContainer, viewStyle]}>
      <Text style={[StyleMText.labelText, labelStyle]} numberOfLines={numline}>
        {label}
       
      </Text>
      {children}
      
    </View>
  );
};

export default MText;
