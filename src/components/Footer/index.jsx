import logo_footer from '../../assets/logo_footer.png'
import droits from '../../assets/Droits_reserves.png'
import '../../utils/style/Footer.css'


function Footer(){


    return (
        <div className='kasa-footer-background'>
            <img className='kasa-footer-logo' src = {logo_footer} alt="logo de l'entreprise Kasa" />
            
            <img className='kasa-footer-droit' src = {droits} alt="droits à l'entreprise Kasa" />
        </div>
    ) 
    
}

export default Footer
