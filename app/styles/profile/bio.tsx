import { ImageStyle } from "expo-image";
import { Dimensions, TextStyle, ViewStyle } from "react-native";
import { setTheme } from "../theme";
import Constants from "expo-constants";

const windowWidth = Dimensions.get('window').width;
const separator = windowWidth / 25;

export const page: ViewStyle = {
  flex: 1,
  marginTop: Constants.statusBarHeight,
  paddingBottom: separator/2,
  backgroundColor: setTheme.background
};

//INPUT
export const input: TextStyle = {
	fontSize: 16,
	fontWeight: '700',
	fontStyle: 'italic',
	textAlign: 'left',
	justifyContent: 'flex-start',
	padding: separator/2,
  color: setTheme.secondary,
  flexGrow: 1,
  
}

export const bottomBar: ViewStyle = {
  height: '10%',
  width: '100%',
  paddingLeft: '5%',
  paddingRight: '5%',
  borderBottomRightRadius: 28,
  borderBottomLeftRadius: 28,
  borderWidth: 0,
  borderTopWidth: 4,
  borderColor: setTheme.primary,
  backgroundColor: setTheme.primaryContainer,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
};

export const buttonText: TextStyle = {
  fontSize: 18,
  fontWeight: 'bold',
  color: setTheme.onPrimaryContainer,
  overflow: 'hidden',
}
