import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import rootReducer from './17-react-redux-tutorial/modules';

const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById('root'));
