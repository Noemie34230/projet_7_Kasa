

import '../../utils/style/Home.css'
import Card from '../../components/Card'
import { useEffect, useState } from 'react'




function Home(){
    const [data, setData] = useState ([])

    const getData = () => { 
        fetch("./../logements.json")
            .then(function(result){

                return (result.json()) 
            })
            .then((logements) => setData(logements))
            // je récupère les données (id, title, cover) grâce à fetch 

            .catch((error) =>console.log(error) )
            
    
    }
    useEffect(() =>{
    getData()
    },[]);

    return (
        <div className='kasa-home-body'>
            <section className='kasa-home-section-one'>
                <h1 className='kasa-home-title'>Chez vous, partout et ailleurs</h1>
            
            </section>
            <div className='kasa-home-gallery'>
		
                {data.map(({id, title, cover}) => 
                
                <div key={id} className='kasa-home-card'>
                    
                    <Card 
                        id = {id}
                        title = {title}
                        cover = {cover}
                        
                    />
                </div>    
                )}
            </div>
        </div>
    ) 
    
}


export default Home