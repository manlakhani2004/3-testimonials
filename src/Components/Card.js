import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";
import harsh from './img/harsh.jpg';
import mayank from './img/mayank.jpg';
import denish from './img/denish.jpg';
import brijesh from './img/brijesh.jpg';
import bhargav from './img/bhragav.jpg';

const img = [harsh,mayank,denish,brijesh,bhargav];

function Card(props) {
    let review = props.data;
    let index = props.index;
    return (
        <div className="box-content">
            <div className="circle"></div>
            <img  className="photos" src={img[index]} alt="not found"></img>
            <div>
                <h1 className="dostname">{review.name}</h1>
                <p className="dostjob">{review.job}</p>
            </div>

            <div>
                <div className="quotes"><BiSolidQuoteLeft></BiSolidQuoteLeft></div>
                <p className="dostline">
                    {review.desc}
                </p>
                <div className="quotes"><BiSolidQuoteRight></BiSolidQuoteRight></div>
            </div>

        </div>
    )

}

export default Card;