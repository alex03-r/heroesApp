import React, { useContext } from 'react'
import '../styles/card.css'
import { Alert } from './Alert'
import { HeroContex } from '../contex/HeroContex'


export const Form = () => {


  // const [imgUpload, setimgUpload] = useState(null)
  // const [showAlert, setshowAlert] = useState(false)

  // const [formValue, setformValue] = useState({
  //   superHero: '',
  //   publisher: '',
  //   character: '',
  //   age: ''
  // })

  const { formValue, handleInputChange , callingTwoApi, setimgUpload , uploadImg ,imgUpload,  setformValue, showAlert,  handleAlert , url } = useContext(HeroContex);


  // const handleInputChange = ({ target }) => {
  //   setformValue({
  //     ...formValue,
  //     [target.name]: target.value
  //   })

  // }



  const { superHero, publisher, character, age  } = formValue;

  const handleAddHero = async  () => {

    //  url = await uploadImg()

  //   let url = await uploadImg()
  //   //.then(im => alert(im) );

  //   // let url =  uploadImg().then(im =>  );
  // //   const imgFormData = new FormData();
  // //   imgFormData.append('upload_preset','react-heroes');
  // //   imgFormData.append('file', imgUpload);

  // //   const heroPayload = {
  // //     method: 'POST',
  // //     headers: {
  // //       'Content-Type': 'application/json'},
  // //     body: JSON.stringify(formValue)
  // //   }  

  //   console.log(url)

    // setformValue({
    //   ...formValue,
    //   imgUrl:url
    // })

    // console.log(imgUpload)

     uploadImg()

     setformValue({
      ...formValue,
      imgUrl:url
     })

     console.log(formValue);
  //   const cloudPayload = {
  //     method:'POST',
  //       body: imgFormData       
  //   }

  //   const response = await fetch("http://localhost:4000/api", heroPayload);
  //   const responseCloud = await fetch('https://api.cloudinary.com/v1_1/dlsc2062n/upload', cloudPayload )

  //  const twoCalls = await Promise.all([response.json() , responseCloud.json() ]);

      console.log('hello...')
      callingTwoApi()
      
     console.log(formValue);
      handleAlert();      

      setTimeout(() => {

      setformValue({
        // idCategory: '',
        superHero: '',
        publisher: '',
        character: '',
        age: '',
      })
    }, 3000)


  }

  // const handleAlert = () => {

  //   setshowAlert(true)
  //   setTimeout(() => {
  //     setshowAlert(false)
  //   }, 3000);

  // }

  return (


    <div className='container w-75 justify-content-center'>

      {showAlert ? <Alert name={superHero} type={'success'} /> : null}
    
      <label for='hero' className='form-label'>Id Of category</label>
      {/* //(e) => setimgUpload(e.target.files[0]) */}
      <input type='file' onChange={ (e) => setimgUpload(e.target.files[0]) } className='form-control' />

      <label for='hero' className='form-label'>Super Hero</label>
      <input type='text' onChange={handleInputChange} value={superHero} placeholder='name' name='superHero' className='form-control' />

      <label for='Publisher' className='form-label'>Publisher</label>
      <input type='text' onChange={handleInputChange} value={publisher} placeholder='publisher' name='publisher' className='form-control' />

      <label for='character' className='form-label'>Character</label>
      <input type='text' onChange={ handleInputChange} value={character} placeholder='character' name='character' className='form-control' />

      <label for='age' className='form-label'>Age </label>
      <input type='text' onChange={handleInputChange} value={ age } placeholder='age' name='age' className='form-control' />

      <button onClick={handleAddHero} className='btn btn-primary mt-2'>Add a Hero</button>

    </div>
  )
}
