const { createStore } = require('redux');

//๐ DOM ๋ ํผ๋ฐ์ค ๋ง๋ค๊ธฐ
const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

//๐ ์ก์ ํ์๊ณผ ์ก์ ์์ฑ ํจ์ ์ ์
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

//๐ ์ด๊น๊ฐ ์ค์ 
const initialState = {
  toggle: false,
  counter: 0,
};

//๐ ๋ฆฌ๋์ ํจ์ ์ ์
// state๊ฐ undefined์ผ ๋๋ initialState๋ฅผ ๊ธฐ๋ณธ๊ฐ์ผ๋ก ์ฌ์ฉ
function reducer(state = initialState, action) {
  // action.type์ ๋ฐ๋ผ ๋ค๋ฅธ ์์์ ์ฒ๋ฆฌํจ

  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // ๋ถ๋ณ์ฑ ์ ์ง๋ฅผ ํด์ฃผ์ด์ผ ํฉ๋๋ค.
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

//๐ ์คํ ์ด ๋ง๋ค๊ธฐ
const store = createStore(reducer);

//๐ renderํจ์ ๋ง๋ค๊ธฐ
const render = () => {
  const state = store.getState(); // ํ์ฌ ์ํ๋ฅผ ๋ถ๋ฌ์ต๋๋ค.
  // ํ ๊ธ ์ฒ๋ฆฌ
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }
  // ์นด์ดํฐ ์ฒ๋ฆฌ
  counter.innerText = state.counter;
};

render();

//๐ ๊ตฌ๋ํ๊ธฐ
store.subscribe(render);

//๐ ์ก์ ๋ฐ์์ํค๊ธฐ
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
