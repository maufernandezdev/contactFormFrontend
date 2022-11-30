import React , { useEffect , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './form.css';
import { BsArrowRightShort } from 'react-icons/bs';
import useForm from '../../hooks/useForm';
import sendForm from '../../utils/sendForm';

const form = () => {
  const navigate = useNavigate();
  const [buttonValue, setButtonValue] = useState('Send message');
  const [nameValid , setNameValid] = useState('');
  const [emailValid , setEmailValid] = useState('');
  const [commentsValid , setCommentsValid] = useState('');
  const initialForm = {
    name:'',
    email:'',
    message:'',
  };


  const validationsForm = (formValues) => 
  {
      let errors = {};
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
      let regexComments = /^.{1,255}$/;
    
      if (!formValues.name.trim())
      {
        setNameValid('');
        errors.name = "The 'Name' field is required";
      }
      else if (!regexName.test(formValues.name.trim()))
      {
        setNameValid('');
        errors.name = "The 'Name' field only accepts letters and blank spaces";
      }
      else
      {
        setNameValid('valid');
      }
      
      if (!formValues.email.trim())
      {
        setEmailValid('');
        errors.email = "The 'Email' field is required";
      }
      else if (!regexEmail.test(formValues.email.trim()))
      {
        setEmailValid('');
        errors.email = "The 'Email' field is invalid";
      }
      else
      {
        setEmailValid('valid');
      }
    
      if (!formValues.message.trim())
      { 
        setCommentsValid('');
        errors.comments = "The comment is required";
        
      } else if (!regexComments.test(formValues.message.trim()))
      {
        setCommentsValid('');
        errors.comments = "The comment exceeds 255 characters.";
      }
      else
      {
        setCommentsValid('valid');
      }
    
      return errors;
  }
  const [formValues, handleInputChange , handleBlur , errors ] = useForm(initialForm, validationsForm);

  const handleSubmit = async (e) =>
  {   
      e.preventDefault();
      handleInputChange(e);
      if (Object.keys(errors).length === 0)
      {
        setButtonValue('Sending ...');
        console.log('form: ', formValues);
        const data = await sendForm(formValues);
        console.log('data in jsx: ', data);
        if(data.result === 'send')
        {
          setTimeout(() => {
            navigate('/success');
          }, 1000);
        }
        else
        {
          setTimeout(() => {
            navigate('/failed');
          }, 1000);
        }
      }
  }

  return (
    <div className='form-container'>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
          <h2>Hello&#128075;<br />Let's get in touch!</h2>
          <input type='text' className={nameValid} placeholder='Your name' name='name' onBlur={handleBlur} onChange={e => handleInputChange(e)} value={formValues.name || ''} />
          {errors.name && <p className='error'>{errors.name}</p>}
          <input type='email' className={emailValid} placeholder='Your email'   name='email' onBlur={handleBlur} onChange={e => handleInputChange(e)} value={formValues.email || ''}/>
          {errors.email && <p className='error'>{errors.email}</p>}
          <textarea name='message' className={commentsValid} cols='30' rows='10' placeholder='How can we help you?' onBlur={handleBlur} onChange={e => handleInputChange(e)} value={formValues.message || ''}></textarea>
          {errors.comments && <p className='error'>{errors.comments}</p>}
          <div className='button-container'>
            <input type="submit"  value={buttonValue}/>
            {buttonValue === 'Send message'? <BsArrowRightShort></BsArrowRightShort> : null}
          </div>
        </form>
    </div>
  )
}

export default form;