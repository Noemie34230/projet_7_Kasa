import { useState } from "react";
// import rectangle from "../../assets/Rectangle_dropdow.png";
import '../../utils/style/Dropdown.css'
// import vector from "../../assets/Vector_bas.png";

function Dropdown({title, text}){
    const[isOpen, setIsOpen] = useState(true)

    


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
            <p className="kasa-text">{text}</p>
            
        </div>    
    )
}


export default Dropdown