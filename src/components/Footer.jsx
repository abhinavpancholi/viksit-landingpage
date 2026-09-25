import React from 'react'
import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__bottom">
        <span className="font-medium text-center sm:text-left">
          Note: The data and references shown are dummy and representative in nature, intended solely for demonstration purposes.
        </span>
        {/* <span>Source: Viksit Rajya @2047 Dashboard</span>
        <span className="site-footer__separator">•</span>
        <span>The data and references shown are dummy and representative in nature, intended solely for demonstration purposes</span> */}
        <span className="site-footer__separator">•</span>
        <span className="font-bold text-navy-800 text-center sm:text-right uppercase tracking-wider text-[10px]">
          VIKSIT RAJYA @2047 Dashboard
        </span>
      </div>
    </footer>
  )
}
