/** @format */
import { ViewStyle } from "react-native";
import { ImageStyle } from "expo-image";
import Constants from "expo-constants";
import { setTheme } from "./theme";

export const page: ViewStyle = {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: setTheme.background
};
export const card: ViewStyle = {
    position: "absolute",
    height: "87.5%",
    width: "95%",
    marginTop: "2.5%",
    alignSelf: "center",
    borderRadius: 33,
    borderWidth: 4,
    borderColor: setTheme.primary,
};
export const splash: ImageStyle = {
    height: '50%',
    width: '50%',
    aspectRatio: 0.75,
    alignSelf: 'center'
};