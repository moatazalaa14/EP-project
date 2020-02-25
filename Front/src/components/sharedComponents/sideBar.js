import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./sideBar.css";
class SideBarAll extends Component {
  render() {
    return (
      <>
        <div className="sidebarContent">
          <Link to="" className="circleHome">
            <p>Home</p>
          </Link>
          <Link to="/courses-page" className="circleCourses">
            <p>Courses</p>
          </Link>
          <Link to="/blogs" className="circleBlogs">
            <p>Blogs</p>
          </Link>
          <Link to="/questions-page" className="circleQues">
            <p>Ques</p>
          </Link>
        </div>
      </>
    );
  }
}
export default SideBarAll;
