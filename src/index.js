import React from "react";
import ReactDom from "react-dom";
import './index.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Img from "./components/Img";
import Header from "./components/Header";


function App () {
    return(
        <>
           <div id='header'>
                <Header />
           </div>
            <div id='navbar'>
                <Navbar />
                <Img />
            </div>
            <div id='react-player'>
                <ReactPlayer url='https://fb.watch/k5blMm1Ac9/' />
            </div>
            <div id='footer'>
                <Footer />
            </div>
        </>
    );
}

ReactDom.render(<App/>, document.getElementById('root'));
