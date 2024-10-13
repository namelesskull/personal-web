import Title from './global/Title';

const WhyUs = () => {
  return (
    <section className='relative overflow-hidden text-white body-font bg-gray-900/60 mx-8 rounded-xl p-6'>
      {/* Particle animation background */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className='absolute bg-indigo-500 rounded-full opacity-10 animate-particle'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='relative z-10'>
        <Title
          title={'Our Advantages'}
          subtitle={'The Benefits of Working with Us'}
        />
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4 text-center'>
            {/* Advantage cards */}
            {[
              {
                title: 'Modern Technologies',
                description:
                  'Our team is skilled in using the latest technologies to deliver innovative and up-to-date solutions tailored to your needs.',
                icon: (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                  />
                ),
              },
              {
                title: 'Tailored Solutions',
                description:
                  'We understand that every business is unique. Our solutions are customized to meet your specific requirements and challenges.',
                icon: (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z'
                  />
                ),
              },
              {
                title: 'Dedicated Support',
                description:
                  'We provide ongoing support even after project completion, ensuring your systems run smoothly and addressing any issues that arise.',
                icon: (
                  <>
                    <path d='M3 18v-6a9 9 0 0118 0v6' />
                    <path d='M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z' />
                  </>
                ),
              },
              {
                title: 'Proven Track Record',
                description:
                  'With numerous successful projects and satisfied clients, our portfolio reflects our commitment to excellence and quality.',
                icon: <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />,
              },
            ].map((advantage, index) => (
              <div key={index} className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                <div className='border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110 bg-gray-800/50 backdrop-blur-sm'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  >
                    {advantage.icon}
                  </svg>
                  <h2 className='title-font font-medium text-3xl text-white'>
                    {advantage.title}
                  </h2>
                  <p className='leading-relaxed'>{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
