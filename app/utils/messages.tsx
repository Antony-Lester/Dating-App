import { MessagesInterface } from './interfaces';

export function available(messages: MessagesInterface) {
	return messages.connections.length || messages.messages.length || messages.new.length ? true : false;
}