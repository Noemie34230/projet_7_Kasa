import '../../utils/style/Slideshow.css'
import React, {  useState } from "react"


function Slideshow (props){

 console.log(props)
 const sourceImage = props.image
 console.log(sourceImage)
 const length = sourceImage.length
 console.log(length)
   const[isData, setIsData] = useState(0)

    const nextImage = () => {
      setIsData(isData === length - 1 ? 0 : isData + 1); 
    };

    
    const prevImage = () => {
        setIsData(isData === 0 ? length - 1 : isData - 1); 
    };

    
        
    
    

  return (
    
    <div className="kasa-slideshow">
        
        {length > 1 && (
                <button className="kasa-slideshow-btn-left" onClick={nextImage}> </button> )}
        {length > 1 && (
                <button className="kasa-slideshow-btn-right" onClick={prevImage}> </button> )}

            <div>
                  <p className='kasa-slideshow-number-image'>{isData+1}/{length}</p>
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