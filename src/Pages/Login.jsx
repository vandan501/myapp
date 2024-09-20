import { Link } from "react-router-dom"
import logo from "../assests/image/white_logo.png"
import whitelogo from "../assests/image/white-logo.png"
import "./Login.css"
import googlelogo from "../assests/image/googlelogo.png"
function Login(){
    return(
        <div className="custom-login-page">
            <header className="header">

               <div className="logo-section">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                </div> 
                <div className="links-wrapper">
                    <Link to={"/courses"}><p>Courses</p></Link>
                </div>
            </header>

            <section className="login-page-section">
      <div className="logo-side-section">
        <img src={whitelogo} alt="Ashoka University Logo" />
      </div>
      
      <div className="login-form-section">
        <h3>Login</h3>

        <div className="google-login">
          <img src={googlelogo} alt="Google Logo" /> {/* Add the correct path */}
          <span>Google</span>
        </div>
        
        <div className="continue-text">or continue with</div>

        <form className="login-form">
          <div className="input-group">
            <input type="email" placeholder="Email" />
            <i className="icon-envelope" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
            <i className="icon-lock" />
          </div>

          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>

          <button className="login-btn" type="submit">Log In</button>
        </form>
      </div>
    </section>
        </div>
    )
}
export default Login