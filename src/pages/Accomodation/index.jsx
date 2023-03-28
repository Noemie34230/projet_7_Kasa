import '../../utils/style/Accomodations.css'

import { useEffect, useState } from 'react'

import Dropdow from "../../components/Dropdow"
import { useParams } from 'react-router'
// import Logements from "./../logements.json"
// import Error from '../../components/Error'




function Accomodation(){

    const {id} = useParams();
    console.log(id)

    
    
    let data = []
    const getData = () => { 
        fetch("./../logements.json")
            .then(function(result){
                
                return (result.json()) 
                
                
            })
            .then(function(logements){
            console.log(logements)
            let logement = logements.find(element => element.id === id)
            console.log (logement.title)
            
            })
            .catch((error) =>console.log(error) )
    
    }
    useEffect(() =>{
    getData()
    },[]);
    
    console.log(getData)
        
       


        
        // const title = logement.title
        // console.log(title)
//         logement.map(({id, title, cover}) =>
//         console.log(id,title,cover)
// )
        

    return (
        
        <div className='kasa.body.accomodation' >
            
            
        
            <img className="kasa-karousel" alt=''/>
            <h1 className='kasa-title-accomodation'>title</h1>
            <h2 className='kasa-location-accomodation'>lieu</h2>
            <div className='kasa-dropdow-accomodation'>
                
                <Dropdow title="Description"/>
                <Dropdow title="Equipements"/>
                
            </div>

        </div>

        
    ) 
    
}

export default Accomodation