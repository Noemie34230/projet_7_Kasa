
import {  NavLink } from 'react-router-dom'
import '../../utils/style/Card.css'


function Card(props) {

    // Je récupére toutes les informations (id,title, cover)
    // que j'ai besoin grâce aux props de la page Home


    
return (
    
    <NavLink  to={props.id} className="kasa-card" >
        
            
            <h1 className='kasa-title-card'>{props.title}</h1>
 

            <img src = {props.cover} className='kasa-img-card' alt="Vue du logement" />

    </NavLink>
    
)
   
}

export default Card
