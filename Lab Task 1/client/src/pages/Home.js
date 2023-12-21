import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FooterBar from '../components/FooterBar'
import Loading from '../components/Loading'
import ScrollReveal from 'scrollreveal'
import TopBtn from '../components/TopBtn'
import Notification from '../components/Notification'
import Blog from '../components/Blog'
import { useLocation } from 'react-router-dom'


const Home = () => {

  const location = useLocation();

  useEffect(() => {
    // Parse the section ID from the URL
    const sectionId = location.hash.substring(1);

    // Scroll to the specified section when the component mounts
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  useEffect(() => {

    ScrollReveal({
      // reset: true,
      distance: '80px',
      duration: 1500,
      delay: 150 
     });
  
    ScrollReveal().reveal('.headerHeading1, .sectionh1' , {origin: 'top'});
    ScrollReveal().reveal('.headerHeading2, .text, .mem3' , {origin: 'left'});
    ScrollReveal().reveal('.img, .mem1' , {origin: 'right'});
    ScrollReveal().reveal('.mem2, .form' , {origin: 'bottom'});
    ScrollReveal().reveal('.headerBenefits' , {origin: 'center'});
  } , [])

  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(false);
  } , [])

  useEffect(() => {
    let sections = document.querySelectorAll('.section');
    let navLinks = document.querySelectorAll('.menu li a');
  
  
    window.onscroll = ()=>{
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
  
        if(top >= offset && top < offset + height){
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
          })
        }
      })
    }

  } , [])

  return (
    <>
        <TopBtn/>
        { loading && <Loading/>}
        <Header/>
        <About/>
        <Team/>
        <Blog/>
        <Contact/>
        <Footer/>
        <FooterBar/>
        <Notification message="Message Sent"/>
    </>
  )
}

export default Home
