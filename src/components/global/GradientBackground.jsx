/* eslint-disable react/prop-types */
const GradientBackground = ({ children }) => {
  return (
    <>
      <div className='min-h-screen bg-black relative overflow-hidden'>
        {/* Gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20'></div>
        {/* Subtle gradient shapes */}
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl'></div>
          <div className='absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-r from-teal-600 to-green-600 rounded-full blur-3xl'></div>
        </div>

        {/* Content container */}
        <div className='relative z-10 max-h-screen overflow-y-auto'>
          {children}
        </div>
      </div>
    </>
  );
};

export default GradientBackground;
