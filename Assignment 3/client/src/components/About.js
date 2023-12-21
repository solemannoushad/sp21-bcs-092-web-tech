import React from 'react'
import img from '../assets/WhatsApp Image 2023-12-13 at 14.59.05_d87ececd.jpg'

const About = () => {
  return (
    <div className="aboutMain section" id='about'>
        <h1 className="sectionh1">
            About&nbsp; <p>Project</p>
        </h1>
        <div className="aboutContent">
            <div className="text">
                <h2>DeepFake  &nbsp; <p>Detection</p></h2>
                <p>Now-a-days , images are the most popular type of content that been shared on social media, news channels, magazines, and newspapers. And the deep fake technology is making it possible to create increasingly realistic and convincing fake images of people and events that never happened. Deepfakes can be used to spread fake news, disgrace someone , affect someone’s reputation. So, the need of the hour is to make such a system that protects people from being misled by false news and deep fakes.
                Image Processing is an  important tool that can play a part either creating deepfakes or detecting deepfakes. Image processing techniques can help us to detect deep fake images by detecting inconsistencies in an image and unnatural facial features in an image. There are different feature extraction techniques such as DCT, ELAS and SIFT that are helpful in detecting deepfakes.
                A systems that is capable of detecting deepfakes is the need of the hour. This system can either just be a trained model that can be integrated into social media platforms and can be integrated into a website that can be used by multiple users ( Journalists, News Channels, Law and Enforcement Authorities and a simple layman).

                </p>
            </div>
            <div className="img">
                <img src={img} alt="DeepFake Detection" />
            </div>
        </div>
    </div>
  )
}

export default About
