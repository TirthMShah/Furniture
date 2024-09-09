import React from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />
  <link rel="stylesheet" href="/css/loginstyle.css" />
  <div className="container" id="container">
    <div className="form-container sign-up">
      <form action="">
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="#" className="icon">
            {" "}
            <i className="fa-brands fa-google-plus-g" />
          </a>
          <a href="#" className="icon">
            {" "}
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a href="#" className="icon">
            {" "}
            <i className="fa-brands fa-github" />
          </a>
          <a href="#" className="icon">
            {" "}
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <button>Sign Up</button>
      </form>
    </div>
    <div className="form-container sign-in">
      <form action="">
        <h1>Sign In</h1>
        <div className="social-icons">
          <a href="#" className="icon">
            {" "}
            <i className="fa-brands fa-google-plus-g" />
          </a>
          <a href="#" className="icon">
            {" "}
            <i className="fa-brands fa-facebook-f" />
          </a>
          <a href="#" className="icon">
            {" "}
            <i className="fa-brands fa-github" />
          </a>
          <a href="#" className="icon">
            {" "}
            <i className="fa-brands fa-linkedin-in" />
          </a>
        </div>
        <span>or use your email password</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <a href="#">Forget Your Password </a>
        <button>Sign In</button>
      </form>
    </div>
    <div className="toggle-container">
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Welcome Back!</h1>
          <p>Enter your personal details to use all of site features</p>
          <button className="hidden" id="login">
            {" "}
            Sign In
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Hello Friend!</h1>
          <p>Register with your personal details to use all of site features</p>
          <button className="hidden" id="register">
            {" "}
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</>
    </div>
  )
}

// export const Foo = () => <script src="/js/loginscript.js"></script>