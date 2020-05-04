import React, { Component } from 'react'
import './Appbar.css'
import logo from '../../logo.png'

class Appbar extends Component {


    render() {

        return (
            <div className="appbar">
                <div style={{ display: "inline-flex", marginRight: '160px' }}>
                    <div className="iconStyle">
                        <i className="fa fa-bars"></i>
                    </div>
                    <img src={logo} alt='logo'></img>
                    {/* <div> NOTES </div> */}
                </div>
                <div className="search">
                    <button className="icon-search">
                        <i className="fa fa-search"></i>
                    </button>
                    <input className="searchtext"
                        placeholder="Search" type="text"></input>
                    <button className="in-close">
                        <i className="fa fa-times"></i>
                    </button>
                </div>
                {/* <div className="icons-set" style={{ display: "inline-flex" }}>
                    <div className="iconStyle">
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="iconStyle">
                        <i class="fa fa fas-redo"></i>
                    </div>
                    <div className="iconStyle">
                        <i class="fa fa-redo-alt"></i>
                    </div>
                </div> */}
            </div >
        )
    }
}

export default Appbar
