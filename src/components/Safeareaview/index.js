import React from 'react';
import {View, ImageBackground, SafeAreaView} from 'react-native';
import StyleMSafearea from './style';

const MSafearea = ({children, viewStyle}) => {
  return (
    <SafeAreaView style={[StyleMSafearea.viewContainer, viewStyle]}>
      {children}
    </SafeAreaView>
  );
};

export default MSafearea;
