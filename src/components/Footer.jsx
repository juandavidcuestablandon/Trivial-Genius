import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    // TODO #2
    // Crea el JSX corresponent a aquest component (similar al que es mostra al vídeo).
    <footer>
     
      <div className="container">
        <h4>Trivial Genius</h4>
        <div className="contenido">
          <div className="footer">
            <h4>LINKS</h4>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/settings">SETTINGS</Link>
              </li>
              <li>
                <Link to="*">NOT FOUND</Link>
              </li>
            </ul>
          </div>

          <div className="footer">
            <h4>CONTAC</h4>
            <ul>
              <li>Addres: 123 Calle Principal, Ciudad</li>
              <li>Movil: +1 234 567 890</li>
              <li>info@TrivialGenius.com</li>
            </ul>
          </div>

          <div className="footer">
            <h4>&copy; 2023 Trivial Genius.</h4> 
            <div>
              <p> COPYRIGT</p>
              <p> Follow</p>
            </div>
             
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
