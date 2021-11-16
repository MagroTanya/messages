import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Paper, TextField } from '@material-ui/core';
import { setMessagesToLocalStorage } from '../../store/localStorageManager';
import { selectMessages } from '../../store/messagesSlice';
import { socket } from '../../App';
import './MessageForm.scss';

const MessageForm = () => {
  const [nameValue, setNameValue] = useState<string>('');
  const [messageValue, setMessageValue] = useState<string>('');
  const storedMessages = useSelector(selectMessages);

  const onNameChange = (e: any) => setNameValue(e.target.value);
  const onMessageChange = (e: any) => setMessageValue(e.target.value);

  const handleSubmit = () => {
    const newMessage = { name: nameValue, message: messageValue };
    const messages = storedMessages.concat(newMessage);
    setMessagesToLocalStorage(messages);
    socket.send(newMessage);
    resetForm();
  }

  const resetForm = () => {
    setNameValue('');
    setMessageValue('');
  }

  return (
    <Paper className="form">
      <TextField
        onChange={onNameChange}
        value={nameValue}
        variant="outlined"
        className="input"
        label={"Name"}
      />
      <TextField
        onChange={onMessageChange}
        value={messageValue}
        variant="outlined"
        label={"Message"}
        className="input"
        rows={5}
        multiline
      />
      <Button
        className="button"
        variant="contained"
        onClick={handleSubmit}
        disabled={!nameValue || !messageValue}
      >
        Send
      </Button>
    </Paper>
  );
};

export default MessageForm;
