import React from "react";
import { View, ImageBackground } from "react-native";
import StyleMImageBack from "./style";

const MImageBack = ({ children, src, viewStyle, imageStyle }) => {
  return (
    <View style={[StyleMImageBack.viewContainer, viewStyle]}>
      <ImageBackground
        source={src}
        style={[StyleMImageBack.imageContain, imageStyle]}
      >
        {children}
      </ImageBackground>
    </View>
  );
};

export default MImageBack;
