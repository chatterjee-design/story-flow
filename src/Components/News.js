import React from 'react';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import './NewsItem.css';

const News = ({ title, description, urlToImage, url }) => {
  return (
    <>
      <div className='news'>
        <img src={!urlToImage ? 'rotate.jpg' : urlToImage} alt='story-flow'></img>
        <div className='h2'>
          <h2 className='anim2'>{title}</h2>
        </div>

        <p>{description}...</p>
        <a href={url || '#'} target='_blank' rel='noopener noreferrer'>
          <FaExternalLinkSquareAlt />
        </a>
      </div>
    </>
  );
};

export default News;
