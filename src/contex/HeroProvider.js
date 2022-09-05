
import { HeroContex } from './HeroContex'
import { useRef, useState } from 'react'

export function HeroProvider( { children } ){

    const [showAlert, setshowAlert] = useState(false);
 
  
    const superHero = useRef()
    const publisher = useRef()
    const character = useRef()
    const age = useRef()
    const imgUrl = useRef()

    function clearInputs(...refs){

      refs.forEach(inputs => {

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
         
        //  twoCalls = await Promise.all([response.json() , responseCloud.json() ]);   
        }

      async function getHeroes(){

        const response = await fetch("http://localhost:4000/api");
        const { allHeroes } = await response.json();
        return  allHeroes;
      }


    return(

        <HeroContex.Provider value={ {superHero,publisher , clearInputs ,  character, age, imgUrl,  addHero , showAlert ,  handleAlert  , uploadImg , getHeroes } } >

              { children}

        </HeroContex.Provider>
    )


}