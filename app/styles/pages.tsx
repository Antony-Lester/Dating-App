import { ViewStyle } from "react-native";

import { setTheme } from "./theme";

export const page: ViewStyle = {
    position: "absolute",
    height: '100%',
    width: '100%',
    backgroundColor: setTheme.sub,
}