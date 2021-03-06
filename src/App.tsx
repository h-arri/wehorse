import React from 'react';
import './App.css';
import Courses from './components/courses/Courses';
import {Provider} from 'react-redux';
import store from './store/configureStore';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <header className='app-header'>
          <h1>Horses</h1>
        </header>
        <Courses/>
      </div>
    </Provider>
  );
}

App.displayName = 'App';

export default App;
