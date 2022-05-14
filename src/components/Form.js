import React, { useState } from 'react'

export const Form = () => {


  const handleInputChange = ({ target }) => {
    setformValue({
      ...formValue,
      [target.name]: target.value
    })

  }

  const [formValue, setformValue] = useState({
    idCategory: '',
    superHero: '',
    publisher: '',
    character: '',
    age: 1
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

  }

  return (

    <div className='container w-75 justify-content-center'>

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

        <button onClick={handleAddHero} className='btn btn-danger mt-5'>Add a Hero</button>

    </div>
  )
}
