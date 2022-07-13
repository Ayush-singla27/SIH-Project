import useInput from "../../hooks/useInput";
const isEmail = value => value.includes('@');
const isPassword = value => value.trim().length >= 3;
let formValid = false
const Login = ()=>
{
    const {
        value: emailValue,
        isValid: emailisValid,
        hasError:emailError,
        valueChangeHandler: emailChangeHandler,
        BlurHandler: emailBlurHandler,
        reset : resetEmail
    
      } = useInput(isEmail);
    
      const {
        value: passwordValue,
        isValid: passwordisValid,
        hasError:passwordError,
        valueChangeHandler: passwordChangeHandler,
        BlurHandler: passwordBlurHandler,
        reset : resetPassword
    
      } = useInput(isPassword);


    const emailClasses = !emailError ? 'form-control' : 'form-control-invalid'
    const passwordClasses = !passwordError ? 'form-control' : 'form-control-invalid'

    if(emailisValid && passwordisValid )
  {
    formValid = true
  }
  if(!emailisValid || !passwordisValid )
  {
    formValid= false
  }

  const submitHandler =(event)=>
  {
    event.preventDefault();
    if(!formValid)
    {
        return;
    }
    resetEmail()
    resetPassword()
  }
return(
  <form onSubmit={submitHandler}>
  <div>
    Login Form
  </div>

  <div className={emailClasses}>

  <label htmlFor='email'>Email</label>
  <input type='text'
   id='email'
  onChange={emailChangeHandler} 
  onBlur={emailBlurHandler} 
  value={emailValue} />

  {emailError && <p className='error-text'>Please Enter a valid Email!</p>}
</div>

<div className={passwordClasses}>

  <label htmlFor='password'>Password</label>
  <input type='password'
   id='set_password'
  onChange={passwordChangeHandler} 
  onBlur={passwordBlurHandler} 
  value={passwordValue} />

  {passwordError && <p className='error-text'>Password should be atleast 3 characters long!</p>}

</div>

<button disabled={!formValid}>Submit</button>
</form>
)
}

export default Login;