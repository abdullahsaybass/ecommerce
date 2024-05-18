import React from 'react'
import { Link } from 'react-router-dom';
import slogo from '../Assest/menu-product.jpg';
import './Dropdown.css'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Dropdown = ({ showDropdown, onMouseEnter, onMouseLeave }) => {

  const handleMouseEnterDropdown = () => {
    onMouseEnter();
  };

  const handleMouseLeaveDropdown = () => {
    onMouseLeave();
  };

  return (
    <section className='dropdown-menu'>
      
          <div className='dropdown-container'>
            <div className='dropdown-wrapper tra'>
              <div className='dropdown-menu1'>
                <nav>
                  <ul className='drop drop-inline'>
                    <p>Men's Footware</p>
                    <li><Link to="/sneakers" style={{ textDecoration: 'none' }}>Sneakers</Link></li>
                    <li><Link to="/brogue-boots">Brogue boots</Link></li>
                    <li><Link to="/classic-leather">Leather Shoes</Link></li>
                    <li><Link to="/european-lace">Running Shoes</Link></li>
                    <li><Link to="/omax-lace">Sports Shoes</Link></li>
                  </ul>
                </nav>
              </div>

              <div className='dropdown-menu2'>
                <nav>
                  <ul className='drop drop-inline'>
                    <p>Women's Footware</p>
                    <li><Link to="/mid-lace">Loafers</Link></li>
                    <li><Link to="/omax-lace">Mary Janes</Link></li>
                    <li><Link to="/spirit-yoga">Sports Shoes</Link></li>
                    <li><Link to="/classic-edge">Oxfords</Link></li>
                  </ul>
                </nav>
              </div>

              <div className='dropdown-menu3'>
                <nav>
                  <ul className='drop drop-inline'>
                    <p>Kids's Footware</p>
                    <li><Link to="/omax-lace">Kid's Boots</Link></li>
                    <li><Link to="/titanium-lace">Schuh Kids</Link></li>
                    <li><Link to="/Class-club">Toddler Shoe</Link></li>
                    <li><Link to="/classic-edge">Teens Shoe</Link></li>
                    <li><Link to="/brogue-boots">Baby Shoes</Link></li>
                  </ul>
                </nav>
              </div>

              <div className='col-sm-1 logo-1'>
                <img src={slogo} alt="Logo" class="logo-image" />
              </div>

            </div>
          </div>
       
    </section>
  )
}

export default Dropdown
