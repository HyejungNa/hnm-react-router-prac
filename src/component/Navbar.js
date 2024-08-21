import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menulist = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M HOME',
    'Sale',
    '지속가능성',
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div>
      <div>
        <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} className='login-icon' />
          <div>로그인</div>
        </div>
      </div>
      <div className='nav-section'>
        <img width={100} src='https://www2.hm.com/hm-logo.png' alt='logo'></img>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menulist.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
        <div className='input-container'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <input
            type='text'
            className='search-input'
            placeholder='Search...'
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
