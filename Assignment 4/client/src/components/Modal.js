import React from 'react'
import { InfinitySpin } from  'react-loader-spinner'


const Modal = (props) => {
  return (
    <div className='modalMain'>
        <div className="modalContainer">
            <h2>Deep fake Detection</h2>
            <p>Please Wait, Your image is under processing.</p>
            <InfinitySpin 
                    width='150'
                    color="#00EEFF"
            />
            <p>The image you provided is</p>
            <b>Deepfaked</b>
        </div>
    </div>
  )
}

export default Modal
