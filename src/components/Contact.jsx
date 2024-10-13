import { Button } from '@headlessui/react';

const Contact = () => {
  return (
    <div className='relative flex flex-col items-center justify-center rounded-2xl p-24 mx-8 my-24 bg-gray-800/50 overflow-hidden'>
      {/* Infinity animation ornament */}
      <div className='absolute inset-0 overflow-hidden opacity-40'>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32'>
          <div className='absolute w-full h-full border-4 border-blue-500 rounded-full animate-[spin_10s_linear_infinite]'></div>
          <div className='absolute w-full h-full border-4 border-purple-500 rounded-full animate-[spin_10s_linear_infinite_reverse]'></div>
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 text-center'>
        <h1 className='text-3xl font-bold mb-8 max-w-2xl text-white'>
          {'Feel free to contact me to discuss and explore your amazing ideas.'}
        </h1>
        <Button
          as={'a'}
          target='_blank'
          rel='noopener noreferrer'
          href='https://wa.me/62895621576020'
          className='bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105'
        >
          Contact Me
        </Button>
      </div>
    </div>
  );
};

export default Contact;
