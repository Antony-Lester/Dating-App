import { Animated } from 'react-native';

import { swipe } from "../MOCK-DATA";
import { CandidatesInterface, MessagesInterface } from "./interfaces";

export const available: Function = (messages: MessagesInterface) => messages.new.length ? false : true

export const handleKiss = (candidate: CandidatesInterface) => {
    swipe.candidates = swipe.candidates.filter((x) =>  x.uid !== candidate.uid)
    swipe.results.kiss.push(candidate.uid);
};
export const handleMarry = (candidate: CandidatesInterface) => {
    swipe.candidates = swipe.candidates.filter((x) =>  x.uid !== candidate.uid)
    swipe.results.marry.push(candidate.uid);
};
export const handleAvoid = (candidate: CandidatesInterface) => {
    swipe.candidates = swipe.candidates.filter((x) =>  x.uid !== candidate.uid)
    swipe.results.avoid.push(candidate.uid);
};

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