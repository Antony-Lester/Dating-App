
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

import { setTheme } from "./theme";

export const card: ViewStyle = {
    position: 'absolute',
    top: '5%',
    height: '70%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 33,
    borderWidth: 4,
    borderColor: setTheme.mainDark
};
export const picture: ImageStyle = {
    height: '100%',
    width: '100%',
    borderRadius: 30,
}

//buttons
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
    backgroundColor: setTheme.main,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
};


const buttonCard: ViewStyle = {
    position: 'absolute',
    width: '25%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: setTheme.mainDark,
}

export const buttonReport: ViewStyle = {
    ...buttonCard,
    top: 0,
    alignSelf: 'flex-start',
    borderTopLeftRadius: 90,
    borderBottomRightRadius: 30,
    flexDirection: 'row-reverse',
};

export const buttonInfo: ViewStyle = {
    ...buttonCard,
    bottom: 0,
    alignSelf: 'flex-end',
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

export const name: TextStyle = {
    position: 'absolute',
    left: '25%',
    height: '5%',
    width: '75%',
    paddingLeft: '2%',
    paddingRight: '5%',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    overflow: 'hidden',
};

export const helper: TextStyle = {
    position: 'absolute', 
    top: '70%',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 80, 
    flex: 1,
};

export const helperKiss: TextStyle = {...helper };
export const helperMarry: TextStyle = {...helper };
export const helperAvoid: TextStyle = {...helper };