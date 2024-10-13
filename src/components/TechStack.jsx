import Title from './global/Title';
import logoreact from '../assets/react.png';
import nextLogo from '../assets/next.png';
import nodeLogo from '../assets/node.png';
import otherLogo from '../assets/other.png';
const TechStack = () => {
  return (
    <div className='p-8 mx-8 my-24 rounded-xl bg-gradient-to-r from-blue-500/10 via-gray-800/40 to-blue-600/30'>
      <div
        aria-hidden='true'
        className='absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20'
      >
        <div className='blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700' />
        <div className='blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600' />
      </div>
      <div className='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
        <Title
          title={'Our Technology Stack'}
          subtitle={
            'We use modern technology to ensure your application is fast, efficient, and secure.'
          }
        />
        <div className='mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4'>
          <div className='group relative bg-gray-800/50 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
              <img
                src={logoreact}
                loading='lazy'
                width={200}
                height={200}
                className='w-12 h-12 rounded-full'
                style={{ color: 'transparent' }}
              />
              <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-white transition group-hover:text-secondary'>
                  ReactJs
                </h5>
                <p className='text-gray-300'>
                  A powerful JavaScript library for building dynamic and
                  interactive user interfaces with component-based architecture.
                </p>
              </div>
            </div>
          </div>
          <div className='group relative bg-gray-800/50 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
              <img
                src={nextLogo}
                loading='lazy'
                width={200}
                height={200}
                className='w-12 h-12 rounded-full'
              />
              <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-white transition group-hover:text-secondary'>
                  NextJs
                </h5>
                <p className='text-gray-300'>
                  A React framework for building fast, server-rendered
                  applications with seamless routing and optimized performance.
                </p>
              </div>
            </div>
          </div>
          <div className='group relative bg-gray-800/50 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
              <img
                src={nodeLogo}
                loading='lazy'
                width={200}
                height={200}
                className='w-12 h-12 rounded-full'
                style={{ color: 'transparent' }}
              />
              <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-white transition group-hover:text-secondary'>
                  NodeJs
                </h5>
                <p className='text-gray-300'>
                  A runtime environment for executing JavaScript code on the
                  server side, known for its non-blocking, event-driven
                  architecture.
                </p>
              </div>
            </div>
          </div>
          <div className='group relative bg-gray-800/50 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10'>
            <div className='relative space-y-8 py-12 p-8'>
              <img
                src={otherLogo}
                loading='lazy'
                width={200}
                height={200}
                className='w-12 h-12 rounded-full'
                style={{ color: 'transparent' }}
              />
              <div className='space-y-2'>
                <h5 className='text-xl font-semibold text-white transition group-hover:text-secondary'>
                  Other TechStack
                </h5>
                <p className='text-gray-300'>
                  Additional tools and frameworks tailored to specific project
                  needs, enhancing performance, security, and scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
