import * as React from 'react';
import CargoInfo from './components/CargoInfo';
import ContactInfo from './components/ContactInfo';
import Steper from './components/Stepper';
import './style/index.css'

class App extends React.Component {
  public render() {
    const steps = [
      {title: 'Контактная информация', component: <ContactInfo/> },
      {title: 'Информация о грузе', component: <CargoInfo/> },
      {title: 'Отправка', component: () => <div className='header'>Отправка</div>}
    ]
    return (
      <div className='app'>
          <Steper 
             steps={steps}
         />
      </div>
    );
  }
}

export default App;
