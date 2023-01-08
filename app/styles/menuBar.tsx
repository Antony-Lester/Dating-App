import { TextStyle, ViewStyle } from 'react-native';
import { setTheme } from './theme';

export const menuBar: ViewStyle = {
    position:'absolute',
    width: '100%',
    height: '10%',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: setTheme.main,
}
export const menuItem: ViewStyle = {
    position: 'relative',
    minWidth: '30%',
    height: '90%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: setTheme.sub,
    borderTopEndRadius: 70,
    borderTopStartRadius: 70,
}
export const menuItemFocused: ViewStyle = {
    position: 'relative',
    minWidth: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: setTheme.subDark,
    borderTopEndRadius: 80,
    borderTopStartRadius: 80,
}
export const menuText: TextStyle = {
    color: setTheme.subText,
    fontWeight: 'normal',
    fontSize: 16,
}
export const menuTextFocused: TextStyle = {
    color: setTheme.subText,
    fontWeight: 'normal',
    fontSize: 20
}