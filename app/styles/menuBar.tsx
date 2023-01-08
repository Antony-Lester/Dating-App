import { TextStyle, ViewStyle } from 'react-native';
import { light } from './theme';

export const menuBar: ViewStyle = {
    position:'absolute',
    width: '100%',
    height: '10%',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: light.main,
}
export const menuItem: ViewStyle = {
    position: 'relative',
    minWidth: '30%',
    height: '90%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'space-around',
    backgroundColor: light.sub,
    borderTopEndRadius: 70,
    borderTopStartRadius: 70,
}
export const menuItemFocused: ViewStyle = {
    position: 'relative',
    minWidth: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: light.subDark,
    borderTopEndRadius: 80,
    borderTopStartRadius: 80,
}
export const menuText: TextStyle = {
    color: light.subText,
    fontWeight: 'normal',
    fontSize: 16,
}
export const menuTextFocused: TextStyle = {
    color: light.subText,
    fontWeight: 'normal',
    fontSize: 20
}