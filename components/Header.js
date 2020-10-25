import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
require('jquery')

const Header = () => {
  return (
    <div>
      <Head>
        <link
          rel='stylesheet'
          href='https://bootswatch.com/4/flatly/bootstrap.min.css'
        ></link>
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          integrity='sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN'
          crossOrigin='anonymous'
        />
        <style>{`
          a {
            color: #ffffff !important;
            font-weight: 600;
          }
        `}</style>
      </Head>
      <div>
        <nav className='navbar navbar-expand-lg navbar-primary bg-primary'>
          <div className='container'>
            <Link href='/'>
              <a className='navbar-brand text-white' href='#'>
                Abhishek Dhapare
              </a>
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse navbar-presense'
              id='navbarNav'
              style={{ flexDirection: 'row-reverse' }}
            >
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <Link href='/'>
                    <a className='nav-link' href='#'>
                      Home
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/about'>
                    <a className='nav-link' href='#'>
                      About
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/services'>
                    <a className='nav-link' href='#'>
                      Services
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/blog'>
                    <a className='nav-link' href='#'>
                      Blog
                    </a>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link href='/contact'>
                    <a className='nav-link' href='#'>
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
