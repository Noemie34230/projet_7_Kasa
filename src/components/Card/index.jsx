


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

// import { useHistory } from 'react-router-dom',
// class redirection extends Component {

//   faireRedirection=()=> {
//     let url = "maNouvelleURL",
//     let history = useHistory(),
//     history.push(url),
//   }

//   render() {
//     return (
//         <Button color="primary" className="px-4"
//             onClick={this.faireRedirection}
//             >
//               Mon Bouton va rediriger sur "maNouvelleURL" si on clique dessus
//         </Button>
//     ),
//   }
// }
// export default redirection,   
   
   
}

export default Card