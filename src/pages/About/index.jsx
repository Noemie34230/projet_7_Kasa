import paysage from "../../assets/Mask_Group-about.png"
import '../../utils/style/About.css'
import Dropdown from "../../components/Dropdown"

function About() {
    
    return (
        <div className="kasa-body-about">
            <img src= {paysage} alt="Vue sur un paysage de montagne" className="kasa-img-about"/>
            <div className="kasa-about">
                <Dropdown title='Fiabilité'text={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
                <Dropdown title='Respect' text={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
                <Dropdown title='Service'text={"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}/>
                <Dropdown title='Responsabilité' text={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés."}/>
            </div>
        </div>
    )
}

export default About