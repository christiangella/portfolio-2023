import React from 'react';
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div>
        <a href="https://github.com/christiangella/">
        <FontAwesomeIcon className='footerIcon fa-3x' icon={faUser}/>
        </a>
    </div>
  );
}