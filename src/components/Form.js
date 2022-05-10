import React, {useState} from 'react'

export const Form = () => {

    const [formValue, setformValue] = useState({
        superHero: '',
        publisher:'',
        character:'',
        age:1
    })


    const {superHero,publisher,character,age } = formValue ;


    const handleInputChange = ({target}) =>{


        setformValue({

            [target.name]:target.value
        }         
        )

        console.log(superHero)

    }




  return (


    <div className='container w-75'>

        <label for='hero' className='form-label'>Super Hero</label>
        <input type='text' onChange={handleInputChange} value={superHero} placeholder='name' name='superHero' className='form-control'/>

        <label for='Publisher' className='form-label'>Publisher</label>
        <input type='text' onChange={handleInputChange} value={publisher} placeholder='publisher' name='publisher' className='form-control'/>

        <label for='character' className='form-label'>Character</label>
        <input type='text' onChange={handleInputChange} value={character} placeholder='character' name='character' className='form-control'/>

        <label for='age' className='form-label'>Age </label>
        <input type='text' onChange={handleInputChange} value={age} placeholder='age' name='age' className='form-control'/>

    </div>
  )
}
