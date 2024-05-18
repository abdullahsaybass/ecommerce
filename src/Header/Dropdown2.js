import React from 'react'
import { Link } from 'react-router-dom';
import slogo from '../Assest/menu-product.jpg';
import './Dropdown.css'

const Dropdown2 = () => {
  return (
    <section className='dropdown-menu'>
        <div className='dropdown-container'>
            <div className='dropdown-wrapper'>
                <div className='dropdown-menu1'>
                    <nav>
                        <ul className='drop drop-inline'>
                            <p>LightWeight Shoes</p>
                            <li><Link to="/european-lace" style={{ textDecoration: 'none' }}>Blucher Shoe</Link></li>
                            <li><Link to="/brogue-boots">Brogan shoe</Link></li>
                            <li><Link to="/european-lace">Chukka</Link></li>
                            <li><Link to="/sneakers">Jelly Shoes</Link></li>
                        </ul>
                    </nav>
                </div>
                                            
                <div className='dropdown-menu2'> {/* Adjusted width for equal columns */}
                    <nav>
                        <ul className='drop drop-inline'>
                            <p>Stability Shoes</p>
                            <li><Link to="/wynk-text">Duckbill Shoe</Link></li>
                            <li><Link to="/vaccum-lace">Desert Boot</Link></li>
                            <li><Link to="/wynk-text">Climbing Shoe</Link></li>
                            <li><Link to="/brogue-boots">Jazz Shoe</Link></li>       
                        </ul>
                    </nav>
                </div>

                <div className='dropdown-menu3'> {/* Adjusted width for equal columns */}
                    <nav>
                        <ul className='drop drop-inline'>
                            <p>Motion Controled Shoes</p>
                            <li><Link to="/spirit-yoga">Hiking Shoes</Link></li>
                            <li><Link to="/european-lace">Boat Shoes</Link></li>
                            <li><Link to="/mid-lace">Winklepicker</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className='col-sm-1 logo-1'>
                    <img src = {slogo} alt="Logo"class="logo-image"/>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Dropdown2