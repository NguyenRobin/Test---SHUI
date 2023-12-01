import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export type GlobalState = {
  data: { date: string; message: string; user: string }[];
};

type Action = {
  type: string;
  payload: { date: string; message: string; user: string };
};

export type Message = {
  date: string;
  message: string;
  user: string;
};

const initialState: GlobalState = {
  data: [
    {
      date: 'måndag 3 Nov, 09:23',
      message:
        'Saker händer här och där. Elakingar på spårvagnarna vid Brunnsparken. Se till att vara på plats den tiden, var försiktiga.',
      user: 'jagarrobin',
    },
    {
      date: 'måndag 3 Nov, 12:21',
      message:
        'ICA Trumpenten har stängt, jag repeterar. ICA Trumpenten har spelat sitt susta tut! Var försiktiga där ute, detta håller på att balla ur!',
      user: 'jagarrobin',
    },
    {
      date: '2012-232-2',
      message: 'bla testtestest bla',
      user: 'jagArLobin',
    },
  ],
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'message/add':
      return { ...state, data: [...state.data, action.payload] };
    default:
      return state;
  }
}

export const store = createStore(reducer, composeWithDevTools());

export function addNewMessage(message: Message) {
  return { type: 'message/add', payload: message };
}
