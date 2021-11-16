import { Message } from './messagesSlice';

export function getMessagesFromLocalStorage() {
  const fetchedItems = localStorage.getItem('messages') || '';
  const messages = fetchedItems ? JSON.parse(fetchedItems) : [];
  return messages;
}

export function setMessagesToLocalStorage(messages: Message[]) {
  const preparedItems = JSON.stringify(messages);
  localStorage.setItem('messages', preparedItems);
}