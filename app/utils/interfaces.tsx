/** @format */
import { Animated } from "react-native"

export interface UserInterface {
    uid?: string
    name?: string
    dob?: Date
    location?: string
    email?: string
    number?: number
    category?: string
    imageURI?: string
    imageBlurHash?: string
    bio?: string
}
export interface TimeLineInterface {
    time: string,
    sender: Boolean,
    message: string,
}
export interface MessageInterface {
    uid: number,
    bio: string,
    imageUrl: string,
    imageBlurHash: string,
    name: string,
    status: string,
    force: boolean,
    timeline: Array<TimeLineInterface>,
}
export interface MessagesInterface {
    connections: Array<MessageInterface>, 
    new: Array<MessageInterface>,
    messages: Array<MessageInterface>
}
export interface CandidatesInterface { 
    uid: string
    name: string
    imageURI: string
    imageBlurHash: string
    bio: string
    index?: number
}
export interface SwipeInterface {
    candidates: Array<CandidatesInterface>,
    results: Object
}

export interface HelperInterface { 
    rotate?: any,
    opacity?: number,
    x?: number,
    y?: number
}

export interface SwipeButtonBarInterface {
    x: Animated.Value,
    y: Animated.Value,
    screenWidth: number,
    screenHeight: number,
    opacity: Animated.Value,
    uid: number|string
}
export interface SwipeButtonInterfaceX {
    x: Animated.Value,
    screenWidth: number,
    opacity: Animated.Value,
    uid: number|string
}
export interface SwipeButtonInterfaceY {
    y: Animated.Value,
    screenHeight: number,
    opacity: Animated.Value,
    uid: number|string
}

export interface Colours {

    primary: string,
    onPrimary: string,
    primaryContainer: string,
    onPrimaryContainer: string,

    secondary: string,
    onSecondary: string,
    SecondaryContainer: string,
    onSecondaryContainer: string,

    tertiary: string,
    onTertiary: string,
    tertiaryContainer: string,
    onTertiaryContainer: string,

    error: string,
    onError: string,
    errorContainer: string,
    onErrorContainer: string,

    background: string,
    onBackground: string,
    surface: string,
    onSurface: string,

    outline: string,
    surfaceVariant: string,
    onSurfaceVariant: string
}
export interface Theme {
    light: Colours,
    dark: Colours
}

export interface SendMessageInterface { 
    uid: string,
    toUid: string,
    time: string,
    message: string,
}