import React, { Component } from 'react'
import './Homepage.css';
export default class Homepage extends Component {
  render() {
    return (
      <>
         <div className='story'>
        <div className='storyItems'>
            <img src='Images/health.jpg' alt='Story-flow'></img>
            <p>Health</p>
        </div>
        <div className='storyItems'>
            <img src='Images/business.jpg' alt='Story-flow'></img>
            <p>Business</p>
        </div>
        <div className='storyItems'>
            <img src='Images/international.jpg' alt='Story-flow'></img>
            <p>International</p>
        </div>
        <div className='storyItems'>
            <img src='Images/sports.jpg' alt='Story-flow'></img>
            <p>Sports</p>
        </div>
       
    </div>
      </>
    )
  }
}
