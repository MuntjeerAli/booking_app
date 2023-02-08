import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBed, faCar, faPerson, faPlane, faTaxi, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import "./header.css";
import {DateRange} from 'react-date-range';
import { useState } from 'react';


const Header = () => {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ])
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className='headerTitle'>Wanna travel around the world. Let's go</h1>
        <p className='headerDescp'>
            Travel with saving more money. Unlock 10% discount on every booking you do with BookMyHotel.
        </p>
        <button className='headerBtn'>Sign in / Register</button>
        <div className="headerSearch">
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <input type='text' placeholder='Place to visit' className='headerSearchInput'/>
            </div>
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <span className='headerSearchText'>date to date</span>
                <DateRange editfableDateInput={true} onChange={item => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date}/>
            </div>
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span className='headerSearchText'>2 adults 2 childrens</span>
            </div>
            <div className='headerSearchItem'>
               <button className='headerBtn'>Search</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header
