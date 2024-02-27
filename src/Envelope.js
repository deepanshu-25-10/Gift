import React, { useState} from 'react';
import './Envelope.css';

const Envelope = () => {
  const [isFlapOpen, setIsFlapOpen] = useState(false);

  const toggleFlap = () => {
    setIsFlapOpen(!isFlapOpen);
  }

  
  return (
    <div className={`envelope-wrapper ${isFlapOpen ? 'flap' : ''}`} onClick={toggleFlap}>
      <div className="envelope">
        <div className="letter" style={Heading}>
            <strong>🎉 Happy Birthday, Navyuu! 🎂🎈,</strong>
          <div className="text" style={textStyle}>
            <p>
            On your special day, I wish you a year filled with joy, laughter, and unforgettable moments! 🌟 May your heart be as light as balloons, and your day as sweet as youh. 🍰✨ Here's to another trip around the sun and all the adventures it brings! 🌞🌈

🎁 May your dreams take flight like confetti, and your wishes come true like shooting stars! 🚀✨ Enjoy every moment, surrounded by love, and let this year be as bright and colorful as a fireworks display! 🎇🌺

Cheers to you, My Navyuu! 🥳🎊 Wishing you a fantastic birthday celebration and a fantastic year ahead! and I lovee you babe🎁🎂💖
            </p>
          </div>
        </div>
      </div>
      <div className="heart"></div>
    </div>
  );
};

const textStyle = {
  fontFamily: 'cursive',
  color: 'black',
  lineHeight: 1,
};
const Heading = {
fontFamily: 'serif'
};

export default Envelope;
