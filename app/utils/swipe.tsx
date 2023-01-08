import { MessagesInterface } from "../MOCK-DATA";

export const available: Function = (messages: MessagesInterface) => messages.new.length ? false : true