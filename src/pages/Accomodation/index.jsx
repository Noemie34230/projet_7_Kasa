import '../../utils/style/Accomodations.css'

import { useEffect, useState } from 'react'

import Dropdown from "../../components/Dropdown"
import { useNavigate, useParams } from 'react-router'
import Slideshow from '../../components/Slideshow';
import starPink from '../../assets/star_pink.png'
import starGrey from '../../assets/star_grey.png'



 function Accomodation(){

    // je récupére l'id du logement dans l'URL
    const {id} = useParams();
    
    const navigate = useNavigate();    
    const [data, setData] = useState ()
    useEffect(() => {
        		const getData = async () => {
        			const res = await fetch("./../logements.json", { method: 'GET' });
                    // je récupére tous les logements du fichier logements.json
                    const reponse = await res.json();
        	        
                    
                    // je trouve le logement en fonction de son id dans la liste de tous les logements
                    const appart = reponse.find((element => element.id === id));

                    // si l'id ne correspond à aucun des logements, je redirige vers la page erreur
                    if (appart===undefined) {
                        navigate("*", { state: { message: "Il y a eu une erreur" } });
                    }

                    reponse.map(() => setData(appart));
                    

                   

        		}
        		getData();
                //eslint-disable-next-line
        	    }, []);

    if(!data)return null

    // je crée des constantes pour récupérer les différentes données...
    
    //...les images des logements
    const imgArray = data && data.pictures;

    //...le titre
    const title = data && data.title;

    //...la localisation
    const localisation = data && data.location;

    //...les informations sur le proprio
    const host = data && data.host
    const name = host.name
    const picture = host.picture


    //...les mots-clés
    const tags = data && data.tags;

    //j'itère sur le tableau tags grâce à map() pour récupérer les différents mots-clés
    const Tags = () =>(
        <div className='kasa-tag-division'>
          <ul className='kasa-tag-ul'>{tags.map((index,value) => <li key ={value} className='kasa-tag-li'> {index} </li>)}</ul>
        </div>
      );

    // ... le nombre d'étoiles

    // je crée un tableau qui fera 5 tours (car le maximum d'étoiles roses par logement est 5)
    const arrayStar = [1,2,3,4,5]
   
    // Je récupère le nombre d'étoiles roses du logement
    const numberStarPink = [data.rating]

    //Tant que le nombre d'étoiles roses est supérieur ou égale à la valeur du tour : l'image renvoyée sera une étoile rose
    const Star = () =>(
            
        <div>
            
        {arrayStar.map((star) => 
                numberStarPink >= star ? (
                < img  src={starPink} className='kasa-star' alt='étoile rose'/>
           
        
                ) : (
                    
                < img src={starGrey} className='kasa-star' alt='étoile grise'/>

                )
                )}

        </div>
    )    
    
    // ... la description

    const description = data && data.description;
    
    // ... les équipements disponibles    
    const equipement = data && data.equipments;
    
    //j'itère sur le tableau equipement avec map() pour récupérer tous les équipements disponibles
    const Equip = () =>(
        < >
          <ul className='kasa-equipement-ul'>{equipement.map((index, value) => <li key={value} className='kasa-equipement-li'> {index} </li>)}</ul>
        </>
      );

    
    return (
        
        <div className='kasa-body-accomodation' >
        
            <Slideshow image={imgArray}/>

            <div className='kasa-top-accomodation'>

                <div className='kasa-top-accomodation-one'>

                    <div className='kasa-titles-accomodation'>
                        <h1 className='kasa-title-accomodation'>{title}</h1>
                        
                        <h2 className='kasa-location-accomodation'>{localisation}</h2>
                    </div>

                    <div className='kasa-proprio'>
                        <p className='kasa-name-proprio'>{name} </p>

                        <img src={picture} alt="propriétaire de l'appartement" className='kasa-picture-proprio'/>
                    </div>
                </div>

                <div  className='kasa-top-accomodation-two'>
                    
                    {<Tags/>}
                    {<Star/>}

                </div>
            </div>

            <div className='kasa-dropdow-accomodation'>
                
                <Dropdown title="Description" text={description}/>
                <Dropdown title="Equipements" text = {<Equip/> }/>
                
            </div>

        </div>

        
    ) 
    
}

export default Accomodation