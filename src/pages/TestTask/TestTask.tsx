import  TestMain  from '../TestMain';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TestAbout from '../TestAbout';


interface TestTaskType {

}

const TestTask: React.FC<TestTaskType> = () => {



  return (
    <div data-testid='testTask-root'>

      <Link data-testid='main-link' to={'/test-router/main'}>main</Link>
      <Link data-testid='about-link' to={'/test-router/about'}>about</Link>

      
   
     TestTask
    </div>
  );
};

export  {TestTask};