//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock
} from "@fortawesome/free-regular-svg-icons";


import "../styles/index.css";


const Counter = (props) => {
	return (
            <div className="text-center">
                <div className="container m-5 bg-secondary ">
                <div className="jumbotron jumbotron-fluid d-inline-block text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-1 bg-dark m-2" style={{width: "6rem", height: "8rem"}}>
                                <h1 className="display-1"><FontAwesomeIcon icon={faClock} /></h1>
                            </div>
                            <div className="col-1 bg-dark m-2" style={{width: "6rem", height: "8rem"}}>
                                <h1 className="display-1">{props.digitSix % 10}</h1>
                            </div> 
                            <div className="col-1 bg-dark m-2" style={{width: "6rem", height: "8rem"}}>
                                <h1 className="display-1">{props.digitFive % 10}</h1>
                            </div> 
                            <div className="col-1 bg-dark m-2" style={{width: "6rem", height: "8rem"}}>
                                <h1 className="display-1">{props.digitFour % 10}</h1>
                            </div> 
                            <div className="col-1 bg-dark m-2" style={{width: "6rem", height: "8rem"}}>
                                <h1 className="display-1">{props.digitThree % 10}</h1>
                            </div> 
                            <div className="col-1 bg-dark m-2" style={{width: "6rem", height: "8rem"}}>
                                <h1 className="display-1">{props.digitTwo % 10}</h1>
                            </div>  
                            <div className="col-1 bg-dark m-2" style={{width: "6rem", height: "8rem"}}>
                                <h1 className="display-1">{props.digitOne % 10}</h1>
                            </div>       
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};

Counter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
}


let counter = 0;
setInterval(function(){
    const six = Math.floor(counter/100000);
    const five = Math.floor(counter/10000);
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two= Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(six, five, four, three, two, one)
    counter++;

    ReactDOM.render(<Counter digitSix = {six} digitFive = {five} digitFour = {four} digitThree = {three} digitTwo = {two} digitOne = {one} />, document.querySelector("#app"));

},1000);


