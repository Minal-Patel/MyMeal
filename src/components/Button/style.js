import React from "react";
import { StyleSheet } from "react-native";

//constants
import { COLORS } from "../../constant/color";

const StyleMButton = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    height: 48,
    backgroundColor: COLORS.PRIMARY.MAIN,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  labelContainer: {
    fontWeight: Platform.OS === "ios" ? "600" : null,
    fontSize: 18,
    color: COLORS.BLACK[100],
    alignSelf: "center",
    alignItems: "center",
  },
  rightImage: { width: 29, height: 18.17, position: "absolute", right: 15 },
  viewLable: { alignItems: "center", justifyContent: "center" },
});
export default StyleMButton;
