import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import RigthSideNav from "../RightSideNav/RigthSideNav";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const {CreateUser} = useContext(AuthContext);
    const [showPassword, setShowPassWord] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        // reset error
        setErrorMessage(null);
        setSuccess(null);

        if(password.length > 6){
          setErrorMessage('Password should have at least 6 character');
          return;
        }else if(!/[A-Z]/.test(password)){
          setErrorMessage('Password should have at least one uppercase');
          return;
        }
  
        CreateUser(email, password)
        .then(result =>{
          console.log(result.user)
          setSuccess('Created message Successfully');
        })

        .catch(error =>{
          console.error(error);
          setErrorMessage(error.message)
        })
    } 

    return (
        <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <Navbar></Navbar>
            <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
            
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-green-300">
              
              <div className="card-body">
                <h2 className="text-2xl font-bold text-center uppercase">Register your Account</h2>
                <form onSubmit={handleRegister}>
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
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="password"
                          className="input input-bordered w-full"
                          required
                        />
                        <span className="absolute text-2xl top-3 right-2" onClick={()=>setShowPassWord(!showPassword)}>
                          {
                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                          }
                        </span>
                      </div>
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-xl font-bold text-red-400">
                          Forgot password?
                        </a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary bg-gradient-to-r from-sky-500 to-green-500 text-white">Register</button>
                    </div>
                </form>
                {
                  errorMessage && <p className="text-red-600 font-bold text-xl text-center">{errorMessage}</p>
                }
                {
                  success && <p className="text-green-600 font-bold text-xl text-center">{success}</p>
                }
                <p className="text-center mt-3">Already have an account? <Link to="/login" className="text-blue-700 font-bold">Login</Link></p>
                <RigthSideNav></RigthSideNav>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Register;