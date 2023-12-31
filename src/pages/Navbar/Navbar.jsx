import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const{user, logOut} = useContext(AuthContext);

    const handleSignOut = () =>{
      logOut()
      .then()
      .catch()
    }

    const navLinks = <>
        <li className="text-xl font-semibold"><NavLink to="/">Home</NavLink></li>
        <li className="text-xl font-semibold"><NavLink to="/login">Login</NavLink></li>
        <li className="text-xl font-semibold"><NavLink to="/register">Register</NavLink></li>
        {user && <>
          <li className="text-xl font-semibold"><NavLink to="/orders">Orders</NavLink></li>
          <li className="text-xl font-semibold"><NavLink to="/othersection">OtherSection</NavLink></li>
        </>}
    </>

    return (
        <div className="px-8 mx-auto p-5" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
          <div className="navbar bg-blue-100 mt-4 md:w-[500px] lg:w-full">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  {navLinks}
                </ul>
              </div>
              <a className=" text-[14px] lg:text-2xl text-orange-400 font-bold uppercase">HealthCare</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {navLinks}
              </ul>
            </div>
            <div className="navbar-end">
              
              {
                user ? <>
                <span className="font-bold">{user.email}</span>
                <img className="w-4 lg:w-10 rounded-full" src= {user.photoURL} />
                <button onClick={handleSignOut} className="btn text-white bg-gradient-to-r from-yellow-500 to-orange-500">Sign Out</button>
                </>
                :
                <Link to="/login"><button className="btn text-white bg-gradient-to-r from-yellow-500 to-orange-500">Login</button></Link>
              }  
            </div>
      </div>
        </div>
  );
};

export default Navbar;
