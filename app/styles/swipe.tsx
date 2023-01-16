
import { TextStyle, ViewStyle } from "react-native";

import { setTheme } from "./theme";

export const card: ViewStyle = {
    position: 'absolute',
    top: '5%',
    height: '70%',
    width: '90%',
    backgroundColor: setTheme.main,
    alignSelf: 'center',
    borderRadius: 33,
    borderWidth: 3,
};

export const buttonBar: ViewStyle = {
    position: 'absolute',
    top: '75%',
    height: '15%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-around',
};

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
};

export const buttonReport: ViewStyle = {
    width: '25%',
    height: '5%',
    backgroundColor: setTheme.mainLight,
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 90,
    borderBottomRightRadius: 30,
    flexDirection: 'row-reverse',
};

export const buttonInfo: ViewStyle = {
    top: '144.5%',
    width: '25%',
    height: '5%',
    backgroundColor: setTheme.mainLight,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 90,
    flexDirection: 'row',
};

export const buttonText: TextStyle = {
    color: setTheme.mainText,
    fontWeight: 'normal',
    fontSize: 20,
};

export const buttonTextSmall: TextStyle = {
    color: setTheme.mainText,
    fontWeight: '300',
    fontSize: 12,
};