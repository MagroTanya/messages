import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import io from 'socket.io-client'
import MessageFrom from './components/MessageForm';
import MessagesList from './components/MessagesList';
import { addMessage, setMessages } from './store/messagesSlice'

import './App.scss';
import { getMessagesFromLocalStorage } from './store/localStorageManager';

const SERVER_URL = 'http://localhost:3000'

export const socket = io(SERVER_URL, { reconnection: false });

const App = () => {
  const dispatch = useDispatch();

  const handleSocket = () => {
    socket.on('connect', function () {
      console.log('connected');
      socket.on('message', function (message) {
        dispatch(addMessage(message));
      });
    });
  }

  const recoverSavedMassages = () => {
    const messages = getMessagesFromLocalStorage();
    dispatch(setMessages(messages));
  }

  useEffect(() => {
    handleSocket();
    recoverSavedMassages();
  }, []);

  return (
    <div className="app">
      <MessageFrom />
      <MessagesList />
    </div>

  );
};

export default App;
