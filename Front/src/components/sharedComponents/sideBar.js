import React,{Component} from "react"
import {Link} from "react-router-dom"
import "./sideBar.css"
class SideBarAll extends Component{
render(){
    return( 
        <> 
            <div className="sidebarContent">
                <Link to="/">
                    <div className="circleHome">
                        <p>Home</p>
                    </div>
                </Link>
                <Link to="/courses-page">
                    <div className="circleCourses">
                        <p>Courses</p>
                    </div>
                </Link>
                <Link to="/blogs">
                    <div className="circleBlogs">
                        <p>Blogs</p>
                    </div>
                </Link>
                <Link to="/questions-page">
                    <div className="circleQues">
                        <p>Ques</p>
                    </div>
                </Link>
            </div>



        </>
    )
} 
}
export default SideBarAll