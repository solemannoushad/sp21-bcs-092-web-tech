import React from 'react'
import video from '../assets/video (2160p) (5).mp4'
import logo from '../assets/pv-logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <video className='footerBack'>
            <source src={video} type="video/mp4"/>
        </video>
        <div className="fade"></div>
        <div className="footerContent">
          <div className="brandInfo">
            <div className="logo"><img src={logo} alt="" /></div>
            <p>We are proposing such  a system that can detect deepfake images to prevent people from being deepfaked. The goal is to build a website using MERN stack where user can sign up and login into their profiles and then upload an image to detect  whether the uploaded image is deepfaked or not. Now we will apply some pre-processing techniques like DCT and ELAS to pre-process the image. Then the pre-processed image  will be  passed to a deep learning model (Convolutional Neural Network). This model will classify the image as deepfaked or real.  Now on the basis of the model’s prediction we’ll evaluate the model’s performance.</p>
          </div>
          <div className="footerMenu">
            <h1 className='footerh1'>Quick Links</h1>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#">Upload</a></li>
          </div>
          <div className="newstellerMain">
            <h1 className='footerh1'>Newsteller</h1>
            <input type="text" placeholder='Email Address' />
            <div className="btn">Subscribe</div>
          </div>
        </div>
    </div>
  )
}

export default Footer
