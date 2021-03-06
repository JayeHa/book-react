import { createAction, handleActions } from 'redux-actions';

//π μ‘μ νμ μ μνκΈ°
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//π μ‘μ μμ± ν¨μ λ§λ€κΈ°
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//π μ΄κΈ° μν λ° λ¦¬λμ ν¨μ λ§λ€κΈ°
const initialState = {
  number: 0,
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;
