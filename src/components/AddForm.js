import React, { useContext } from 'react'
import '../styles/card.css'
import { Alert } from './Alert'
import { HeroContex } from '../contex/HeroContex'


export const AddForm = () => {

  const { superHero , publisher ,character, addHeroCall , age, imgUrl,  uploadImg , showAlert,  handleAlert , clearInputs } = useContext(HeroContex);


  const handleAddHero = async  () => {

    if(superHero.current.value == "" ||  publisher.current.value == ""  || character.current.value == "" ||  age.current.value == ""  || imgUrl.current.value == ""   ) {

      alert('please fill out the inputs');
     
      clearInputs(superHero, publisher, character, age, imgUrl );

      return
    }

    let data  = await uploadImg(imgUrl);


    let payload = {

      superHero: superHero.current.value,
      publisher: publisher.current.value,
      character:character.current.value,
      age: parseInt(age.current.value),
      imgUrl:data        
    }

     addHeroCall(payload); 

     handleAlert();      
     
     clearInputs(superHero, publisher, character, age, imgUrl );

  }

  return (


    <div className='container w-75 justify-content-center'>

      {showAlert ? <Alert name={superHero.current.value} type={'success'} /> : null}
    
      <label for='hero' className='form-label'>Image of Hero</label>
      {/* //(e) => setimgUpload(e.target.files[0]) ref={ imgRef } */} 
      <input type='file'  ref={imgUrl}  className='form-control' />

      <label for='hero' className='form-label'>Super Hero</label>
      {/* //onChange={handleInputChange} value={superHero} */}
      <input type='text' ref={superHero} placeholder='name' name='superHero' className='form-control' />

      <label for='Publisher' className='form-label'>Publisher</label>
      <input type='text' ref={publisher}  placeholder='publisher' name='publisher' className='form-control' />

      <label for='character' className='form-label'>Character</label>
      <input type='text'  ref={character} placeholder='character' name='character' className='form-control' />

      <label for='age' className='form-label'>Age </label>
      <input type='text' ref={age}  placeholder='age' name='age' className='form-control' />

      <button onClick={handleAddHero} className='btn btn-primary mt-2'>Add a Hero</button>

    </div>
  )
}
