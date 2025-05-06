import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <header className={'bg-gray-500 text-white py-4 text-right shadow-md'}>
        <div className="flex justify-left items-center space-x-4  mx-4">
          <img src="src\assets\434x0w.webp" className="h-12 w-12 rounded-full" />
          <h1 className="text-2xl font-bold mt-4">Personality Application</h1>
        </div>
        <nav className="">
          <div className="space-x-4">
        
          <Link to="/" className="hover:underline">Home</Link>
         <Link to="/results" className="hover:underline">Results</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/feedback" className="hover:underline">Feedback</Link>
          <Link to="/teammember" className="hover:underline">Team</Link>
          </div>
        </nav>
      </header>
  );
}

export default Header
