import { Component } from 'react';
import ErrorBoundary from './7-lifecycle-method/ErrorBoundary';
import LifeCycleSample from './7-lifecycle-method/LifeCycleSample';
import './App.css';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
