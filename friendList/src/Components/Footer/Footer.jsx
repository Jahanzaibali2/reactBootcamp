import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-content">
            <p>&copy; 2024 Your Friendlist and Pokemons. All rights reserved.</p>
            <ul className="social-media">
                <li><a href="https://www.facebook.com">Facebook</a></li>
                <li><a href="https://www.twitter.com">Twitter</a></li>
                <li><a href="https://www.instagram.com">Instagram</a></li>
            </ul>
        </div>
    </div>
);
}
