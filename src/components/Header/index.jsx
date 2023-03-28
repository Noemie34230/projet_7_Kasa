
import logo from '../../assets/logo.png'
import '../../utils/style/Header.css'
import { Link } from 'react-router-dom'

function Header(){


    return (
        <div className='kasa-header'>
            <img className='kasa-logo'src = {logo} alt="logo de l'entreprise Kasa" />

            <nav className='kasa-nav'>
                <Link className='lien' to="/">
                    <li className='kasa-accueil'>Accueil</li>
                </Link>
                <Link className='lien'to="about">
                    <li className='kasa-a-propos'>A Propos</li>
                </Link>
            </nav>
        </div>
    ) 
    
}

export default Header