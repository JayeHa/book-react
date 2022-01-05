import React, { Component } from 'react';

// 생선자 메서드에서 메서드바인딩을 하는 것이 정석이지만,
// 좀 더 간단하게 화살표 함수 형태로 메서드를 정의할 수도 있다 😆

class EventPractice extends Component {
  state = {
    message: '',
  };

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
