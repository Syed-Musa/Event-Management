import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import RigthSideNav from "../RightSideNav/RigthSideNav";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    signIn(email, password)
    .then(result =>{
      console.log(result.user)

      navigate(location?.state ? location?.state : '/');
    })
    .catch(error =>{
      console.error(error)
    });
  }

  return (
    <div>
        <Navbar></Navbar>
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-emerald-300">
          
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Login your Account</h2>
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
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
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
