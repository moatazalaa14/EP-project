import React,{Component} from "react"

import "./sideBar.css"
class SideBarAll extends Component{
render(){
    return( 
        <> 
            <div className="sidebarContent">
                 <div className="circleHome">
                     <p>Home</p>
                </div>
                <div className="circleCourses">
                    <p>Courses</p>
                </div>
                <div className="circleBlogs">
                    <p>Blogs</p>
                </div>
                <div className="circleQues">
                    <p>Ques</p>
                </div>
            </div>



        </>
    )
} 
}
export default SideBarAll