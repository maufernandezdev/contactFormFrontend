import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notFound.css'

const notFound = () => {
  const navigate = useNavigate();
  const goToMain = () =>
  {
    navigate('/');
  }
  return (
    <div>
      <h2>Page not found!&#128517;</h2>
      <label onClick={goToMain}>Back to main</label>
    </div>
  )
}

export default notFound;