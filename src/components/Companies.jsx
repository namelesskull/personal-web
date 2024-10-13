import jago from '../assets/jago.png';
import naratama from '../assets/naratama.png';
const Companies = () => {
  return (
    <section className='w-full flex flex-col justify-center items-center dark:bg-gray-900/20 p-8'>
      <h1 className='text-center text-white text-2xl'>Our Happy Customers</h1>
      <div className='max-w-screen-md px-4 mx-auto my-8'>
        <div className='grid grid-cols-2 gap-2 text-gray-500 sm:gap-12 dark:text-gray-400'>
          <a className='flex items-center lg:justify-center' target='_blank'>
            <img
              src={jago}
              alt='jagocpns'
              className='grayscale opacity-40 hover:grayscale-0 hover:opacity-100'
            />
          </a>
          <a className='flex items-center lg:justify-center' target='_blank'>
            <img
              src={naratama}
              alt='naratama'
              className='grayscale opacity-40 hover:grayscale-0 hover:opacity-100'
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Companies;
