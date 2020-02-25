import React, { Component } from "react";
import Navbar from "../sharedComponents/Navbar";
import HeaderCourse from "./Header";
import Courses from "./Courses";
import Footer from "../sharedComponents/Footer";
class CoursesPage extends Component {
  render() {
    return (
      <div className="coursesFullPage">
        <Navbar />
        <HeaderCourse />
        <Courses />
        <Footer />
      </div>
    );
  }
}

export default CoursesPage;
