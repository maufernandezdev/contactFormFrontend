import React from 'react';
import './success.css';
import { useNavigate } from 'react-router-dom';

const success = () => {
  const navigate = useNavigate();
  const goToMain = () =>
  {
    navigate('/');
  }

  return (
    <div>
      <h2>Your comment was sent successfully&#128521;</h2>
      <h3>Please check your inbox!</h3>
      <label onClick={goToMain}>Back to main</label>
    </div>
  )
}

export default success;