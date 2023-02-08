import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBed, faCar, faPerson, faPlane, faTaxi, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import "./header.css";
import {DateRange} from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns";


const Header = (type) => {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOption, setOpenOption] = useState(false);
    const [options,setOptions] = useState({
        adult:1,
        children:0,
        room:1,
    });

    const handleOption= (name, operation) => {
        setOptions(prev => {return {
            ...prev, [name]: operation === "i" ? options[name] +1 : options[name] - 1,
        }})
    }
  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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
        { type !== "list" &&
            <><h1 className='headerTitle'>Wanna travel around the world. Let's go</h1>
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
                <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDate && <DateRange editfableDateInput={true} onChange={item => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} className='date'/>}
            </div>
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span onClick={() => setOpenOption(!openOption)} className='headerSearchText'>{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
                {openOption && <div className='options'>
                    <div className='optionItem'>
                        <span className='optionText'>Adult</span>
                        <div className='optionCounter'>
                        <button disabled = {options.adult <= 1} className='optionCounterBtn' onClick={() => handleOption("adult", "d")}>-</button>
                        <span className='optionCounterNumber'>{options.adult}</span>
                        <button className='optionCounterBtn' onClick={() => handleOption("adult", "i")}>+</button>
                        </div>
                    </div>
                    <div className='optionItem'>
                        <span className='optionText'>Children</span>
                        <div className='optionCounter'>
                        <button disabled = {options.children <= 0} className='optionCounterBtn' onClick={() => handleOption("children", "d")}>-</button>
                        <span className='optionCounterNumber'>{options.children}</span>
                        <button className='optionCounterBtn' onClick={() => handleOption("children", "i")}>+</button>
                        </div>
                    </div>
                    <div className='optionItem'>
                        <span className='optionText'>Room</span>
                        <div className='optionCounter'>
                        <button disabled = {options.room <= 1} className='optionCounterBtn' onClick={() => handleOption("room", "d")}>-</button>
                        <span className='optionCounterNumber'>{options.room}</span>
                        <button className='optionCounterBtn' onClick={() => handleOption("room", "i")}>+</button>
                        </div>
                    </div>
                </div>}
            </div>
            <div className='headerSearchItem'>
               <button className='headerBtn'>Search</button>
            </div>
        </div></>}
      </div>
    </div>
  );
}

export default Header
