import React  from "react"
import "./Contact.css"
import FormCon from './Form';
import Navbar from './../sharedComponents/Navbar';
import Footer from './../sharedComponents/Footer';
const displayFromHandling=(e)=>{
   heading.current.style.padding ="5vh 0px 15vh 0px"; 
   form.current.style.display ="block"
   circle.current.style.width = "700px"
   circle.current.style.height = "700px"
}
const heading =React.createRef()
const form  =React.createRef()
const circle = React.createRef()
const Contact =()=>{
    return(
        <>
            <Navbar />
            <header id="contactheader">
          <h1 className="headingcontact">Contact Us</h1>
          <p>
            In the history of modern astronomy, there is probably no one greater
            leap forward than the building and launch of the space telescope
            known as the Hubble.
          </p>
          <p className="down">
            <a href="#contactform">
              <i className="fas fa-angle-double-down"></i>
            </a>
          </p>
        </header>
            <div id ="contactform">
            <div className="contactCircle" onClick={displayFromHandling} ref={circle} >
                <h1 ref={heading}>Contact Us</h1>
            <div className="ContactForm" ref={form}>
                <FormCon />
            </div>
            </div>
            </div>
            <Footer />

        </> 
    )
}
export default Contact