import { useState } from "react";
import '../../utils/style/Dropdown.css'


function Dropdown({title, text}){
    const[isOpen, setIsOpen] = useState(true)

    // le menu déroulant est soit  fermé, soit ouvert


    return isOpen ? (
        <div className="kasa-dropdown">
            <div className="kasa-dropdown-rectangle" >
                <h2 className="kasa-title-dropdown"> { title }</h2>
                <button className="kasa-dropdown-closed" onClick={() =>setIsOpen(false)}
                >

                </button>
            </div>
        </div>
        
    ) : (
        <div className="kasa-dropdown">
            <div className="kasa-dropdown-rectangle" >
                <h2 className="kasa-title-dropdown"> { title }</h2>
                <button className="kasa-dropdown-open" onClick={() =>setIsOpen(true)}
                >

                </button>
                
            </div>
            <div className="kasa-text">{text}</div>
            
        </div>    
    )
}


export default Dropdown