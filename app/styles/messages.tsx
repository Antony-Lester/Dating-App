/** @format */

import { Dimensions, TextStyle, ViewStyle, ImageStyle, StatusBar } from 'react-native';
import { setTheme } from './theme';

const windowWidth = Dimensions.get('window').width;
const separator = windowWidth/25
export const newConnectionsTitle: TextStyle = {
	width: '50%',
    textAlign: 'left',
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + (separator/2) : separator,
    marginLeft: separator,
    marginBottom: separator,
	fontSize: 18,
	color: setTheme.onBackground,
};
export const newConnectionsContainer: ViewStyle = {
    flex: 1,
    borderRadius: 50,
};
export const newConnectionsItem: ViewStyle = {
	width: windowWidth/2.4,
    aspectRatio: 0.66,
};

export const newConnectionsSeparatorComponent: ViewStyle = {
    padding: separator
}

export const newConnectionsEndsComponent: ViewStyle = {
    padding: separator/2
}