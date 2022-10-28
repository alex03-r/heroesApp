import React, { useContext } from 'react'
import { Alert } from './Alert'
import { HeroContex } from '../contex/HeroContex'
import '../styles/card.css'


export const AddHeroForm = ({ setcanAddHero }) => {

  const { superHero, publisher, character, addHero, age, imgUrlRef, uploadImg, showAlert, handleAlert, clearInputs } = useContext(HeroContex);


  const handleAddHero = async () => {

    if (superHero.current.value == "" || publisher.current.value == "" || character.current.value == "" || age.current.value == "" || imgUrlRef.current.value == "") {

      alert('please fill out the inputs');

      clearInputs(superHero, publisher, character, age, imgUrlRef);

      return
    }

    let url = await uploadImg(imgUrlRef);

    let payload = {
      superHero: superHero.current.value,
      publisher: publisher.current.value,
      character: character.current.value,
      age: parseInt(age.current.value),
      imgUrl: url
    }

    addHero(payload);

    handleAlert();

    setcanAddHero(false)

    clearInputs(superHero, publisher, character, age, imgUrlRef);

  }

  return (


    <div className='container ms-5  d-flex justify-content-center  w-100  ' onClick={() => setcanAddHero(false) } style={{ position: "absolute", zIndex: "5" }} >

      <div className='ms-4 bg-body border rounded p-4'>
        {showAlert ? <Alert name={superHero.current.value} type={'success'} /> : null}
        
        <label for='hero' className='form-label'>Image of Hero</label>
        {/* <img style={{width:"60px" , height:"60px" , borderRadius:"50%"}} src="http://res.cloudinary.com/dlsc2062n/image/upload/v1665448386/heroes/jpg5gwkawgh6d5b91do2.jpg" /> */}

        <input type='file' ref={imgUrlRef} className='form-control ' />

        <label for='hero' className='form-label'>Super Hero</label>

        <input type='text' ref={superHero} placeholder='name' name='superHero' className='form-control ' />

        <label for='Publisher' className='form-label'>Publisher</label>
        <input type='text' ref={publisher} placeholder='publisher' name='publisher' className='form-control ' />

        <label for='character' className='form-label'>Character</label>
        <input type='text' ref={character} placeholder='character' name='character' className='form-control ' />

        <label for='age' className='form-label'>Age </label>
        <input type='text' ref={age} placeholder='age' name='age' className='form-control' />

        <button onClick={handleAddHero} className='btn btn-primary mt-2'>Add a Hero</button>
      </div>

    </div>
  )
}
