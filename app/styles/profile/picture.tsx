import { ImageStyle, ViewStyle } from "react-native";
import { setTheme } from "../theme";

export const card: ViewStyle = {
    position: "absolute",
    top: "5%",
    height: "90.0%",
    width: "95%",
    alignSelf: "center",
    borderRadius: 33,
    borderWidth: 4,
    borderColor: setTheme.primary,
  };
  export const picture: ImageStyle = {
    height: "100%",
    width: "100%",
    borderRadius: 30,
    backgroundColor: setTheme.SecondaryContainer
  };