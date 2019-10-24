import React from 'react';
import logo from './logo.svg';
import './App.css';
// import notify from './notify';

function App() {
  const onClick = () => {
    // nofity();

    // import를 상단에 하지 않고 import()함수 형태로 메서드 안에서 사용하면,
    // 파일을 따로 분리시켜 저장합니다. 그리고 실제 함수가 필요한 지점에
    // 파일을 불러와 함수를 사용할 수 있습니다.
    // import를 함수로 사용하면 Promise를 반환합니다.
    // stage-3단계에 있는 dynamic import라는문법
    
    import('./notify').then(result => result.default());
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
