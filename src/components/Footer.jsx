import { Github, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/logo-extend.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative bg-gray-900 text-white py-8 overflow-hidden'>
      {/* Animated background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className='absolute rounded-full bg-blue-500 animate-float'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                animationDuration: `${Math.random() * 10 + 5}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer content */}
      <div className='container mx-auto px-4 relative z-10'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <p className='text-sm'>
              &copy; {currentYear} khaqul.tech. All rights reserved.
            </p>
          </div>
          <div className='flex space-x-4'>
            <a
              href='#'
              className='text-white hover:text-blue-400 transition-colors duration-300'
            >
              <Github size={24} />
            </a>
            <a
              href='#'
              className='text-white hover:text-blue-400 transition-colors duration-300'
            >
              <Linkedin size={24} />
            </a>
            <a
              href='#'
              className='text-white hover:text-blue-400 transition-colors duration-300'
            >
              <Twitter size={24} />
            </a>
            <a href='/'>
              <img src={logo} alt='logo' className='h-6' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
