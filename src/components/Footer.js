import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

library.add(fab)

export const Footer = () => {
    return (
        <div>
            <footer>
            <p>Copyright &copy; Nasreen Khalid 2021</p>
            <div className="footer-icons">
            <a href="http://www.github.com/NasreenKhalid" target="_blank"><FontAwesomeIcon icon={["fab","github"]}/></a>
            <a href="http://www.facebook.com/nasreen.shehzad" target="_blank"><FontAwesomeIcon icon={["fab","facebook"]}/></a>
            <a href="https://twitter.com/Nasreen68990317" target="_blank"><FontAwesomeIcon icon={["fab","twitter"]}/></a>
            
            </div>
            </footer>
            
        </div>
    )
}
