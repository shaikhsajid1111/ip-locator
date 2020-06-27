import React from 'react';
import '../assets/css/footer.css';
import {AiFillHeart} from 'react-icons/ai';


const Footer = () =>{
    return(
    <div className="footer-container">
        <p>Powered by <b><a rel="noopener noreferrer"  title="Powered by" href="https://ipapi.co/" target="_blank">IPAPI</a></b></p>
        <p>Made with <AiFillHeart className="heart" /> by <b>   <a rel="noopener noreferrer"  title="Follow Sajid" href="https://github.com/shaikhsajid1111">Sajid</a></b></p>
        </div>)
}


export default Footer;