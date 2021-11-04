import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <ul className='app'>
      <li>
        <Link to="/" className='Link'>Home</Link>
        </li>

        
      <li>
        <Link to="/Empresa" className='Link'>Empresa</Link>
        </li>

        
      <li>
        <Link to="/Contato" className='Link'>Contato</Link>
        </li>
      </ul>
    );
}

export default NavBar