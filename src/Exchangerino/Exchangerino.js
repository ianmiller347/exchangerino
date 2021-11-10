import { useEffect, useState } from 'react';
import { useClock } from './hooks';
import './Exchangerino.css';

const randomInt = (max) => Math.floor(Math.random() * max);
const Exchangerino = () => {
  const [glitching, setGlitching] = useState(false);
  const [textColor, setTextColor] = useState('rgb(0,0,0)');
  const dateInMs = useClock();

  // set glitching and color
  useEffect(() => {
    setGlitching(`${dateInMs}`.includes('420'));
    if (dateInMs % 69 === 0) {
      setTextColor(`rgb(${randomInt(69)},${randomInt(255)},${randomInt(255)})`);
    }
  }, [dateInMs, glitching]);
  const titleClassName = [
    'exchangerino__title',
    glitching ? ' exchangerino__glitching' : '',
  ].join(' ');
  return (
    <div className="exchangerino">
      <h1 className={titleClassName} style={{ color: textColor }}>
        This is not yours.
      </h1>
      <p>{dateInMs}</p>
    </div>
  );
};

export default Exchangerino;
