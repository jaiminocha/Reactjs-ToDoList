import React from 'react';

function Footer (){
    let customStyles = {
        position: 'absolute',
        top: 'auto',
        height: '10vh',
        width: '100%',
        display: 'block',
        textAlign: 'center'
    }
    return (
        <>
        <footer id="footer" className="bg-dark text-light py-3" style={customStyles}>Created by Jai Minocha &copy; 2022</footer>
        </>
    );
}

export default Footer;