import React from 'react'
import './App.css';
import RightBar from './Components/RightBar';
import Homepage from './Components/Homepage';
import NewsItem from './Components/NewsItem';


const App = () => {
  return (
    <div className='app'>
      <Homepage></Homepage>
      <NewsItem></NewsItem>
      <RightBar></RightBar>
    </div>
  )
}

export default App
