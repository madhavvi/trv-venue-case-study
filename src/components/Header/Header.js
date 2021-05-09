import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/trivago-logo-vector.svg';
import { BiUser } from 'react-icons/bi';
import './Header.css';

export const Header = () => (
  <header className="header">
    <div className="wrapper">
      <Link to="/" title="Trivago Venue Hotel" className="logo">
        <img src={logo} alt="Trivago Venue Hotel Logo" height="70px" />
      </Link>
      <div className="user">
        <div className="avatar">
            <BiUser />
        </div>
        <span>Jane Doe</span>
      </div>

      <div className="language">
          <span>
              EN
          </span>
      </div>

      <div className="language">
          <span>
              INR
          </span>
      </div>

    </div>
  </header>
);
