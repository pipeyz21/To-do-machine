import React from 'react';
import './TodoLoading.css';

function TodoLoading() {
  return (
    <div className="loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
   </div>
  )
}

export {TodoLoading}