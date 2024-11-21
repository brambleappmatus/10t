import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="public/images/logo.svg"
              alt="10t"
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="flex items-center gap-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-60 pl-10 pr-4 py-2 text-sm rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center gap-6">
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/pay" className="text-gray-600 hover:text-gray-900">Pay Me</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}