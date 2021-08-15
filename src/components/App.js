import React from 'react';
import Logo from '../assets/My_Logo.png';

const App = () => {
  return (
    <div className='App'>
      <img src={Logo} alt='Logo' />
      Hi, Welcome To React App
      <button>Hello</button>{' '}
      <div>
        <blockquote>
          <em>By Myilvaganan</em>
        </blockquote>
      </div>
    </div>
  );
};

export default App;
