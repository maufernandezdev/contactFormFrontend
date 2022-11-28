import React , { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';
import { BsArrowRightShort } from 'react-icons/bs';

const form = () => {
  const navigate = useNavigate();
  const [buttonValue, setButtonValue] = useState('Send message');
  const handleSubmit = (e) =>
  {   
      e.preventDefault();
        setButtonValue('Sending ...')
        setTimeout(() => {
          navigate('/success');
        }, 5000);
  }

  return (
    <div className='form-container'>
        <form className='form'>
          <h2>Hello&#128075;<br />Let's get in touch!</h2>
          <input type='text'  placeholder='Your name' name='name' required />
          <input type='email' placeholder='Your email'   name='email' required />
          <textarea name='comments' cols='30' rows='10' placeholder='How can we help you?'></textarea>
          <div className='button-container'>
            <input type="submit"  value={buttonValue} onClick={(e) => handleSubmit(e)}/>
            {buttonValue === 'Send message'? <BsArrowRightShort></BsArrowRightShort> : null}
          </div>
        </form>
    </div>
  )
}

export default form;