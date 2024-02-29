import React, { useState } from 'react';
import "../Style/Logins.css";

const Logins = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

    const [formData, setFormData]=useState({
        userid:'',
        password:'',
    });
    const[errors, setErrors]=useState({
        userid:'',
        password:'',
        server:'',
    })
    const validEmail = (userid) => {
        // Basic email validation pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(userid);
    };

    const validPassword = (password) => {
        const passwordPattern = /^[a-zA-Z0-9.@_-]{5,}$/;
        return passwordPattern.test(password);
    };
    const handleLogin = (e) => {
        e.preventDefault();

        const useridValid = validEmail(formData.userid);
        const passwordValid = validPassword(formData.password);

        setErrors({
            userid: useridValid ? '' : 'Please enter a valid email',
            password: passwordValid ? '' : 'Password must be at least 5 characters',
            server: '',
        });

        if (useridValid && passwordValid) {
            // Your login logic here using formData.userid and formData.password
            console.log('Login successful:', formData);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
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
        <div className="sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Login</h1>
            <div className="social-container">
              <a href="#" className="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" className='mb-3'  onChange={handleInputChange}
                    value={formData.userid} name='userid'/>
                     {errors.userid && <p className="error" style={{color:"red"}}>{errors.userid}</p>}
            <input type="password" placeholder="Password" onChange={handleInputChange}
                    value={formData.password} name='password'/>
                      {errors.password && <p className="error" style={{color:"red"}}>{errors.password}</p>}

            <a href="#">Forgot your password?</a>
            <button onClick={handleLogin}>Login</button>
            {errors.server && <p className="error">{errors.server}</p>}
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className={`overlay-panel overlay-left ${isSignUpActive ? 'active' : ''}`}>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal info</p>
              <button className="ghost" onClick={handleSignInClick}>Sign In</button>
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
