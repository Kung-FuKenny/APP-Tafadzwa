import React from 'react'
import './Footer.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                        <div>
                            <p> Ground Floor, Twickenham Building,<br/>The Campus, Cnr Main & Sloane Street</p>
                            <h4>Bryanston, Johannesburg, 2021</h4>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />+27 11 438 4300</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> reception@tafadzwa.co.za</h4>
                    </div>
                </div>
                <div className='right'>
                      <h4>About Tafadzwa Consulting</h4>
                    <p>We deliver the best consistent quality 
service, working in partnership with our clients and developing sustainable value-adding long-term relationship"</p>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} href="https://www.facebook.com/Tafadzwa-Consulting-530892300334863/?_rdr" />
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} href="https://twitter.com/tafadzwaconsult"/>
                        <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} href="https://www.linkedin.com/company/tafadzwa-consulting" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
