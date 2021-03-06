import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

//๐ ์ก์ ํ์ ์ ์ํ๊ธฐ
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // ์ธํ ๊ฐ์ ๋ณ๊ฒฝํจ
const INSERT = 'todos/INSERT'; // ์๋ก์ด todo๋ฅผ ๋ฑ๋กํจ
const TOGGLE = 'todos/TOGGLE'; // todo๋ฅผ ์ฒดํฌ/์ฒดํฌํด์ 
const REMOVE = 'todos/REMOVE'; // todo๋ฅผ ์ ๊ฑฐํจ

//๐ ์ก์ ์์ฑ ํจ์ ๋ง๋ค๊ธฐ
export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // insert๊ฐ ํธ์ถ๋  ๋๋ง๋ค 1์ฉ ๋ํด์ง๋๋ค.
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

//๐ ์ด๊ธฐ ์ํ ๋ฐ ๋ฆฌ๋์ ํจ์ ๋ง๋ค๊ธฐ
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '๋ฆฌ๋์ค ๊ธฐ์ด ๋ฐฐ์ฐ๊ธฐ',
      done: true,
    },
    {
      id: 2,
      text: '๋ฆฌ์กํธ์ ๋ฆฌ๋์ค ์ฌ์ฉํ๊ธฐ',
      done: false,
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.todos.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.todos.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.todos.findIndex((todo) => todo.id === id);
        draft.todos.splice(index, 1);
      }),
  },
  initialState,
);

export default todos;
