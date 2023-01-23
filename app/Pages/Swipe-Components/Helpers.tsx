import {Text, Animated } from "react-native";
import { HelperAvoid, HelperKiss, HelperMarry } from "../Elements/Icons";
import { helperAvoid, helperKiss, helperMarry } from "../../styles/swipe";
import { HelperInterface } from "../../utils/interfaces";



export const KissHelper = ({ opacity = 0, rotate = '0deg' }: HelperInterface) => {
    return (<Animated.View
        
        style={[helperKiss, {
            opacity, transform: [
        { rotate }, 
     ]}]}>
        <HelperKiss />
    </Animated.View>)
};

export const MarryHelper = ({ opacity = 0, rotate = '0deg' }: HelperInterface) => {
    return (<Animated.View
        
        
        style={[helperMarry, {
        opacity, transform: [ 
            { rotate }, 
         ]}]}>
        <HelperMarry />
    </Animated.View>)
};

export const AvoidHelper = ({ opacity = 0, rotate = '0deg' }: HelperInterface) => {
    return (<Animated.View
        
        
        style={[
        helperAvoid, { opacity, transform: [
            { rotate }, 
         ]}]}>
        <HelperAvoid />
    </Animated.View>)
};