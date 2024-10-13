import { Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const Background = ({ children }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(true);
  }, []);
  return (
    <Transition show={open}>
      <section className='relative overflow-hidden shadow-xl shadow-purple-700 transition duration-[2000ms] ease-in data-[closed]:opacity-0 sm:bg-gradient-to-r bg-gradient-to-tr from-indigo-500 via-blue-950 to-pink-500 rounded-2xl p-8 mx-8 my-24'>
        {children}
      </section>
    </Transition>
  );
};

export default Background;
