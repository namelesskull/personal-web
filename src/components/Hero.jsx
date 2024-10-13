import Background from './global/Background';
import logo from '../assets/square-extend.png';
import Mascot from './Mascot';
import { Button } from '@headlessui/react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <Background>
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-r from-pink-500/50 via-blue-500/50 to-purple-500/50 animate-gradient-x'></div>

      {/* Floating elements */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className='absolute rounded-full bg-white opacity-20 animate-float'
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

      {/* Content */}
      <div className='relative z-10'>
        <div className='hidden sm:flex justify-between'>
          <img className='h-1/4 w-auto' src={logo} alt='logo' />
          <Mascot className='animate-pulse' />
        </div>
        <h1 className='text-white text-center font-semibold text-4xl sm:text-6xl mt-8 animate-fade-in-down'>
          Crafting <span className='text-orange-400'>Your Ideas</span> into
          Digital Masterpieces
        </h1>
        <p className='text-center text-gray-100 sm:text-xl mt-2 animate-fade-in-up'>
          {
            '"Specializing in modern frameworks and technologies to build secure, efficient, and responsive web solutions."'
          }
        </p>
        <div className='w-full flex justify-center mt-4'>
          <Button
            as='a'
            target='_blank'
            rel='noopener noreferrer'
            href='https://wa.me/62895621576020'
            className='inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-pink-700 to-blue-800 py-1.5 px-3 text-lg hover:text-xl font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white animate-pulse'
          >
            {"Let's Collaborate"}{' '}
            <span>
              <Play />
            </span>
          </Button>
        </div>
      </div>
    </Background>
  );
};

export default Hero;
