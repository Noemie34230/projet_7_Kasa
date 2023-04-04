


import {  NavLink } from 'react-router-dom'

// import Accomodation from '../../pages/Accomodation'

import '../../utils/style/Card.css'


function Card(props) {
   
    
    console.log(props)

    
return (
    
    <NavLink  to={props.id} className="kasa-card" >
        
            
            <h1 className='kasa-title-card'>{props.title}</h1>
 

            <img src = {props.cover} className='kasa-img-card' alt="Vue du logement" />

           
            

    </NavLink>
    
)

  
   
   
}

export default Card