import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx';
import { FavoriteFoods } from './FavoriteFoods.jsx';
import Person from './Person.jsx';
import Clock from './Clock.jsx';
import Timer from './Timer.jsx';
import Fetch from './Fetch.jsx';
import Counter from './Counter.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter />
  </StrictMode>,
)
