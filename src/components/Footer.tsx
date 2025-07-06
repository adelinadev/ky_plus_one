
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">KY+1</h3>
            <p className="text-gray-300 text-sm">
              Тут має бути щось про кактейлі (якась крута фразочка)
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
              <Instagram className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
              <Twitter className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Про нас</a></li>
              <li><a href="#" className="hover:text-white">Коктейлі</a></li>
              <li><a href="#" className="hover:text-white">Контакти</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">CUSTOMER SERVICE</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">Контакти</a></li>
              <li><a href="#" className="hover:text-white">Про нас</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Новинки</h4>
            <p className="text-sm text-gray-300 mb-4">
              Підпишись щоб отримувати інформацію про новинки
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-black text-sm"
              />
              <button className="bg-white text-black px-4 py-2 text-sm hover:bg-gray-100">
                Підписатись
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 KY+1. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
