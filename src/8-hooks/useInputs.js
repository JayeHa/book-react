import { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(intialForm) {
  const [state, dispatch] = useReducer(reducer, intialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };

  return [state, onChange];
}
