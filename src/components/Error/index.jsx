import { Link } from 'react-router-dom'
import error from '../../assets/404.png'
import '../../utils/style/Error.css'


function Error() {
    return (
        <div className='kasa-body-error'>
            <img src={error} alt="erreur" className='kasa-error-img'/>
            <h2 className='kasa-error-title'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link className='lien' to="/">
                    <p className='kasa-error-back'>Retourner sur la page d’accueil</p>
            </Link>
        </div>
    )
}

export default Error