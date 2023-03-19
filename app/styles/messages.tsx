import { Dimensions, TextStyle, ViewStyle, StatusBar } from 'react-native';
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
    flexGrow: 0,
    minHeight: windowWidth*0.66,
       
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
export const newConnectionsIcon: TextStyle = {
    position: "absolute",
    
    alignSelf: "center",
    textAlign: "center",
    bottom: 0,
    fontSize: windowWidth*0.15,
    flex: 1,
};

export const iconKiss: TextStyle = {top: 0, right: 0, fontSize: windowWidth*0.11,}
export const iconMarry: TextStyle = {bottom: 0, fontSize: windowWidth*0.15,}
  
export const newMessagesTitle: TextStyle = {
    width: '50%',
    textAlign: 'left',
    marginTop: separator,
    marginLeft: separator,
    marginBottom: separator,
	fontSize: 18,
	color: setTheme.onBackground,
}

