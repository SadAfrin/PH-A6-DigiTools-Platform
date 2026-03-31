import { Play } from 'lucide-react';
import bannerImg from '../assets/banner.png'; 

const Banner = () => {
  return (
    <div className="bg-white py-12 md:py-24 overflow-hidden px-4 md:px-8 lg:px-50">
      
      <div className="flex-col-reverse lg:flex-row gap-12 flex justify-between items-center">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-purple-500 font-medium text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-5xl md:text-5xl lg:text-[72px] font-bold text-gray-900 mb-6">
            Supercharge Your <br className="hidden md:block" />
            Digital Workflow
          </h1>
          
          <p className="text-gray-500 text-sm opacity-80 md:text-lg mb-2 max-w-lg mx-auto lg:mx-0 leading-relaxed tracking-tight">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>
          
          <p className="text-gray-500 text-lg mb-8">Explore Products</p>
          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start items-center">
            {/* Primary Button */}
            <button className="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none rounded-full px-8 h-14 font-bold text-lg transition-transform hover:scale-102">
              Explore Products
            </button>
            
            
            <button className="btn btn-outline border-purple-500 text-purple-500 hover:bg-[#F5F3FF] hover:border-purple-700 rounded-full px-8 h-14 normal-case font-bold gap-2">
              <Play size={18}/> Watch Demo
            </button>
          </div>
        </div>

        
        <div className="w-full max-w-lg mx-auto">
        <img
            src={bannerImg}
            alt="Workflow"
            className="w-full rounded-xl shadow-md"
        />
        </div>

      </div>
    </div>
  );
};

export default Banner;