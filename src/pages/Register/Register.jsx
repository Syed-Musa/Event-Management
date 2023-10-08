import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import RigthSideNav from "../RightSideNav/RigthSideNav";

const Register = () => {
    const {CreateUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
  
        CreateUser(email, password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error =>{
          console.error(error);
        })
    } 

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
            
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-green-300">
              
              <div className="card-body">
                <h2 className="text-2xl font-bold text-center">Register your Account</h2>
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
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                      />
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