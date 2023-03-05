//@ts-nocheck
import { useState } from 'react';
import { Animated, Dimensions, PanResponder, Image, Text} from 'react-native';
import { CandidatesInterface } from '../../utils/interfaces';
import { animateReset, animateKiss, animateMarry, animateAvoid } from '../../utils/swipe';
import { card, picture, name } from '../../styles/swipe';
import { ReportButton } from './Button';
import { capitalizeFirstLetter } from '../../utils/general';
import { AvoidHelper, KissHelper, MarryHelper } from './Helpers';
import { ButtonBar } from './ButtonBar';
import { useSelector } from 'react-redux';

import { Bio } from './Bio';
import { Picture } from './Picture';

export const Card = ({ candidate }: { candidate: CandidatesInterface }) => {
	const screenWidth = Dimensions.get('window').width;
	const screenHeight = Dimensions.get('window').height;
	const swipeTrigger: number = Math.round(screenWidth * 0.10);
	const [x, _x] = useState(new Animated.Value(0));
	const [y, _y] = useState(new Animated.Value(0));
	let opacity = new Animated.Value(1);
	//card
	let rotateCard = x.interpolate({
		inputRange: [-200, 0, 200],outputRange: ['90deg', '0deg', '-90deg'],
	});
	let moveCard = y.interpolate({
		inputRange: [-1, 0, 1],outputRange: [-4, 0, 4],
	});
	//helper opacity
	let opacityHelperKiss = x.interpolate({
		inputRange: [-50, -25, -20],outputRange: [1, 0.65, 0],extrapolate: "clamp",
	});
	let opacityHelperMarry = y.interpolate({
		inputRange: [-45, -30],outputRange: [1, 0],extrapolate: "clamp",
	});
	let opacityHelperAvoid = x.interpolate({
		inputRange: [20, 25, 50],outputRange: [0, 0.65, 1],extrapolate: "clamp",
	});
	//helper position
	let rotateHelper = x.interpolate({
		inputRange: [-80, 0, 80],outputRange: ['-20deg', '0deg', '35deg'],
	});
	let image = useSelector(state => state.app.subPage === 'image')
	let animation = PanResponder.create({
		onStartShouldSetPanResponder: () => false,
		onMoveShouldSetPanResponder: () => true,
		onStartShouldSetPanResponderCapture: () => false,
		onMoveShouldSetPanResponderCapture: () => true,
		onPanResponderMove: (_evt, gestureState) => {
			x.setValue(gestureState.dx); y.setValue(gestureState.dy);},
		onPanResponderRelease: (_evt, gestureState) => {
			if (gestureState.dx < swipeTrigger && 
				gestureState.dx > -swipeTrigger && 
				gestureState.dy > -swipeTrigger) {animateReset(x, y)}
			else if (gestureState.dx < -swipeTrigger)
			{animateKiss(x, screenWidth, opacity, candidate.uid)}
			else if (gestureState.dy < -(swipeTrigger*0.5))
			{animateMarry(y, screenHeight, opacity, candidate.uid)}
			else if (gestureState.dx > swipeTrigger)
			{animateAvoid(x, screenWidth, opacity, candidate.uid)}
			}});
	return (<Animated.View{...animation.panHandlers}
			style={[card,
				{opacity: opacity,
					transform: [
						{ translateX: x },
						{ translateY: moveCard },
						{ rotate: rotateCard },
				]
			}]}>
		{image ? <Picture key={candidate.uid} candidate={{ ...candidate}}/>
		: <Bio key={candidate.uid} candidate={{ ...candidate}} />}
		<ReportButton/>
		<KissHelper rotate={rotateHelper} opacity={opacityHelperKiss}/> 
		<MarryHelper rotate={rotateHelper} opacity={opacityHelperMarry}/>
		<AvoidHelper rotate={rotateHelper} opacity={opacityHelperAvoid}/>
		<ButtonBar x={x} y={y} screenWidth={screenWidth} screenHeight={screenHeight} opacity={opacity} uid={candidate.uid}/>
	</Animated.View>
	);
};