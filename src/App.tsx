import * as React from 'react';
import Steper from './components/Stepper';
import './style/index.css'

class App extends React.Component {
  public render() {
    return (
      <div className='app'>
          <Steper/>
      </div>
    );
  }
}

export default App;
