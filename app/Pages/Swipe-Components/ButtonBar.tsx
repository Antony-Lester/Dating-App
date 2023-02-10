import { View } from 'react-native';

import { buttonBar } from '../../styles/swipe';
import { AvoidButton, KissButton, MarryButton } from './Button';
import { SwipeButtonBarInterface } from '../../utils/interfaces';

export const ButtonBar = ({x, y, screenWidth, screenHeight, opacity, uid}: SwipeButtonBarInterface) => {
    return (<View style={buttonBar}>
        <KissButton x={x} screenWidth={screenWidth} opacity={opacity} uid={uid}/>
        <MarryButton y={y} screenHeight={screenHeight} opacity={opacity} uid={uid}/>
        <AvoidButton x={x} screenWidth={screenHeight} opacity={opacity} uid={uid}/>
        </View>)}