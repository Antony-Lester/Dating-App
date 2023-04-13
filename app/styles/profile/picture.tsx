import { ImageStyle } from "expo-image";
import { TextStyle, ViewStyle } from "react-native";
import { setTheme } from "../theme";

export const picture: ImageStyle = {
  height: "90%",
  width: "100%",
  borderRadius: 29,
  borderBottomRightRadius: 0,
  borderBottomLeftRadius: 0,
  backgroundColor: setTheme.SecondaryContainer
};
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
  alignItems: 'center'
};

export const buttonText: TextStyle = {
  fontSize: 18,
  fontWeight: 'bold',
  color: setTheme.onPrimaryContainer,
  overflow: 'hidden',
}
