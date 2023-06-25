import './App.css';

import React, { Component } from 'react'
import RightBar from './Components/RightBar';
import Homepage from './Components/Homepage';
import NewsItem from './Components/NewsItem';


export default class App extends Component {
  render() {
    return (
      <>z
      <div className='app'>
      <Homepage></Homepage>
      <NewsItem></NewsItem>
      <RightBar></RightBar>

      </div>
       
      </>
    )
  }
}

