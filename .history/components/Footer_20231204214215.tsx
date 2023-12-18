import React from 'react'
import Link from 'next/link'
import "../styles/Footer.scss"

const Footer = () => {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        <h3>GET IN TOUCH</h3>
        <Link href="mailto:contact@cabricenginerring.com" className='contact__email'>CONTACT@CABRICENGINEERING.COM</Link>
        <div className="footer__links">
          <Link href="/">DESIGNED BY BETTER MARQUE</Link>
          <div className="f-social__links">
            <Link href="/">INSTAGRAM</Link>
            <Link href="/">X</Link>
            <Link href="/">FACEBOOK</Link>
          </div>
          {/* <span>{year} ALL RIGHTS RESERVED</span> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer