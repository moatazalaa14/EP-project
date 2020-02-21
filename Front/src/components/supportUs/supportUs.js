import React ,{Component} from "react";
import "./supportUs.css"
import Navbar from './../sharedComponents/Navbar';
import Footer from './../sharedComponents/Footer';
class Support extends Component{
    render(){
        return(
            <>
                <Navbar />
                    <div className="All">
                        <img src="" />
                        <div className="teaCard">
                            <h1>support us with a cup of tea</h1>

                        </div>  
                    </div>
                <Footer />
            </>
        )
    }
}