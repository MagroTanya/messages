import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface Message {
  name: string;
  message: string;
}

export interface MessagesList {
  list: Message[];
}

const initialState: MessagesList = {
  list: [],
};

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<Message>) => {
      const { list } = state;
      state.list = list.concat(action.payload);
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.list = action.payload;
    },

  },
});

export const { addMessage, setMessages } = messagesSlice.actions;

export const selectMessages = (state: RootState) => state.messages.list;

export default messagesSlice.reducer;
