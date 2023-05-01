import React from 'react'
import HomeSlider from '../components/HomeSlider'
import '../css/home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faPenToSquare, faNewspaper, faHeart, faBell } from '@fortawesome/free-regular-svg-icons'

export default function Home() {
  return (
    <div>
        <HomeSlider />
        <div className='menu-bar'>
            <a href="/">
                <FontAwesomeIcon icon={faAddressBook}
                    className='menu-bar-icon'
                />
            </a>
            <a href="/">
                <FontAwesomeIcon icon={faPenToSquare}
                    className='menu-bar-icon'
                />
            </a>
            <a href="/">
                <FontAwesomeIcon icon={faNewspaper}
                    className='menu-bar-icon'
                />
            </a>
            <a href="/">
                <FontAwesomeIcon icon={faHeart}
                    className='menu-bar-icon'
                />
            </a>
            <a href="/">
                <FontAwesomeIcon icon={faBell}
                    className='menu-bar-icon'
                />
            </a>
        </div>
    </div>
  )
}
