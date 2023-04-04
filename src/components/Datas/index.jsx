import { useEffect, useState } from "react"



function  Data () { 
    const [data, setData] = useState ([])

    const getData = () => { 
        fetch("./../logements.json")
            .then(function(result){

                return (result.json()) 
            })
            .then((logements) => setData(logements))
            

            .catch((error) =>console.log(error) )
            
    
    }
    useEffect(() =>{
        getData()
        },[]);
    return (

            <div >
		
                {data.map(({id, title, cover,pictures,host}) => 
                
                <div key={id}>
                    
                        
                        id = {id}
                        title = {title}
                        cover = {cover}
                        pictures = {pictures}
                        host = {host}
                        
                    
                </div>    
                )}
            </div>
        
    )
}

export default Data




    