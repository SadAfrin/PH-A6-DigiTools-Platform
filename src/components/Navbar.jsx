import { ShoppingCart, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4 md:px-8 lg:px-50 shadow-sm sticky top-0 z-50 h-22">
      <div className="navbar-start">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <Menu size={24} /> 
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                <li><a>Products</a></li>
                <li><a>Features</a></li>
                <li><a>Pricing</a></li>
                <li><a>Testimonials</a></li>
                <li><a>FAQ</a></li>
            </ul>
        </div>
        <a className="text-3xl font-bold text-primary flex items-center ml-2">
            <span className="bg-gradient-to-r from-blue-500 to-purple-800 bg-clip-text text-transparent">DigiTools</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-lg">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors md:ml-8">
        <ShoppingCart size={20} className="text-gray-900" />
        </div>
    
        <span className="font-medium hover:font-bold transition-all text-lg">Login</span>

        <a className="btn bg-gradient-to-r from-blue-500 to-purple-800 hover:from-blue-600 hover:to-purple-900 text-white border-none rounded-full px-6 text-lg">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;