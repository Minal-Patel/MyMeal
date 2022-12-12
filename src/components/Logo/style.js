import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/color";

//Constants

const styles = StyleSheet.create({
  viewContainer: {
    width:60,
    height: 60,
    borderRadius : 60/2,
    backgroundColor:COLORS.WHITE[100],
    alignItems:"center",
    justifyContent:"center"
  },
  imagestyle :{
    width:66,height:44
  }
  
});
export default styles;
