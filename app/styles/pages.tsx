/** @format */
import { ViewStyle } from "react-native";

import { setTheme } from "./theme";
import { ImageStyle } from "expo-image";
import Constants from "expo-constants";

export const page: ViewStyle = {
    flex:1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: setTheme.background
}

export const splash: ImageStyle = {
    height: '50%',
    width: '50%',
    aspectRatio: 0.75,
    alignSelf: 'center'
}