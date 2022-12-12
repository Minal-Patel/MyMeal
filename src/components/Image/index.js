import React from "react";
import { View, Image } from "react-native";
import StyleMImage from "./style";

const MImage = ({ src, imageStyle, viewStyle }) => {
  return (
    <View style={[StyleMImage.viewContainer, viewStyle]}>
      <Image source={src} style={[StyleMImage.imageContainer, imageStyle]} />
    </View>
  );
};

export default MImage;
