/** @format */
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

import { setTheme } from "./theme";

export const card: ViewStyle = {
  position: "absolute",
  top: "5%",
  height: "90.0%",
  width: "95%",
  alignSelf: "center",
  borderRadius: 33,
  borderWidth: 4,
  borderColor: setTheme.primary,
};
export const picture: ImageStyle = {
  height: "100%",
  width: "100%",
  borderRadius: 30,
  backgroundColor: setTheme.SecondaryContainer
};

export const info: ImageStyle = {
  height: "100%",
  width: "100%",
  borderRadius: 30,
  backgroundColor: setTheme.SecondaryContainer
};

export const buttonBar: ViewStyle = {
  position: "absolute",
  top: "74%",
  height: "15%",
  width: "100%",
  flexDirection: "row",
  alignItems: "flex-start",
  alignContent: "center",
  justifyContent: "space-around",
};

export const buttonBackgroundHelper: ViewStyle = {
  width: "20%",
  height: "80%",
  backgroundColor: setTheme.tertiary,
  alignItems: "center",
  alignContent: "center",
  justifyContent: "space-evenly",
  borderTopLeftRadius: 90,
  borderTopRightRadius: 90,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  borderWidth: 2,
  borderColor: setTheme.tertiaryContainer,
};

export const buttonBackground: ViewStyle = {
    width: "20%",
    height: "70%",
    backgroundColor: setTheme.tertiary,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-evenly",
    borderRadius: 90,
    borderWidth: 2,
    borderColor: setTheme.tertiaryContainer,
  };

const buttonCard: ViewStyle = {
  position: "absolute",
  width: "25%",
  height: "5%",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: setTheme.errorContainer,
  borderWidth: 1,
  borderColor: setTheme.onErrorContainer
};

export const buttonReport: ViewStyle = {
  ...buttonCard,
  top: 0,
  alignSelf: "flex-start",
  borderTopLeftRadius: 30,
  borderBottomRightRadius: 30,
  flexDirection: "row-reverse",
};

export const buttonText: TextStyle = {
  color: setTheme.onTertiary,
  fontWeight: "normal",
  fontSize: 15,
};

export const buttonTextSmall: TextStyle = {
  color: setTheme.onErrorContainer,
  fontWeight: "500",
  fontSize: 12,
};

export const bioHolder: ViewStyle = {
  position: "absolute",
  top: "7%",
  left: "5%",
  height: "65%",
  width: "90%",
  justifyContent: 'center',
}

export const bio: ViewStyle = {
  backgroundColor: setTheme.primary,
  borderRadius: 20,
  flexGrow: 0,
}

export const bioText: TextStyle = {
  width: "100%",
  fontSize: 15,
  fontStyle: 'italic',
  textAlign: 'center',
  padding: "3%",
  color: setTheme.onPrimary,
}

export const helper: TextStyle = {
  position: "absolute",
  top: "30%",
  alignSelf: "center",
  textAlign: "center",
  fontSize: 140,
  flex: 1,
};

export const helperKiss: TextStyle = { ...helper, left: "25%" };
export const helperMarry: TextStyle = { ...helper, top: "50%" };
export const helperAvoid: TextStyle = { ...helper, right: "25%" };
