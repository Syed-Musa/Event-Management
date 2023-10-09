import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import RigthSideNav from "../RightSideNav/RigthSideNav";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassWord] = useState(null);
  const [success, setSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = (e) =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    // reset email and password
    setSuccess(null);
    setErrorMessage(null);

    if(password.length > 6){
      setErrorMessage('Password should have at least 6 character');
      return;
    }else if(!/[A-Z]/.test(password)){
      setErrorMessage('Password should have at least one uppercase');
      return;
    }

    signIn(email, password)
    .then(result =>{
      console.log(result.user)
      setSuccess('Created message Successfully');

      navigate(location?.state ? location.state : '/');
    })
    .catch(error =>{
      console.error(error)
      setErrorMessage(error.message);
    });
  }

  return (
    <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
        <Navbar></Navbar>
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-emerald-300">
          
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center uppercase">Login your Account</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword? "text" : "password"}
                      name="password"
                      placeholder="password"
                      className="input input-bordered w-full"
                      required
                    />
                    <span className="absolute text-2xl top-3 right-2" onClick={()=> setShowPassWord(!showPassword)}>
                      {
                        showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                      }
                    </span>
                  </div>
                  
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-red-400 font-bold text-xl">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-gradient-to-r from-violet-500 to-fuchsia-500">Login</button>
                </div>
            </form>
            {
              success && <p className="text-xl text-green-600 font-bold text-center">{success}</p>
            }
            {
              errorMessage && <p className="text-xl text-green-600 font-bold text-center">{errorMessage}</p>
            }
            <p className="text-center mt-3">
              Do not have an account{" "}
              <Link to="/register" className="text-blue-700 font-bold">
                Register
              </Link>
            </p>
            <RigthSideNav></RigthSideNav>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
