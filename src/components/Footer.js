import  style from './Footer.module.css'

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return(
        <footer>
        <p className={style.cor}>Elísio Mualumene</p>
        <ul>
        <li><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaLinkedin/></li>
        </ul>
        </footer>
    );
}

export default Footer