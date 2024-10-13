import { useState, useEffect } from 'react';
import body from '../assets/noface.png';
import head from '../assets/head.png';
import eyes from '../assets/eyes.png';
const Mascot = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const eyeX = (clientX / innerWidth - 0.5) * 6;
      const eyeY = (clientY / innerHeight - 0.5) * 6;

      setEyePosition({ x: eyeX, y: eyeY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='relative w-[604px] h-[360px] shadow-lg rounded-xl'>
      {/* Body */}
      <img
        style={{
          transform: `translate(${eyePosition.x / 6}px, ${
            eyePosition.y / 8
          }px)`,
        }}
        src={body}
        alt='Bear body'
        className='absolute top-0 left-0 w-full h-full'
      />

      {/* Head */}
      <img
        style={{
          transform: `translate(${-eyePosition.x}px, ${-eyePosition.y}px)`,
        }}
        src={head}
        alt='Bear head'
        className='absolute top-0 left-0 w-full h-full'
      />

      {/* Eyes */}
      <div
        className='absolute'
        style={{
          left: '0%',
          width: '100%',
          height: '100%',
          transform: `translate(${eyePosition.x / 1.5}px, ${eyePosition.y}px)`,
        }}
      >
        <img
          src={eyes}
          alt='Bear eyes'
          className='w-full h-full object-contain'
        />
      </div>
    </div>
  );
};

export default Mascot;
