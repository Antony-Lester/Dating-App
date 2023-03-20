/** @format */
import { Animated } from 'react-native';
import store from '../store/store';
import { LOG_KISS, LOG_MARRY, LOG_AVOID } from '../store/taskTypes';


export const animateReset = (x: Animated.Value, y: Animated.Value) => {
    Animated.parallel([
        Animated.spring(x, { toValue: 0, speed: 0.5, bounciness: 2, useNativeDriver: true, }),
        Animated.spring(y, { toValue: 0, speed: 0.5, bounciness: 2, useNativeDriver: true, })
    ]).start()
};

export const animateKiss = (x: Animated.Value, screenWidth: number, opacity: Animated.Value, uid : String | Number) => {
    Animated.parallel([
        Animated.timing(x, {toValue: -screenWidth,duration: 1500,useNativeDriver: true,}),
        Animated.timing(opacity, {toValue: 0,duration: 1500,useNativeDriver: true,}),
    ]).start(()=> store.dispatch({ type: LOG_KISS, payload: uid }));
};

export const animateMarry = (y: Animated.Value, screenHeight: number, opacity: Animated.Value, uid : String | Number) => {
    Animated.parallel([
        Animated.timing(y, {toValue: -screenHeight,duration: 3000,useNativeDriver: true,}),
        Animated.timing(opacity, {toValue: 0,duration: 3000,useNativeDriver: true,}),
    ]).start(()=> store.dispatch({ type: LOG_MARRY, payload: uid }));
};

export const animateAvoid = (x: Animated.Value, screenWidth: number, opacity: Animated.Value, uid : String | Number) => {
    Animated.parallel([
        Animated.timing(x, {toValue: screenWidth,duration: 1500,useNativeDriver: true,}),
        Animated.timing(opacity, {toValue: 0,duration: 1500,useNativeDriver: true,}),
    ]).start(()=> store.dispatch({ type: LOG_AVOID, payload: uid }));
};

export const animateKissButton = (x : Animated.Value, screenWidth: number, opacity: Animated.Value, uid : String | Number) => {
    console.log(uid)
    Animated.parallel([
        Animated.timing(x, {toValue: -screenWidth,duration: 3000,useNativeDriver: true,}),
        Animated.timing(opacity, {toValue: 0,duration: 3000,useNativeDriver: true,}),
    ]).start(()=> store.dispatch({ type: LOG_KISS, payload: uid }));
};

export const animateMarryButton = (y: Animated.Value, screenHeight: number, opacity: Animated.Value, uid : String | Number) => {
    Animated.parallel([
        Animated.timing(y, {toValue: -screenHeight,duration: 6000,useNativeDriver: true,}),
        Animated.timing(opacity, {toValue: 0,duration: 6000,useNativeDriver: true,}),
    ]).start(()=> store.dispatch({ type: LOG_MARRY, payload: uid }));
};

export const animateAvoidButton = (x: Animated.Value, screenWidth: number, opacity: Animated.Value, uid : String | Number) => {
    Animated.parallel([
        Animated.timing(x, {toValue: screenWidth,duration: 3000,useNativeDriver: true,}),
        Animated.timing(opacity, {toValue: 0,duration: 3000,useNativeDriver: true,}),
    ]).start(()=> store.dispatch({ type: LOG_AVOID, payload: uid }));
};