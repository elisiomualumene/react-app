import { Link } from 'react-router-dom'
import style from './NavBar.module.css'


function NavBar(){
    return(
        <ul className='app'>
      <li>
        <Link to="/" className={style.Link2}>Home</Link>
        </li>

        
      <li>
        <Link to="/Empresa" className={style.Link2}>Empresa</Link>
        </li>

        
      <li>
        <Link to="/Contato" className={style.Link2}>Contato</Link>
        </li>
      </ul>
    );
}

export default NavBar