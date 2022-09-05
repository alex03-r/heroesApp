
import { HeroContex } from './HeroContex'
import { useRef, useState } from 'react'

export function HeroProvider( { children } ){

    const [showAlert, setshowAlert] = useState(false); 
  
    const superHero = useRef()
    const publisher = useRef()
    const character = useRef()
    const age = useRef()
    const imgUrlRef = useRef()

    function clearInputs(...inputsRefs){

      inputsRefs.forEach(inputs => {

          inputs.current.value = "";

      })

    }

   
    const handleAlert = () => {

        setshowAlert(true)

        setTimeout(() => {

          setshowAlert(false)
        }, 3000);
    
      }
    

    async  function uploadImg(imgUrl){

        const imgFormData = new FormData();
        imgFormData.append('upload_preset','react-heroes');
        imgFormData.append('file', imgUrl.current.files[0] );  
       
        const cloudPayload = {
          method:'POST',
            body: imgFormData            
        }

        const responseCloud = await fetch('https://api.cloudinary.com/v1_1/dlsc2062n/upload', cloudPayload );     
        const dataCloud = await responseCloud.json();           

        return dataCloud.secure_url ;
      }


    async function addHero(payload){       

          const heroPayload = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
          }            

          const response = await fetch("http://localhost:4000/api", heroPayload);
          const heroData = await response.json();
          
     }

     async function editHero(payload , id){

      const request = await fetch(`http://localhost:4000/api/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    const response = await request.json();

   }

  async  function deleteHero(id){    
    ///${publicid
     const response = await fetch(`http://localhost:4000/api/${id}`, {       
         method:'DELETE',
         headers: {
             'Content-type':'application/json'
         }
     })
 
     const data = await response.json();
 
 }

  async function getHeroes(id){

        if(id == 0 ){

          try {

                const response = await fetch("http://localhost:4000/api");
                const { allHeroes } = await response.json();
                return  allHeroes; 
            
          } catch (error) {

              console.log(error)            
          }     

        }

        try {

            const response = await fetch(`http://localhost:4000/api/${id}`);

            const { Hero } = await response.json();
            return Hero
          
        } catch (error) {

            console.log(error)          
        }   
      
  
   }


    return(

        <HeroContex.Provider value={ {superHero,publisher , clearInputs ,  character, age, imgUrlRef,  addHero , showAlert ,  handleAlert  , uploadImg , getHeroes , editHero, deleteHero } } >

              { children}

        </HeroContex.Provider>
    )


}