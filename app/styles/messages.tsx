/** @format */

import { Dimensions, TextStyle, ViewStyle, StatusBar } from 'react-native';
import { setTheme } from './theme';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const separator = windowWidth / 25;
export const newConnectionsTitle: TextStyle = {
	width: '50%',
	textAlign: 'left',
	marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + separator / 2 : separator,
	marginLeft: separator,
	marginBottom: separator,
	fontSize: 18,
	color: setTheme.onBackground,
};
export const newConnectionsContainer: ViewStyle = {
	flex: 1,
	flexGrow: 0,
	minHeight: windowWidth * 0.66,
};
export const newConnectionsItem: ViewStyle = {
	width: windowWidth / 2.4,
	aspectRatio: 0.66,
	borderWidth: 5,
	borderColor: setTheme.primary,
	borderRadius: 50,
};
export const startComponent: ViewStyle = {
	padding: separator/2,
};
export const separatorComponent: ViewStyle = {
	padding: separator,
};
export const endsComponent: ViewStyle = {
	padding: separator*2,
};
export const newConnectionsIcon: TextStyle = {
	position: 'absolute',
	alignSelf: 'center',
	textAlign: 'center',
	bottom: 0,
	fontSize: windowWidth * 0.15,
	flex: 1,
};

export const connectionIconKiss: TextStyle = { top: 0, right: 0, fontSize: windowWidth * 0.11 };
export const connectionIconMarry: TextStyle = { bottom: 0, fontSize: windowWidth * 0.15 };

export const newMessagesTitle: TextStyle = {
	width: '50%',
	marginTop: separator,
	marginLeft: separator,
	marginBottom: separator,
	textAlign: 'left',
	fontSize: 18,
	color: setTheme.onBackground,
};

export const messageContainer: ViewStyle = {
    flex: 1,
	flexGrow: 1,
};

export const messageItem: ViewStyle = {
	height: windowHeight * 0.1,
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	flexGrow: 0,
};
export const messageIcon: TextStyle = {
	position: 'absolute',
	left: windowWidth * 0.175,
	bottom: windowWidth * 0.065,
	alignSelf: 'center',
	textAlign: 'left',
	fontSize: windowWidth * 0.06,
};

//forced
export const messageForcedPicture: ViewStyle = {
	height: '100%',
	left: windowWidth * 0.015,
	aspectRatio: 1,
	borderRadius: 50,
	borderWidth: 5,
	borderColor: setTheme.primary,
};
export const messageForcedName: TextStyle = {
	position: 'absolute',
	left: windowWidth * 0.26,
	top: windowHeight * 0.003,
	fontSize: 24,
	fontStyle: 'italic',
	color: setTheme.primary,
};
export const messageForcedText: TextStyle = {
	position: 'absolute',
	left: windowWidth * 0.24,
	right: windowWidth * 0.024,
	bottom: 0,
	margin: 1,
	overflow: 'hidden',
	textAlign: 'left',
	fontSize: 14,
	color: setTheme.secondary,
};
export const messageForcedWait: TextStyle = {
	position: 'absolute',
	right: windowWidth * 0.015,
	paddingTop: separator / 4,
	paddingBottom: separator / 4,
	paddingLeft: separator / 1.5,
	paddingRight: separator / 1.5,
	marginTop: separator / 8,
	textAlign: 'center',
	alignContent: 'center',
	fontSize: 18,
	fontWeight: 'bold',
	borderRadius: 30,
	borderWidth: 0,
	borderColor: setTheme.primary,
	backgroundColor: setTheme.primary,
	color: setTheme.background,
};
//not-forced
export const messagePicture: ViewStyle = {
	height: '100%',
	left: windowWidth * 0.015,
	aspectRatio: 1,
	borderRadius: 50,
	borderWidth: 5,
	borderColor: setTheme.tertiary,
};
export const messageName: TextStyle = {
	position: 'absolute',
	left: windowWidth * 0.26,
	alignSelf: 'center',
	textAlign: 'center',
	fontSize: 24,
	fontStyle: 'italic',
	color: setTheme.tertiary,
};
