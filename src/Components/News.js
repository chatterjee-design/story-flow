import React, { Component } from 'react'
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import './NewsItem.css';
export default class News extends Component {
  
  render() {
    let {title, description, urlToImage, url} = this.props
    return (
      <>
        <div className='news'>
            <img src={!urlToImage? "rotate.jpg":urlToImage}  alt='story-flow'></img>
            <div className='h2'> <h2 className='anim2'>{title}</h2></div>
           
            <p>{description}...</p>
            <a href={url || '#'} target= '_blank' rel='noopener noreferrer'>
              <FaExternalLinkSquareAlt/>
              </a>
        </div>
      </>
    )
  }
}
