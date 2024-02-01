import React from "react";
import Card from "./Card";
import { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

function Testimonials(props) {
    let dost = props.dost;
    const[index,setIndex] = useState(0);

    function HandleLeftbtn()
    {
        if(index == 0 )
        {
            console.log(dost.length - 1);
            setIndex(dost.length -1);
        }
        else{
            setIndex(index - 1);
        }
    }

    function HandleRightbtn()
    {
        if(index == dost.length - 1 )
        {
            setIndex(0);
        }
        else
        {
            setIndex(index + 1);
        }
    }

    function Handlesurprisebtn()
    {
        let random = Math.floor( Math.random() * dost.length);
        console.log(random);
        setIndex(random);
    }
    return (
        <div className="box">
            <div>
                <Card data={dost[index]} index = {index}></Card>
            </div>
            <div className="btns">
            <div className="leftright" >
                <button onClick={HandleLeftbtn}  className="leftbtn" ><FaLessThan></FaLessThan></button>
                <button onClick={HandleRightbtn} className="rightbtn"><FaGreaterThan></FaGreaterThan></button>
            </div>
            <div>
                <button onClick={Handlesurprisebtn} className="surpriseme">Surprise Me</button>
            </div>
            </div>
        </div>
    )

}

export default Testimonials;