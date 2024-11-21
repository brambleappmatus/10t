import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?auto=format&fit=crop&q=80" 
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12">
          Hi, I'm Matúš. I design interfaces and build web3 products.
        </h1>
        
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search my work"
              className="w-full px-6 py-4 pl-12 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}