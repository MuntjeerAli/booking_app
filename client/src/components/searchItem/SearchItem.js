import React from 'react';
import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
      src='https://cf.bstatic.com/xdata/images/hotel/square200/242710752.webp?k=e13975bb9513cd816719113429b5ca08401347d33f44e2adc8f079f088eb0529&o=&s=1'
      alt=''
      className='siImg'/>
      <div className='siDesc'>
        <h1 className='siTitle'>Tower Street Apartment</h1>
        <span className='siDistence'>500m from center</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className='siSubtitle'>Studio Apartment with Air conditioning</span>
        <span className='siFeatures'>Entier studio - 1 bathroom - King size bed</span>
        <span className='siCancelOp'>Free cancellation</span>
        <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price</span>
      </div>
      <div className='siDetails'>details</div>
    </div>
  )
}

export default SearchItem
