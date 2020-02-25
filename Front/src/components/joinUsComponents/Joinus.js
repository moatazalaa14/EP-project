import React, { Component } from 'react'
import "./joinUs.css"
import { Link } from "react-router-dom";
import SideBarAll from './../sharedComponents/sideBar';
export default class Joinus extends Component {
    render() {
        return (
                <>
                <SideBarAll />
            <div className="joinUsSection">
                <h1 className="headjoin">Lorem ipsum dolor sit amet, consectetur</h1>
                <Link to="/LogIn">
                <button className="join">Join Us its free</button>
                </Link>
            </div>
            </>
        )
    }
}
