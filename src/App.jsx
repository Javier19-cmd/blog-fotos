import './App.css'
import { useEffect, useState } from 'react';
import image from './fotos/1.jpg';
import image2 from './fotos/2.jpg';
import image3 from './fotos/3.jpg';
import image4 from './fotos/4.jpg';
import image5 from './fotos/5.jpg';
import image6 from './fotos/6.jpg';
import image7 from './fotos/7.jpg';
import image8 from './fotos/8.jpg';
import image9 from './fotos/9.jpg';
import image10 from './fotos/10.jpg';
import image11 from './fotos/11.jpg';
import image12 from './fotos/12.jpg';
import image13 from './fotos/13.jpg';
import image14 from './fotos/14.jpg';
import image15 from './fotos/15.jpg';
import image16 from './fotos/16.jpg';
import image17 from './fotos/17.jpg';
import image18 from './fotos/18.jpg';

function App() {

  const [imageList, setImageList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    setImageList([image, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18]);
    
  }, []);

  const handleImageClick = (imageUrl) => {
    setModalOpen(true);
    setSelectedImage(imageUrl);
  };


  const getEffectClass = (index) => {
    // Devuelve una clase específica de efecto según el índice
    if (index % 5 === 0) {
      return 'zoom-in';
    } else if (index % 5 === 1) {
      return 'grayscale';
    } else if (index % 5 === 2) {
      return 'blur';
    } else if (index % 5 === 3) {
      return 'zoom-out';
    } else if (index % 5 === 4) {
      return 'rotate';
    }else {
      return 'zoom-in';
    }
  };

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
          <img 
            key={index} 
            src={image} 
            alt={`Image ${index}`}
            className={`effect-${getEffectClass(index)}`}
            onClick={() => handleImageClick(image)}
            />
        ))}

        {modalOpen && (
          <div className="modal-background" onClick={() => setModalOpen(false)}>
            <img src={selectedImage} alt="Full Image" className="full-image" />
          </div>
        )}

      </div>
    </>
  )
}

export default App
