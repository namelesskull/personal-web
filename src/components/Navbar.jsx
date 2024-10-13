/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Menu } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo-extend.png';

const NavItem = ({ text, items }) => (
  <Menu as='div' className='relative inline-block text-left'>
    <Menu.Button className='inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 rounded-md transition-colors duration-200'>
      {text}
      <ChevronDown className='ml-2 -mr-1 h-5 w-5' aria-hidden='true' />
    </Menu.Button>
    <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-700 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
      <div className='px-1 py-1'>
        {items.map((item, index) => (
          <Menu.Item key={index}>
            {({ active }) => (
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={item.href}
                className={`${
                  active ? 'bg-gray-700 text-white' : 'text-gray-300'
                } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors duration-200`}
              >
                {item.title}
              </a>
            )}
          </Menu.Item>
        ))}
      </div>
    </Menu.Items>
  </Menu>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 z-20'>
      <nav className=' bg-gradient-to-r from-gray-900/50 via-gray-800 to-gray-900 rounded-lg max-w-7xl mx-4 sm:mx-auto my-4'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <img src={logo} alt='Logo' className='h-8' />
              </div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4'>
                  <NavItem text='Home' items={[{ title: 'Dashboard' }]} />
                  <NavItem
                    text='Contact'
                    items={[
                      { title: 'Email', href: 'mailto:khaqulhudaa@gmail.com' },
                      {
                        title: 'Whatsapp',
                        href: 'https://wa.me/62895621576020',
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className='md:hidden' id='mobile-menu'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <NavItem text='Home' items={['Dashboard', 'Analytics']} />
              <NavItem text='Contact' items={['Email', 'Phone', 'Chat']} />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
