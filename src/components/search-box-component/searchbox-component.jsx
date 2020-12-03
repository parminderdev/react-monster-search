import React from 'react';
import './searchbox-style.css';

const Searchbox = (props) => (
    <input className="search" type="search" placeholder={props.placeholder} onChange={props.onfilter}></input>

)
 
export default Searchbox;