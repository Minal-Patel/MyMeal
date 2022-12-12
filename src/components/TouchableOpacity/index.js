import React from "react";
import { View, TouchableOpacity } from "react-native";
import StyleAcTouchable from "./style";

const MTouchable = ({ children, viewStyle, handlepress ,props}) => {
  return (
    <TouchableOpacity
      style={[StyleAcTouchable.viewContainer, viewStyle]}
      onPress={handlepress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default MTouchable;
