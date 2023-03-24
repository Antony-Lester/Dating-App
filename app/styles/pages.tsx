/** @format */
import { ViewStyle } from "react-native";

import { setTheme } from "./theme";
import { ImageStyle } from "expo-image";

export const page: ViewStyle = {
    position: "absolute",
    height: '100%',
    width: '100%',
    backgroundColor: setTheme.background
}

export const splash: ImageStyle = {
    height: '50%',
    width: '50%',
    aspectRatio: 0.75,
    alignSelf: 'center'
}