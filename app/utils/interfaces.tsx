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
}
export interface SwipeInterface {
    candidates: Array<CandidatesInterface>,
    results: Object
}