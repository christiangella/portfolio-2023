import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('Home')}

          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          <FontAwesomeIcon className='footerIcon fa-lg' icon={faUser}/>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          <FontAwesomeIcon className='footerIcon fa-lg' icon={faFolder}/>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          <FontAwesomeIcon className='footerIcon fa-lg' icon={faEnvelope}/>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://github.com/christiangella"
        >
          <FontAwesomeIcon className='footerIcon fa-lg' icon={faCode}/>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="https://www.linkedin.com/in/christian-gella-293539a5/"
        >
          <FontAwesomeIcon className='footerIcon fa-lg' icon={faUsers}/>
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
