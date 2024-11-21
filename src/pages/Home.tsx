import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Hi, I'm Matúš and this is my personal page
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/pay"
              className="group inline-flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Pay Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/about"
              className="group inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              About Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}