import '../../utils/style/Slideshow.css'
import React, {  useState } from "react"


function Slideshow (props){


// Je récupère un tableau avec toutes les images grâce aux props
 const sourceImage = props.image

// J'utilise la longueur du tableau, en fonction du nombre d'images
 const length = sourceImage.length

   // la constante "isData" représente l'index de l'image (les index des tableau commence toujours à 0)
   const[isData, setIsData] = useState(0)


    //pour passer à l'image suivante on vérifie que l'index de l'image correspond à la longueur -1
    // on ajoute 1 à l'index de l'image

    const nextImage = () => {
      setIsData(isData === length - 1 ? 0 : isData + 1); 
    };

    //pour passer à l'image précédente on vérifie que l'index de l'image correspond à 0.
    // on enlève 1 à l'index de l'image
    
    const prevImage = () => {
        setIsData(isData === 0 ? length - 1 : isData - 1); 
    };
    

  return (
    
    <div className="kasa-slideshow">
        {/* On vérifie s'il y a plus d'une image, pour afficher les boutons flèches */}
        {length > 1 && (
                <button className="kasa-slideshow-btn-left" onClick={prevImage}> </button> )}
        {length > 1 && (
                <button className="kasa-slideshow-btn-right" onClick={nextImage}> </button> )}

            <div>
                  {/* On utilise l'index de l'image, auquel on ajoute 1 puisque les tableaux commencent à 0
                  et on affiche la longueur du tableau */}
            {length > 1 && (      
                  <p className='kasa-slideshow-number-image'>{isData+1}/{length}</p> )}

                  {/* On itére sur le tableau "sourceImage" pour récupérer toutes les images */}
                  {sourceImage.map((image, index) => (  

                  <div key={index}>

                     {index === isData && <img src= {image} className='kasa-slideshow'alt='logement à louer'/>	}
                          
                  </div>

                
                ))} 
            </div>
            
    </div>



  )
}

export default Slideshow