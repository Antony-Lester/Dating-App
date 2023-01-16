
import { TextStyle, ViewStyle } from "react-native";

import { setTheme } from "./theme";

export const card: ViewStyle = {
    position: 'absolute',
    top: '5%',
    height: '70%',
    width: '90%',
    backgroundColor: setTheme.main,
    flex: 1,
    justifyContent: 'space-around',
	alignSelf: 'center',
    borderRadius: 33, 
}

export const buttonBar: ViewStyle = {
    position: 'absolute',
    top: '75%',
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
}

export const buttonBackground: ViewStyle = {
    width: '20%',
    height: '90%',
    backgroundColor: setTheme.mainLight,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

    
}

export const buttonText: TextStyle = {
    color: setTheme.mainText,
    fontWeight: 'normal',
    fontSize: 20,
}