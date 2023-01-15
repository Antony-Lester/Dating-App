
import { ViewStyle } from "react-native";

import { setTheme } from "./theme";

import { swipe } from "../MOCK-DATA";

export const card: ViewStyle = {
    position: 'absolute',
    top: '5%',
    height: '75%',
    width: '90%',
    backgroundColor: setTheme.main,
    flex: 1,
    justifyContent: 'space-around',
	alignSelf: 'center',
    borderRadius: 33,
    
}