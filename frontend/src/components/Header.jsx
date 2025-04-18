import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">HealthWise</span>
          </Link>
          
          {user && (
            <div className="flex items-center gap-4">
              <div className="hidden md:block text-sm">
                <span className="text-gray-500">Welcome,</span>
                <span className="ml-1 font-medium">{user.user_metadata?.full_name || user.email}</span>
              </div>
              
              <button 
                onClick={logout}
                className="btn btn-danger text-sm py-1.5"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>
  )
}

export default Header
