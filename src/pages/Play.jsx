// src/components/Play.jsx
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';
import ButtonRed from '../components/buttons/buttonRed';
import ladymarianImage from '../assets/ladymarian.png';
import warsherwood from '../assets/SherwoodVersion/warsherwood.png';
import sherwoodAlpha from '../assets/SherwoodVersion/sherwoodAlpha.png';
import ieTAB from '../assets/icons/ieTAB.png';
import ActiveX_logo from '../assets/icons/ActiveX_logo.png';
// import Sidebar from '../components/layout/Sidebar';
import ButtonBrown from '../components/buttons/buttonbrown';
import PlaySherwood from '../components/Home/PlaySherwood';
// import sherwoodBrowser from '../assets/browsers/SherwoodBrowser.Ink'
console.log("este es un print desde el app.jsx");



// ACA ESTA EL EJEMPLO DEL HREF, CINORPORALO COMO LOS IMG
// import ExampleDoc from '......src/assets/files/exampleDoc.pdf'

// <a href={ExampleDoc} download="MyExampleDoc" target='_blank'>
//    <Button className={classes.navLink}>My Example Doc</Button>
// </a>
function Play() {
    return (
        <div
            className="flex flex-col min-h-screen w-full bg-fixed items-center"
            style={{ backgroundImage: `url(${ladymarianImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <PlaySherwood />
        </div>
    );
}
export default Play;