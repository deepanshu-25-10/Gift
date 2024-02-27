// App.js
import React, { useState } from 'react';
import Envelope from './Envelope';
import Message from './Message';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('Write your special message here');
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);

  const handleEnvelopeClick = () => {
    setMessage('hellodhaidlasjdlasjdlahsdhashdjashjkdhadasdkaskdhkasdlas\nadaadadadadfsdfsdfsfsdf');
    setIsEnvelopeOpened(true);
  };

  const imageUrl = 'https://as1.ftcdn.net/v2/jpg/02/31/51/10/1000_F_231511040_96PDtoR7QTSexibVR28xxkqCRSnFoaho.jpg';

  return (
    <div className="app" style={{ backgroundImage: `url(${imageUrl})` }}>
      <Envelope onEnvelopeClick={handleEnvelopeClick} />
      {isEnvelopeOpened && <Message content={message} />}
    </div>
  );
};

export default App;
