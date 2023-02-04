import React from 'react';
import '../styles/Contact.css';

const Contact = (props) => {
    /**
     * props:
     *  - name: name of this contact
     *  - img: path to this contact's profile picture
     */

    return (
        <div className="contact-main">
            <img className="contact-img" src={props.img}></img>
            <p className="contact-label">{props.name}</p>
        </div>
    )
}

export default Contact;