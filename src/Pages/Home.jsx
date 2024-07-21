import React from 'react';
import './Home.css'
import Card from '../Reusecompo/Card';
import Websiteimg from '../Reusecompo/Websiteimg';

const Home = () => {
  return (
    <div>
      <div className='websiteimage-compo'><Websiteimg/></div>
      <div className='home-page'>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
      <div className='card-one'><Card/></div>
    </div>
    </div>
  )
}

export default Home
