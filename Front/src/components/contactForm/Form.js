import React, {Component} from "react"
import "./Form.css"
import axios from "axios"
class FormCon extends Component{
    submitHandling(e){
        e.preventDefault()
    }
    render(){
                   
        return(
            <>
                <form onSubmit={this.submitHandling} method="POST" action="localhost:8000/" className="conForm">
                    <label>Name</label>
                    <br />
                    <input type="text"  name="username"/>
                    <br />
                    <label>E-mail</label>
                    <br />
                    <input type="email" name="email" />
                    <br />
                    <label>Subject</label>
                    <br />
                    <input type="text" name="subject" />
                    <br />
                    <label>Your message </label>
                    <br />
                    <textarea name="message" className="textcontact"></textarea>
                    <br />
                    <button>Send</button>
                </form>


            </>
        )
    }
}
export default FormCon