import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import loadable from '@loadable/component';


// const SplitMe = React.lazy(() => import('./SplitMe'));
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div>
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  }

  return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          <p onClick={onClick}>Hello</p>
          {/*<Suspense fallback={<div>loading... </div>}>*/}
            {/*{visible && <SplitMe />}*/}
          {/*</Suspense>*/}
          {visible && <SplitMe/>}
        </header>
      </div>
  )
}

export default App;