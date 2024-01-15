import './App.css'
import { useEffect, useState } from 'react';
import image from './fotos/1.jpg';
import image2 from './fotos/2.jpg';
import image3 from './fotos/3.jpg';
import image4 from './fotos/4.jpg';
import image5 from './fotos/5.jpg';
import image6 from './fotos/6.jpg';

function App() {

  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    setImageList([image, image2, image3, image4, image5, image6]);
    
  }, []);

  console.log(imageList);

  return (
    <>
      
      <div className='title'>
      <h1>¡Hola!, bienvenid@ a mi blog de fotografía</h1>
      </div>

      <div className="sub-title">
        <p>
          Por: Javier Sebastián Valle Balsells
        </p>
      </div>

      <div className="image-gallery">
        {imageList.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </>
  )
}

export default App
