import { useState } from "react";
// import rectangle from "../../assets/Rectangle_dropdow.png";
import '../../utils/style/Dropdow.css'
// import vector from "../../assets/Vector_bas.png";

function Dropdow({title, text}){
    const[isOpen, setIsOpen] = useState(true)

    
    
    // return isOpen ? (
    //     <div>
    //         <img src={rectangle} alt=" " className="kasa-dropdow-rectangle"/>
    //         <button className="kasa-dropdow-closed" onClick={() =>setIsOpen(false)}
    //         >

    //         </button>
    //     </div>
    // ) : (
    //     <div>
    //         <img src={rectangle} alt=" " className="kasa-dropdow-rectangle"/>
    //         <button className="kasa-dropdow-open" onClick={() =>setIsOpen(false)}
    //         >

    //         </button>

    //     </div>
    // )

    return isOpen ? (
        
            <div className="kasa-dropdow-rectangle" >
                <h2 className="kasa-title-dropdown"> { title }</h2>
                <button className="kasa-dropdow-closed" onClick={() =>setIsOpen(false)}
                >

                </button>
            </div>

        
    ) : (
        
            <div className="kasa-dropdow-rectangle" >
                <h2 className="kasa-title-dropdown"> { title }</h2>
                <button className="kasa-dropdow-open" onClick={() =>setIsOpen(true)}
                >

                </button>
                
            
            <p className="kasa-text">{text}</p>
            </div>
    )
}


export default Dropdow