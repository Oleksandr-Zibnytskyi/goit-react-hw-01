import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import UserMenu from './UserMenu.jsx';

const App = () => {
    const userName = 'John'; // Припустимо, що це ім'я користувача, яке ви хочете передати в UserMenu
    return (
      <div>
        <h1>My App</h1>
        <UserMenu name={userName} />
      </div>
    );
  };
  
  export default App;



