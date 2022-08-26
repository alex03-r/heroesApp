
import { HeroContex } from './HeroContex'
import { useState } from 'react'

export function HeroProvider( { children } ){

    const [imgUpload, setimgUpload] = useState(null);
    const [showAlert, setshowAlert] = useState(false);
    const [url, setUrl] = useState('')
  
    const [formValue, setformValue] = useState({
      superHero: '',
      publisher: '',
      character: '',
      age: 0,
      imgUrl:''
    
    })
  
    const handleInputChange = ({ target }) => {
  
      setformValue({
        ...formValue,
        [target.name]: target.type == 'number' ? parseInt(target.value) : target.value,
        imgUrl:""
     
      })
  
    }

    const handleAlert = () => {

        setshowAlert(true)
        setTimeout(() => {
          setshowAlert(false)
        }, 3000);
    
      }
    

    async   function uploadImg(){

        const imgFormData = new FormData();
        imgFormData.append('upload_preset','react-heroes');
        imgFormData.append('file', imgUpload);    
      
        const cloudPayload = {
          method:'POST',
            body: imgFormData            
        }

        const responseCloud = await fetch('https://api.cloudinary.com/v1_1/dlsc2062n/upload', cloudPayload );     
        const dataCloud = await responseCloud.json(); 
        console.log(dataCloud.secure_url)
        setUrl(dataCloud.secure_url);
      
        // return  dataCloud.secure_url
      }


    async function callingTwoApi(){
       
     

        // handleInputChange( { target , url}  )

        // setformValue({
        //   ...formValue,
        //   imgUrl:url
        // })

         const heroPayload = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'},
          body: JSON.stringify(formValue)
        }      

        const response = await fetch("http://localhost:4000/api", heroPayload);
        const heroData = await response.json();
        // console.log( formValue )
        //  twoCalls = await Promise.all([response.json() , responseCloud.json() ]);
     
       
      
    }


    return(

        <HeroContex.Provider value={ {formValue, handleInputChange, setformValue, imgUpload,  callingTwoApi , setimgUpload, imgUpload, showAlert ,  handleAlert  , uploadImg , url } } >

              { children}

        </HeroContex.Provider>
    )


}