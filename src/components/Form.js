import React, { useState } from 'react'
import '../styles/card.css'
// import Swal from 'sweetalert2'
import { Alert } from './Alert'

export const Form = () => {

  const handleInputChange = ({ target }) => {
    setformValue({
      ...formValue,
      [target.name]: target.value
    })

  }

  const [showAlert, setshowAlert] = useState(false)

  const [formValue, setformValue] = useState({
    idCategory: '',
    superHero: '',
    publisher: '',
    character: '',
    age: ''
  })

  const { idCategory, superHero, publisher, character, age } = formValue;

  const handleAddHero = async () => {

    const information = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValue)
    }
    const response = await fetch("http://localhost:4000/api", information)
    const data = await response.json();

    handleAlert();


    setTimeout(()=>{

      setformValue({
      idCategory: '',
      superHero: '',
      publisher: '',
      character: '',
      age: ''
    })  

    },3000)

  

  }
 

  const handleAlert = () => {

    setshowAlert(true)
   

    setTimeout(() => {

      setshowAlert(false)

    }, 3000);

  }

  return (

  
    <div className='container w-75 justify-content-center'>

      {showAlert ? <Alert  name={superHero} type={'success'} /> : null}

      <label for='hero' className='form-label'>Id Of category</label>
      <input type='text' onChange={handleInputChange} value={idCategory} placeholder='idCategory' name='idCategory' className='form-control' />

      <label for='hero' className='form-label'>Super Hero</label>
      <input type='text' onChange={handleInputChange} value={superHero} placeholder='name' name='superHero' className='form-control' />

      <label for='Publisher' className='form-label'>Publisher</label>
      <input type='text' onChange={handleInputChange} value={publisher} placeholder='publisher' name='publisher' className='form-control' />

      <label for='character' className='form-label'>Character</label>
      <input type='text' onChange={handleInputChange} value={character} placeholder='character' name='character' className='form-control' />

      <label for='age' className='form-label'>Age </label>
      <input type='text' onChange={handleInputChange} value={age} placeholder='age' name='age' className='form-control' />

      <button onClick={handleAddHero} className='btn btn-primary mt-2'>Add a Hero</button>

    </div>
  )
}
