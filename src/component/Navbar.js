import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    '여성',
    'Divided',
    '남성',
    '신생아/유아',
    '아동',
    'H&M HOME',
    'Sale',
    '지속가능성',
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  let navigate = useNavigate();

  // const goToLogin = () => {
  //   navigate('/login');
  // };

  const handleLogoClick = () => {
    navigate('/');
  };

  const search = (event) => {
    if (event.key === 'Enter') {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const handleAuthClick = () => {
    if (authenticate) {
      setAuthenticate(false);
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <div>
        {/* <div className='login-button' onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} className='login-icon' />
          <div>로그인</div>
        </div> */}

        <div className='login-button' onClick={handleAuthClick}>
          <FontAwesomeIcon icon={faUser} className='login-icon' />
          <div>{authenticate ? '로그아웃' : '로그인'}</div>
        </div>
      </div>

      <div className='nav-section'>
        <img
          width={100}
          onClick={handleLogoClick}
          src='https://www2.hm.com/hm-logo.png'
          alt='logo'
        ></img>
      </div>

      {/* <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul> */}

      <div className='burger-menu' onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </div>
      <div className={`menu-area ${isMenuOpen ? 'show' : ''}`}>
        <ul className='menu-list'>
          {menuList.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>

        <div className='input-container'>
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
          <input
            type='text'
            onKeyPress={(event) => search(event)}
            className='search-input'
            placeholder='Search...'
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
