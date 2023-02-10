import { Animated } from "react-native"

export interface UserInterface {
    uid?: string
    name?: string
    dob?: Date
    location?: string
    email?: string
    number?: number
    category?: string
    image?: string
    imageURI?: string
    imageBlurHash?: string
    bio?: string
}
export interface TimeLineInterface {
    time: any,
    sender: Boolean,
    message: string,
}
export interface MessageInterface {
    image: string,
    imageUrl: string,
    imageBlurHash: string,
    name: string,
    status: string,
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
    image: string
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