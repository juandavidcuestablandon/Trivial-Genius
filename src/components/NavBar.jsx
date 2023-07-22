import { Link } from 'react-router-dom'

const NavBar = () => {

  function reset() {
    window.location.reload();
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {/* TODO #4
        /// Afegeix un enllaç a /settings per mostrar el component Settings. */}
        <li>
           <Link to='/settings'>Settings</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>

        <li>
           <Link to='/nothing'>Nothing</Link>
        </li>

        <li>
         <a href='#'  onClick={reset}>Reset Game</a>
        </li>
        {/* TODO #5
        /// Afegeix un enllaç a /nothing per comprovar si la ruta NotFound funciona bé. */}
       
      </ul>
    </nav>
  )
}

export default NavBar
