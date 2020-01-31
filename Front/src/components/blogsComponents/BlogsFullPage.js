import React from "react";
import Navbar from './../sharedComponents/Navbar';
import Header from "./Header";
import Blogs from './Blogs';
import Footer from './../sharedComponents/Footer';
const BlogsFullPage =()=>{
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Blogs />
      <Footer />
    </React.Fragment>
  );
}

export default BlogsFullPage;
