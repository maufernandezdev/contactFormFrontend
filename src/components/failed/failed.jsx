import React from 'react';
import { useNavigate } from 'react-router-dom';
import './failed.css'

const failed = () => {
  const navigate = useNavigate();
  const goToMain = () =>
  {
    navigate('/');
  }
  return (
    <div>
      <h2>An error occurred in sending!&#128561;</h2>
      <label onClick={goToMain}>Back to main</label>
    </div>
  )
}

export default failed;