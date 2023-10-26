import React from "react"
import '../App.css'

import phoneLogo from "../../images/phone-icon.png";
import mailLogo from "../../images/mail-icon.png";

export default function Contact(props) {

    let {img, name, phone, email} = props;

    return (
        <div className="contact-card">
            <img src={img} />
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phoneLogo} />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={mailLogo} />
                <p>{email}</p>
            </div>
        </div>
    );
}