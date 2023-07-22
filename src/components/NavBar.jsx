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
         <Link to='/'  onClick={reset}>Reset Game</Link>
        </li>
      
       
      </ul>
    </nav>
  )
}

export default NavBar
