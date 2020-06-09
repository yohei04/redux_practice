import React from 'react';
import './styles.scss';
import Logo from '../../assets/graphics/logo.png';

const Header = (props) => {
  return (
    <header data-testid='headerComponent'>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Logo" data-testid='logoIMG'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
