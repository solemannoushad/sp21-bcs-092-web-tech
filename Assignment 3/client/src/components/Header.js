import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import video from '../assets/video (2160p) (5).mp4'
import { InfinitySpin } from  'react-loader-spinner'


const Header = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [output, setOutput] = useState(null);
  const [modal, setModal] = useState(false)

  useEffect(() => {
    const uploadImage = async () => {
      if (!selectedImage) {
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedImage);

      try {
        const response = await fetch('http://localhost:8000/api/img/process', {
          method: 'POST',
          body: formData,
        })

        const json = await response.json();
        console.log(json.msg)
        if(json.msg[4] == 0){
          setOutput("Deepfaked");
        }else{
          setOutput("Not Deepfaked");
        }
        

      } catch (error) {
        console.error('Error during image upload:', error);
      }
    };
    
    // Call uploadImage when selectedImage changes
    if (selectedImage) {
      uploadImage();
      setModal(true)
    }
  }, [selectedImage]);

  const handleFileChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const closeModal = ()=>{
    setModal(false)
    setOutput(null)
    setSelectedImage(null);
  }




  return (
    <>
      { modal &&
            <div className='modalMain'>
            <div className="modalContainer">
              { output != null && <i className="fa-solid fa-xmark" onClick={closeModal}></i>}
                <h2>Deep fake Detection</h2>
                <p>Please Wait, Your image is under processing.</p>
                {output == null && <InfinitySpin 
                        width='150'
                        color="#00EEFF"
                />}
                <p>{output !=null && "The image you provided is"}</p>
                <b>{output !=null && output}</b>
            </div>
        </div>
      }
      <div className="fade"></div>
      <video autoPlay muted loop id="header" className='section'>
        <source src={video} type="video/mp4"/>
      </video>
      <div className="headerContent">
        <h1 className="headerHeading headerHeading1">Digital Image <p>&nbsp;Processing</p></h1>
        <h1 className="headerHeading headerHeading2">AI Generated Image <p>&nbsp;Detection</p></h1>
        <div className="headerBenefits">
          <div className="row">
            <i className="fa-solid fa-check"></i>
            <p>85% Accurate Result</p>
          </div>
          <div className="row">
            <i className="fa-solid fa-check"></i>
            <p>Deep fake Detection</p>
          </div>
          <div className="row">
            <i className="fa-solid fa-check"></i>
            <p>Quick Processing</p>
          </div>
        </div>
        <label htmlFor="file" className="btn">
          Upload Image
        </label>
        <input className='file' type="file" name="file" id="file"
          accept=".jpg, .jpeg, .png"
          multiple={true}
          onChange={handleFileChange}
        />
      </div>
      {/* <Navbar/> */}
    </>
  )
}

export default Header
