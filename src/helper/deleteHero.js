
export const deleteHero = async (id) =>{    
   ///${publicid
    const response = await fetch(`http://localhost:4000/api/${id}`, {       
        method:'DELETE',
        headers: {
            'Content-type':'application/json'
        }
    })

    const data = await response.json();

}