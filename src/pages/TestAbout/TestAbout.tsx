import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestAbout = () => {
  const navigate = useNavigate()

  return (
    <div data-testid='about-page'>
      about
      <button onClick={()=> navigate('/test-router')}>Back</button>
      <p style={{color: 'green'}}> ABOUT</p>
   
    </div>
  );
};

export  {TestAbout};