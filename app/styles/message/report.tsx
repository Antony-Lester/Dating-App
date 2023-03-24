/** @format */

import { Dimensions, TextStyle, ViewStyle } from 'react-native';
import { setTheme } from '../theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const separator = windowWidth / 25;

export const reportContainer: ViewStyle = {
	position: 'absolute',
	width: windowWidth*0.23,
    height: windowHeight*0.04,
    top: 0,
    right: 0,
    paddingTop: separator*0.25,
	paddingBottom: separator*0.25,
	paddingLeft: separator*0.75,
	paddingRight: separator*0.75,
	margin: separator / 4,
	marginTop:windowHeight *0.02,
    
	flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    
    borderWidth: 2,
    borderRadius: 30,
    borderColor: setTheme.onErrorContainer,
    backgroundColor: setTheme.errorContainer,

};
export const forcedReportContainer: ViewStyle = {
	...reportContainer,
    top: windowHeight*0.04,
};
export const reportText: TextStyle = {
    fontSize: 14,
};

