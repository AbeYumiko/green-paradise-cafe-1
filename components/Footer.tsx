import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Green Paradise Cafe</h3>
          <p className="text-gray-300 text-sm">
            Bringing nature's serenity to your urban lifestyle.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4 uppercase text-sm tracking-wider">Stay Connected</h4>
          <div className="flex space-x-4">
             {/* Social placeholders */}
             <div className="w-8 h-8 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer"></div>
             <div className="w-8 h-8 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer"></div>
             <div className="w-8 h-8 bg-white/20 rounded-full hover:bg-white/40 cursor-pointer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};