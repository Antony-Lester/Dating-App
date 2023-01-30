import { Animated } from 'react-native';

export const animateReset = (x: Animated.Value, y: Animated.Value) => {
    Animated.parallel([
        Animated.spring(x, { toValue: 0, speed: 0.5, bounciness: 10, useNativeDriver: true, }),
        Animated.spring(y, { toValue: 0, speed: 0.5, bounciness: 10, useNativeDriver: true, })
    ]).start()
};

export const animateKiss = (x: Animated.Value, screenWidth: number, opacity: Animated.Value) => {
    Animated.parallel([
        Animated.timing(x, {toValue: -screenWidth,duration: 1500,useNativeDriver: true,}),
        Animated.timing(opacity, {toValue: 0,duration: 1500,useNativeDriver: true,}),
    ]).start();
};

export const animateMarry = (y: Animated.Value, screenHeight: number, opacity: Animated.Value) => {
    Animated.parallel([
        Animated.timing(y, {toValue: -screenHeight,duration: 3000,useNativeDriver: true,}),
        Animated.timing(opacity, {toValue: 0,duration: 3000,useNativeDriver: true,}),
    ]).start();
};

export const animateAvoid = (x: Animated.Value, screenWidth: number, opacity: Animated.Value) => {
    Animated.parallel([
        Animated.timing(x, {toValue: screenWidth,duration: 1500,useNativeDriver: true,}),
        Animated.timing(opacity, {toValue: 0,duration: 1500,useNativeDriver: true,}),
    ]).start();
};