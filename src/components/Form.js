import React, { useContext } from 'react'
import '../styles/card.css'
import { Alert } from './Alert'
import { HeroContex } from '../contex/HeroContex'


export const Form = () => {

  const { superHero , publisher ,character, addHeroCall , age, imgUrl,  uploadImg , showAlert,  handleAlert  } = useContext(HeroContex);

 

  const handleAddHero = async  () => {

    let data  = await uploadImg() 

     addHeroCall(data); 
    handleAlert();      
    
  }

  return (


    <div className='container w-75 justify-content-center'>

      {showAlert ? <Alert name={superHero.current.value} type={'success'} /> : null}
    
      <label for='hero' className='form-label'>Id Of category</label>
      {/* //(e) => setimgUpload(e.target.files[0]) ref={ imgRef } */} 
      <input type='file'  ref={imgUrl} className='form-control' />

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
