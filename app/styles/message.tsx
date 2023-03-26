/** @format */

import { Dimensions, TextStyle, ViewStyle, StatusBar, StyleProp } from 'react-native';
import { setTheme } from './theme';
import { ImageStyle } from 'expo-image';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const separator = windowWidth / 25;

//structure
export const header: ViewStyle = {
	position: 'absolute',
	//top: '5%',
	top: '0%',
	height: '10%',
	width: '100%',
};
export const body: ViewStyle = {
	position: 'absolute',
	//top: '15%',
	top: '10%',
	//height: '73%',
	height: '78%',
	width: '100%',
};
export const chat: TextStyle = {
	flexGrow: 50,
};

//picture
export const picture: ImageStyle = {
	height: '100%',
	left: windowWidth * 0.015,
	aspectRatio: 1,
	borderRadius: 50,
	borderWidth: 5,
	borderColor: setTheme.tertiary,
};
export const forcedPicture: ImageStyle = {
	...picture,
	borderColor: setTheme.primary,
};

//name
export const nameText: TextStyle = {
	position: 'absolute',
	alignSelf: 'center',
	textAlign: 'center',
	fontSize: 24,
	fontStyle: 'italic',
	fontWeight: 'bold',
	color: setTheme.tertiary,
};
export const forcedNameText: TextStyle = {
	...nameText,
	left: windowWidth * 0.25,
	marginTop:windowHeight *0.02,
	color: setTheme.primary,
};

//sender
const senderBase: TextStyle = {
	fontSize: 16,
	fontWeight: '700',
	fontStyle: 'italic',
	padding: separator * 0.5,
	margin: separator * 0.5,
	borderRadius: 10,
};
export const sender: TextStyle = {
	...senderBase,
	alignSelf: 'flex-end',
	textAlign: 'right',
	marginLeft: separator*3,
	backgroundColor: setTheme.secondary,
	color: setTheme.onSecondary,
};
export const notSender: TextStyle = {
	...senderBase,
	alignSelf: 'flex-start',
	textAlign: 'left',
	marginRight: separator*3,
	backgroundColor: setTheme.tertiary,
	color: setTheme.onTertiary,
};
export const forcedNotSender: TextStyle = {
	...senderBase,
	...notSender,
	backgroundColor: setTheme.primary,
	color: setTheme.onPrimary,
};

//INPUT
export const input: TextStyle = {
	flexGrow: 1,
	fontSize: 16,
	fontWeight: '700',
	fontStyle: 'italic',
	textAlign: 'center',
	justifyContent: 'flex-end',
	padding: separator/2,
	margin: separator/4,
	borderWidth: separator/4,
	borderRadius: 10,
	borderColor: setTheme.secondary,
	backgroundColor: setTheme.SecondaryContainer,
	color: setTheme.secondary,
}


//icons
export const messageFocusedIcon: TextStyle = {
	position: 'absolute',
	alignSelf: 'flex-start',
	fontSize: 24,
	paddingTop: separator*2,
	paddingLeft: separator*2,
}
export const messageIcon: TextStyle = {
	position: 'absolute',
	alignSelf: 'flex-end',
	fontSize: 24,
	paddingTop: separator/2,
	paddingRight: separator,
}
//bio
export const bio: TextStyle = {
	flex: 1,
	flexGrow: 50,
	marginTop: separator,
	alignContent: 'center',
	alignItems: 'center',
	justifyContent: 'center',
}
export const bioText: TextStyle = {
	...senderBase,
	textAlign: 'center',
	borderWidth: 4,
	borderColor: setTheme.primary,
	backgroundColor: setTheme.primary,
	color: setTheme.background
}
//-----------
export const forcedWait: TextStyle = {
	position: 'absolute',
	right:0,
	paddingTop: separator*0.25,
	paddingBottom: separator*0.25,
	paddingLeft: separator*0.75,
	paddingRight: separator*0.75,
	margin: separator / 4,
	marginTop:windowHeight *0.02,
	textAlign: 'center',
	alignContent: 'center',
	fontSize: 16,
	fontWeight: 'bold',
	borderRadius: 30,
	
	backgroundColor: setTheme.primary,
	color: setTheme.background,
};