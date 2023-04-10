import '../../utils/style/Accomodations.css'

import { useEffect, useState } from 'react'

import Dropdown from "../../components/Dropdown"
import { useNavigate, useParams } from 'react-router'
import Slideshow from '../../components/Slideshow';
import starPink from '../../assets/star_pink.png'
import starGrey from '../../assets/star_grey.png'



 function Accomodation(){

    const {id} = useParams();
    

    const navigate = useNavigate();    
    const [data, setData] = useState ()
    useEffect(() => {
        		const getData = async () => {
        			const res = await fetch("./../logements.json", { method: 'GET' });
                    const reponse = await res.json();
        	        
                    console.log(reponse)
                    const appart = reponse.find((element => element.id === id));
                    if (appart===undefined) {
                        navigate("*", { state: { message: "Il y a eu une erreur" } });
                    }
                    reponse.map(() => setData(appart));
                    console.log(appart)

                    console.log(appart.id)

        		}
        		getData();
                //eslint-disable-next-line
        	    }, []);

    if(!data)return null
    const imgArray = data && data.pictures;

    const tags = data && data.tags;
    
    const host = data && data.host
    const name = host.name
    const arrayStar = [1,2,3,4,5]
   
    const numberStarPink = [data.rating]

    
    const picture = host.picture

    const title = data && data.title;
    const localisation = data && data.location;
    const description = data && data.description;
    const equipement = data && data.equipments;
    
    const Equip = () =>(
        <div >
          <ul className='kasa-equipement-ul'>{equipement.map((index, value) => <li key={value} className='kasa-equipement-li'> {index} </li>)}</ul>
        </div>
      );
      const Tags = () =>(
        <div className='kasa-tag-division'>
          <ul className='kasa-tag-ul'>{tags.map((index,value) => <li key ={value} className='kasa-tag-li'> {index} </li>)}</ul>
        </div>
      );

    


        const Star = () =>(
            
            <div>
                
            {arrayStar.map((star) => 
                    numberStarPink >= star ? (
                    < img key = {numberStarPink}  src={starPink} className='kasa-star' alt='étoile rose'/>

				
            
            ) : (
                < img src={starGrey} className='kasa-star' alt='étoile grise'/>

            )
            )}

            </div>
        )
        

    
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