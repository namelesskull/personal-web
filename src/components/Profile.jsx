import Title from './global/Title';
import me from '../assets/me.jpeg';
import { Github, Linkedin } from 'lucide-react';

const Profile = () => {
  return (
    <>
      <section className='rounded-2xl p-8 mx-8 my-24 bg-gradient-to-r from-blue-500/10 via-gray-800/40 to-blue-600/30'>
        <Title
          title={'About Me'}
          subtitle={'A Little Insight into Who I Am.'}
        />
        <div className='flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 p-4 border rounded-lg my-8'>
          <img
            className='object-cover w-20 h-20 mt-3 mr-3 rounded-full'
            src={me}
          />
          <div>
            <p
              className='font-display mb-2 text-2xl font-semibold text-white'
              itemProp='author'
            >
              <a href='#' rel='author'>
                Khaqul Huda
              </a>
            </p>
            <div className='mb-4 prose prose-sm text-gray-400'>
              <p>
                Fullstack Web Developer skilled in building modern, scalable web
                applications. I work across both frontend and backend, using
                technologies like React, Next.js, Node.js, and other Tech Stack
                to deliver efficient, secure, and user-friendly solutions.
              </p>
            </div>
            <div className='flex text-white space-x-2'>
              <a
                href='https://www.linkedin.com/in/khaqul-huda/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin />
              </a>
              <a
                href='https://github.com/namelesskull/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
