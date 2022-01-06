import React, { Component, useState } from 'react';

const EventPractice = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  })
  const {username, message} = form;
  const onChange = e => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한 뒤
      [e.target.name]: e.target.value // 원하는 값을 덮어씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(`${username}: ${message}`);
    setForm({
      username: '',
      message: ''
    });
  };
  
  const onKeyPress = e => {
    if(e.key === 'Enter'){
      onClick();
    }
  };
  return(
    <div>
      <h1>이벤트 연습</h1>
      <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={onChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={message}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>확인</button>
    </div>
  )

}
export default EventPractice;

// 이전 코드에서는 e.target.name을 활용하지 않고 onChange 관련 함수 두 개를 따로 만들어주었습니다.
// 인풋이 두 개밖에 없다면 이런 코드도 나쁘지 않지만 더 많아질 것같으면 e.target.name을 활용하는 것이 더 좋을 수 있습니다.
// 이번에는 useSate를 통해 사용하는 상태에 문자열이 아닌 객체를 넣어보겠습니다.

// e.target.name 값을 활용하려면, 위와 같이 userSate를 쓸 때 인풋 값들이 들어있는 form객체를 사용해주면 됩니다.