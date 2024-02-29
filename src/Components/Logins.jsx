import React, { useState } from 'react';
import "../Style/Logins.css";

const Logins = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

    const [loginFormData, setLoginFormData]=useState({
        email:'',
        password:'',
    });

    const [signUpFormData, setSignUpFormData]=useState({
      name:'',
      email:'',
      password:'',
  });
    const[errors, setErrors]=useState({
         email:'',
        password:'',
        server:'',
    })
    const validEmail = (email) => {
        // Basic email validation pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const validPassword = (password) => {
        const passwordPattern = /^[a-zA-Z0-9.@_-]{5,}$/;
        return passwordPattern.test(password);
    };
    const handleLogin = (e) => {
      e.preventDefault();
        const useridValid = validEmail(loginFormData.email);
        const passwordValid = validPassword(loginFormData.password);

        setErrors({
            email: useridValid ? '' : 'Please enter a valid email',
            password: passwordValid ? '' : 'Password must be at least 5 characters',
            server: '',
        });

        if (useridValid && passwordValid) {
            console.log('Login successful:', loginFormData);
            setLoginFormData ({
              email:'',
              password:'',
          })
        }
    };

    const handleloginOnChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSignUpOnChange = (e) => {
      const { name, value } = e.target;
      setSignUpFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
      }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    
      const useridValid = validEmail(signUpFormData.email);
      const passwordValid = validPassword(signUpFormData.password);

  
      setErrors({
          email: useridValid ? '' : 'Please enter a valid email',
          password: passwordValid ? '' : 'Password must be at least 5 characters',
          server: '',
      });

      if (useridValid && passwordValid) {
          console.log('register successful:', signUpFormData);
          setSignUpFormData ({
            name:'',
            email:'',
            password:'',
        })
      }
  };

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  return (
    <div className='d-flex justify-content-center'>
       <div className={`containers mt-4 ${isSignUpActive ? 'right-panel-active' : ''}`} id="container">
       {isSignUpActive?  <div className="sign-up-container">
       <h2 className='logintitle text-center mt-5'>Register</h2>
          <form className='mt-5' onSubmit={handleSignUp}>
           
            {/* <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div> */}
            {/* <span>or use your email for registration</span> */}
            <input type="text" placeholder="Name" className=' mb-3' name='name' value={signUpFormData.name} onChange={handleSignUpOnChange} required />
            <input type="email" placeholder="Email" className=''  name='email' value={signUpFormData.email} onChange={handleSignUpOnChange}  />
            {errors.email && <p className="error text-danger">{errors.email}</p>}
            <input type="password" placeholder="Password"  className=' mt-3'  name='password' value={signUpFormData.password} onChange={handleSignUpOnChange} />
            {errors.password && <p className="error text-danger" >{errors.password}</p>}
            <button className=' mt-4' type='submit'>Sign Up</button>
          </form>
        </div>
        : <div className="form-container sign-in-container">
        <h2 className='logintitle text-center mt-5'>Login</h2> 
          <form className='mt-5' onSubmit={handleLogin}>
            {/* <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span> */}
            <input type="email" placeholder="Email" className=' mt-3'  onChange={handleloginOnChange}
                    name ='email'
                    value={loginFormData.email} />
                     {errors.email && <p className="error text-danger" >{errors.email}</p>}
            <input type="password"  className=' mt-3'  placeholder="Password" onChange={handleloginOnChange}
                    value={loginFormData.password} name='password'/>
                      {errors.password && <p className="error m-o text-danger" >{errors.password}</p>}

            <a href="#" className='mt-2'>Forgot your password?</a>
            <button className='mt-3' type='submit' >Login</button>
            {errors.server && <p className="error">{errors.server}</p>}
          </form>
        </div>}
        <div className="overlay-container">
          <div className="overlay">
            <div className={`overlay-panel overlay-left ${isSignUpActive ? 'active' : ''}`}>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button className="ghost" onClick={handleSignInClick}>Login</button>
            </div>
            <div className={`overlay-panel overlay-right ${!isSignUpActive ? 'active' : ''}`}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start the journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logins;
