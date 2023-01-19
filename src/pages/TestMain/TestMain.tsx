import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestMain = () => {
  const navigate = useNavigate()
  return (
    <div data-testid='main-test'>
       main
      <button onClick={()=> navigate('/test-router')}>Back</button>
    </div>
  );
};

export  {TestMain};