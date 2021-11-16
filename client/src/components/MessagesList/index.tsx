import { useSelector } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';
import { selectMessages } from '../../store/messagesSlice';
import './MessagesList.scss';

const MessagesList = () => {
  const messages = useSelector(selectMessages);
  return (
    <div className="messagesList">{
      messages.map(
        (item, index) => (
          <div className="messageItem" key={index}>
            <Paper className="message">{item.message}</Paper>
            <Typography className="messageAuthor" variant="caption" display="block" gutterBottom>
              {item.name}
            </Typography>
          </div>
        ))}
    </div>
  );
};

export default MessagesList;
