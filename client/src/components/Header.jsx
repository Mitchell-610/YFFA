'use client'

import { useState  } from 'react'
// import Auth from '../utils/auth';


function NavTabs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  

  return (
   
    <div>
        <div>
            Financial Freedom
        </div>


        <div>
        <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
            >
            <span className="sr-only">Profile</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
            >
            <span className="sr-only">Your earnings</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>

        </div>
    </div>

  );
}

export default NavTabs;