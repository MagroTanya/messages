import messagesReducer, {
  MessagesList,
  addMessage,
} from './messagesSlice';

describe('messages reducer', () => {
  const initialState: MessagesList = {
    list: [{ name: 'Test', message: 'Message' }],
  };

  it('should add new message to store', () => {
    const newMessage = { name: 'New Test', message: 'New Message' }
    const actual = messagesReducer(initialState, addMessage(newMessage));
    const expected = [{ name: 'Test', message: 'Message' }, { name: 'New Test', message: 'New Message' }]
    expect(actual.list).toEqual(expected);
  });
});
