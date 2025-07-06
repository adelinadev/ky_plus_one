
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Mobile menu */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          
          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <h1 className="text-2xl font-bold tracking-wide">KY+1</h1>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <a href="#" className="text-gray-700 hover:text-black font-medium">КОКТЕЙЛІ</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">ПРО НАС</a>
            <a href="#" className="text-gray-700 hover:text-black font-medium">КОНТАКТИ</a>
          </nav>
          
          {/* Right icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
        
        {/* Search bar - mobile */}
        <div className="md:hidden pb-4">
          <Input placeholder="Search..." className="w-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
