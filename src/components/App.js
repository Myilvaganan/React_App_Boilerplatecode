import React from 'react';
import Logo from '../assets/My_Logo.png';

const App = () => {
  return (
    <div className='App'>
      <img src={Logo} alt='Logo' />
      <h2>Hi, Welcome To React App</h2>
      <button
        onClick={(e) =>
          alert(
            'Welcome! https://github.com/Myilvaganan/React_App_Boilerplatecode'
          )
        }
      >
        Hello
      </button>{' '}
      <div>
        <blockquote>
          <i>By Myilvaganan</i>
        </blockquote>
      </div>
    </div>
  );
};

export default App;
