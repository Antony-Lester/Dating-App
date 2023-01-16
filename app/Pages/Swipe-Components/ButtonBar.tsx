import { View } from 'react-native';

import { buttonBar } from '../../styles/swipe';
import { AvoidButton, KissButton, MarryButton } from './Button';

export const ButtonBar = () => {
    return (<View style={buttonBar}>
        <KissButton/>
        <MarryButton/>
        <AvoidButton/>
        </View>)}