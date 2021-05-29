import React from 'react';
import './style.sass';

interface IEBodyContent {
  children: React.ReactChild
}

export default ({ children }: IEBodyContent) => (
  <div className="body-content">
    { children }
  </div>
);
