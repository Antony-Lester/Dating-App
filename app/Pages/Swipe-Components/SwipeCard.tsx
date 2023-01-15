/** @format */

import { useState } from 'react';
import { Animated, Dimensions, View, PanResponder, Text } from 'react-native';

import { CandidatesInterface } from '../../utils/interfaces';
import { handleKiss, handleMarry, handleAvoid, animateReset, animateKiss, animateMarry, animateAvoid } from '../../utils/swipe';
import { card } from '../../styles/swipe';

export const Card = ({ candidate }: { candidate: CandidatesInterface }) => {
	const screenWidth = Dimensions.get('window').width;
	const screenHeight = Dimensions.get('window').height;
	const swipeTrigger: number = Math.round(screenWidth * 0.15);
	const [x, _x] = useState(new Animated.Value(0));
	const [y, _y] = useState(new Animated.Value(0));
	let opacity = new Animated.Value(1);

	let rotateCard = x.interpolate({
		inputRange: [-200, 0, 200],outputRange: ['90deg', '0deg', '-90deg'],
	});
	let moveCard = y.interpolate({
		inputRange: [-1, 0, 1],outputRange: [-4, 0, 4],
	});

	let animation = PanResponder.create({
		onStartShouldSetPanResponder: () => false,
		onMoveShouldSetPanResponder: () => true,
		onStartShouldSetPanResponderCapture: () => false,
		onMoveShouldSetPanResponderCapture: () => true,
		onPanResponderMove: (_evt, gestureState) => {
			x.setValue(gestureState.dx); y.setValue(gestureState.dy);},
		onPanResponderRelease: (_evt, gestureState) => {
			if (gestureState.dx > -swipeTrigger && gestureState.dx < swipeTrigger &&
				gestureState.dy > -swipeTrigger) { animateReset(x, y) }
			else if (gestureState.dx < swipeTrigger && gestureState.dy > -swipeTrigger)
			{ animateKiss(x, screenWidth, opacity); handleKiss(candidate)}
			else if (gestureState.dy < -swipeTrigger)
			{ animateMarry(y, screenHeight, opacity); handleMarry(candidate)}
			else if (gestureState.dx > swipeTrigger)
			{ animateAvoid(x, screenWidth, opacity); handleAvoid(candidate)}}
	});
	return (<Animated.View{...animation.panHandlers}
			style={[card,
				{opacity: opacity,
					transform: [
						{ translateX: x },
						{ translateY: moveCard },
						{ rotate: rotateCard },
				]
			}]}>
	</Animated.View>
	);
};
