import React from 'react'

export default function Header() {
  return (
    <header className="site-header" role="banner">
      {/* Brand spine motif matching the macro dashboard */}
      <div className="brand-spine" />

      <div className="site-header__inner">
        {/* Logos */}
        <div className="site-header__logos">
          <img
            src="/indiamap.png"
            alt="India emblem with Gujarat focus"
            className="site-header__logo-img"
          />
          <img
            src="/gritlogo.jpg"
            alt="GRIT — Gujarat Rajya Institution for Transformation logo"
            className="site-header__logo-img site-header__logo-img--grit"
          />
        </div>

        {/* Title text */}
        <div className="site-header__text">
          <h1 className="site-header__title">VIKSIT GUJARAT @ 2047</h1>
          <p className="site-header__subtitle">
            Gujarat Rajya Institution for Transformation (GRIT)
          </p>
        </div>
      </div>
    </header>
  )
}
