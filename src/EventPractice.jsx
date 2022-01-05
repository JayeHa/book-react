import React, { Component } from 'react';

// 이벤트에는 (실행할 js코드가 아닌) 함수 형태의 값 전달해야 함
// -> 지금까지는 이벤트를 처리할 때 렌더링하는 동시에 함수를 만들어서 전달해줌
// 하지만 위와 같이 함수를 미리 준비하여 전달하는 방법도 있음
// 성능상으로는 처리가 거의 없지만 가독성은 더 높음(케바케이긴 함)

class EventPractice extends Component {
  state = {
    message: '',
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // 함수가 호출될 때 this는 호출부에 따라 결정되므로,
  // 클래스의 임의메서드가 특정 HTML요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계가 끊어져 버림
  // 따라서 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는
  // 메서드를 this와 바인딩하는 작업이 필요함(안하면 undefined가 뜸)

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: '',
    });
  }

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
