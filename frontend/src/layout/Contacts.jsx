import React from 'react';
import "../styles/Contacts.css";
import Contact from '../components/Contact';

const Contacts = (props) => {
    return (
        <div className="contacts-main">
            <Contact name="Renaud" img={require('../resources/blank_profile.png')}></Contact>
            <Contact name="Renaud" img={require('../resources/blank_profile.png')}></Contact>
            <Contact name="Renaud" img={require('../resources/blank_profile.png')}></Contact>
            <Contact name="Renaud" img={require('../resources/blank_profile.png')}></Contact>
        </div>

    );
}

export default Contacts;