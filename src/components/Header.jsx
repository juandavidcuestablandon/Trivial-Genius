import NavBar from './NavBar'
const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='logo'>Trivial Genius</div>
        {/* TODO #3
        /// Manca afegir un component aquí (ja el tenim creat en un altre arxiu). */}
        <NavBar />
      </div>
      
    </header>
  )
}

export default Header
