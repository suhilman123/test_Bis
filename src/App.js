import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import PostList from './PostList';
import './style.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <PostList />
      </div>
    </Provider>
  );
};

export default App;
