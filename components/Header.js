import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
          crossorigin='anonymous'
        />
        <style>{`
          a {
            color: #ffffff !important;
            font-weight: 600;
          }
        `}</style>
      </Head>
      <div>
        <nav class='navbar navbar-expand-lg navbar-primary bg-primary'>
          <div class='container'>
            <Link href='/'>
              <a class='navbar-brand text-white' href='#'>
                Abhishek Dhapare
              </a>
            </Link>
            <button
              class='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div
              class='collapse navbar-collapse navbar-presense'
              id='navbarNav'
              style={{ flexDirection: 'row-reverse' }}
            >
              <ul class='navbar-nav'>
                <li class='nav-item'>
                  <Link href='/'>
                    <a class='nav-link' href='#'>
                      Home
                    </a>
                  </Link>
                </li>
                <li class='nav-item'>
                  <Link href='/about'>
                    <a class='nav-link' href='#'>
                      About
                    </a>
                  </Link>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Services
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Blog
                  </a>
                </li>
                <li class='nav-item'>
                  <a class='nav-link' href='#'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
